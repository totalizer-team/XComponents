import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Box from '@mui/material/Box';

const borderGradient = (props) => {
  return {
    inset: 0,
    width: '100%',
    content: '""',
    height: '100%',
    margin: 'auto',
    position: 'absolute',
    borderRadius: 'inherit',
    padding: props?.padding ?? '2px',
    //
    mask: 'linear-gradient(#FFF 0 0) content-box, linear-gradient(#FFF 0 0)',
    WebkitMask:
      'linear-gradient(#FFF 0 0) content-box, linear-gradient(#FFF 0 0)',
    maskComposite: 'exclude',
    WebkitMaskComposite: 'xor',
    ...(props?.color && {
      background: `linear-gradient(${props.color})`,
    }),
  };
};

export default function XAnimateBorder({ animate, sx, children }) {
  const theme = useTheme();

  const rootRef = useRef(null);

  const animateRef = useRef(null);

  const [aspectRatio, setAspectRatio] = useState(1);

  const [animateStyle, setAnimateStyle] = useState(null);

  const values = {
    disable: animate?.disable,
    delay: animate?.delay ?? 0,
    loop: animate?.loop ?? true,
    angle: animate?.angle ?? 315,
    length: animate?.length ?? 40,
    width: animate?.width ?? '2px',
    color: animate?.color ?? theme.palette.primary.main,
    ease: animate?.ease ?? 'linear',
    duration: animate?.duration ?? 8,
    distance: animate?.distance ?? 20,
    repeatType: animate?.repeatType ?? 'loop',
    disableDoubleline: animate?.disableDoubleline,
    outline:
      animate?.outline ??
      `135deg, ${theme.palette.divider}, ${theme.palette.divider}`,
  };

  useEffect(() => {
    if (!values.disable) {
      if (rootRef.current) {
        const { width, height } = rootRef.current.getBoundingClientRect();

        setAspectRatio(width / height);
      }

      if (!values.disableDoubleline && animateRef.current) {
        const style = getComputedStyle(animateRef.current);

        setAnimateStyle({
          paddingLeft: style.paddingLeft,
          paddingRight: style.paddingRight,
          paddingBottom: style.paddingBottom,
          paddingTop: style.paddingTop,
          borderTopLeftRadius: style.borderTopLeftRadius,
          borderTopRightRadius: style.borderTopRightRadius,
          borderBottomLeftRadius: style.borderBottomLeftRadius,
          borderBottomRightRadius: style.borderBottomRightRadius,
        });
      }
    }
  }, [values.disable, values.disableDoubleline]);

  const background = (color) => {
    const degs = [-55, 35, 125, 215, 305];

    const end = `transparent ${values.angle - (2 + values.length)}deg, ${color}  ${values.angle}deg, transparent ${values.angle + values.length}deg`;

    return [
      `conic-gradient(from ${degs[0]}deg at ${values.distance / aspectRatio}% ${values.distance}% , ${end})`,
      `conic-gradient(from ${degs[1]}deg at ${100 - values.distance / aspectRatio}% ${values.distance}% , ${end})`,
      `conic-gradient(from ${degs[2]}deg at ${100 - values.distance / aspectRatio}% ${100 - values.distance}% , ${end})`,
      `conic-gradient(from ${degs[3]}deg at ${values.distance / aspectRatio}% ${100 - values.distance}% , ${end})`,
      `conic-gradient(from ${degs[4]}deg at ${values.distance / aspectRatio}% ${values.distance}% , ${end})`,
    ];
  };

  const transition = {
    ease: values.ease,
    delay: values.delay,
    duration: values.duration,
    repeatType: values.repeatType,
    repeat: values.loop ? Infinity : 1,
    times:
      aspectRatio > 1
        ? [0, 0.25 + 0.25 / aspectRatio, 0.5, 0.75 + 0.25 / aspectRatio, 1]
        : [0, aspectRatio * 0.25, 0.5, 0.5 + aspectRatio * 0.25, 1],
  };

  return (
    <Box
      component="div"
      ref={rootRef}
      sx={{
        minWidth: 40,
        minHeight: 40,
        position: 'relative',
        borderRadius: 'inherit',
        '&::before': {
          ...borderGradient({ color: values.outline, padding: values.width }),
        },
        ...sx,
      }}
    >
      <Box
        ref={animateRef}
        component={motion.div}
        transition={transition}
        animate={
          !values.disable
            ? {
                background: background(
                  typeof values.color === 'string'
                    ? values.color
                    : values.color[0],
                ),
              }
            : undefined
        }
        sx={{
          ...borderGradient({ padding: values.width }),
        }}
      />

      {!values.disable && !values.disableDoubleline && (
        <Box
          component={motion.div}
          transition={transition}
          animate={{
            background: background(
              typeof values.color === 'string' ? values.color : values.color[1],
            ),
          }}
          sx={{
            ...borderGradient(),
            transform: 'scale(-1)',
            ...(animateStyle && {
              paddingTop: animateStyle?.paddingBottom,
              paddingBottom: animateStyle?.paddingTop,
              paddingLeft: animateStyle?.paddingRight,
              paddingRight: animateStyle?.paddingLeft,
              borderTopLeftRadius: animateStyle?.borderBottomRightRadius,
              borderTopRightRadius: animateStyle?.borderBottomLeftRadius,
              borderBottomLeftRadius: animateStyle?.borderTopRightRadius,
              borderBottomRightRadius: animateStyle?.borderTopLeftRadius,
            }),
          }}
        />
      )}
    </Box>
  );
}
