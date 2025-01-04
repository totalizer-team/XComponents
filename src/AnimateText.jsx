import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { varContainer, varFade } from './animate/variants';

import { getVariant } from './animate/get-variant';

// ----------------------------------------------------------------------

export const animateTextClasses = {
  root: 'animate-text-root',
  lines: 'animate-text-lines',
  line: 'animate-text-line',
  word: 'animate-text-word',
  char: 'animate-text-char',
  space: 'animate-text-space',
  srOnly: 'sr-only',
  dataIndex: '[data-columns="3"]',
};

export default function AnimateText({
  children,
  animate = {},
  sx = {},
  className,
  ...other
}) {
  const text = typeof children === 'string' ? children : '';

  const {
    name = '',
    distance = 160,
    once = true,
    amount = 1 / 3,
    repeatDelay = 100,
  } = animate;

  const variants = getVariant(name, distance);
  const ref = useRef(null);

  const controls = useAnimation();

  const textArray = Array.isArray(text) ? text : [text];

  const isInView = useInView(ref, { once, amount });

  useEffect(() => {
    let timeout;

    const show = () => {
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start('initial');
          controls.start('animate');
        }, repeatDelay);
      } else {
        controls.start('animate');
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start('initial');
    }

    return () => clearTimeout(timeout);
  }, [controls, isInView, repeatDelay]);

  return (
    <Typography
      // component={component}
      className={animateTextClasses.root.concat(
        className ? ` ${className}` : '',
      )}
      sx={{
        p: 0,
        m: 0,
        /**
         * Utilities for improving accessibility with screen readers.
         * https://v1.tailwindcss.com/docs/screen-readers
         */
        [`& .${animateTextClasses.srOnly}`]: {
          p: 0,
          width: '1px',
          height: '1px',
          margin: '-1px',
          borderWidth: 0,
          overflow: 'hidden',
          position: 'absolute',
          whiteSpace: 'nowrap',
          clip: 'rect(0, 0, 0, 0)',
        },
        overflow: 'hidden',
        ...sx,
      }}
      {...other}
    >
      <span className={animateTextClasses.srOnly}>{textArray.join(' ')}</span>

      <Box
        component={motion.span}
        ref={ref}
        initial="initial"
        animate={controls}
        exit="exit"
        variants={varContainer()}
        aria-hidden
        className={animateTextClasses.lines}
      >
        {textArray.map((line, lineIndex) => (
          <Box
            component="span"
            key={`${line}-${lineIndex}`}
            data-index={lineIndex}
            className={animateTextClasses.line}
            sx={{ display: 'block' }}
          >
            {line.split(' ').map((word, wordIndex) => {
              const lastWordInline =
                line.split(' ')[line.split(' ').length - 1];

              return (
                <Box
                  component="span"
                  key={`${word}-${wordIndex}`}
                  data-index={wordIndex}
                  className={animateTextClasses.word}
                  sx={{ display: 'inline-block' }}
                >
                  {word.split('').map((char, charIndex) => (
                    <Box
                      component={motion.span}
                      key={`${char}-${charIndex}`}
                      variants={variants ?? varFade().in}
                      data-index={charIndex}
                      className={animateTextClasses.char}
                      sx={{ display: 'inline-block' }}
                    >
                      {char}
                    </Box>
                  ))}

                  {lastWordInline !== word && (
                    <Box
                      component="span"
                      className={animateTextClasses.space}
                      sx={{ display: 'inline-block' }}
                    >
                      &nbsp;
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>
    </Typography>
  );
}
