import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import React from 'react';
export default ({ children, animate = true, sx = {}, ...other }) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0 50%', '100% 50%', '0 50%'],
    },
  };

  const gradientStyle = {
    backgroundImage:
      'radial-gradient(circle farthest-side at 0 100%, #00ccb1, transparent), radial-gradient(circle farthest-side at 100% 0, #7b61ff, transparent), radial-gradient(circle farthest-side at 100% 100%, #ffc414, transparent), radial-gradient(circle farthest-side at 0 0, #1ca0fb, #141316)',
    position: 'absolute',
    inset: '0',
    borderRadius: '24px',
    zIndex: '1',
    willChange: 'transform',
  };

  return (
    <Box
      sx={{
        position: 'relative',
        padding: '4px',
        overflow: 'hidden',
        ...sx,
      }}
      {...other}
    >
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          ...gradientStyle,
          opacity: '0.6',
          filter: 'blur(16px)',
          transition: 'opacity 0.5s',
        }}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={gradientStyle}
      />
      <div
        style={{
          position: 'relative',
          zIndex: '10',
        }}
      >
        {children}
      </div>
    </Box>
  );
};
