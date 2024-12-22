import { motion } from 'framer-motion';

export function Lines({ strokeCount }) {
  const draw = {
    x: {
      hidden: { x2: 0, strokeOpacity: 0 },
      visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
          x2: '100%',
          strokeOpacity: 1,
          transition: {
            strokeOpacity: { delay, duration: 0.01 },
            x2: {
              delay,
              bounce: 0,
              duration: 1.5,
              type: 'spring',
            },
          },
        };
      },
    },
    y: {
      hidden: { y2: 0, strokeOpacity: 0 },
      visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
          y2: '100%',
          strokeOpacity: 1,
          transition: {
            strokeOpacity: { delay, duration: 0.01 },
            y2: {
              delay,
              bounce: 0,
              duration: 1.5,
              type: 'spring',
            },
          },
        };
      },
    },
  };

  const translateY = (index) =>
    strokeCount / 2 > index
      ? `translateY(calc(((${index} * 80px) + 80px / 2) * -1))`
      : `translateY(calc(((${strokeCount - (index + 1)} * 80px) + 80px / 2)))`;

  const linesX = (
    <>
      {[...Array(strokeCount)].map((_, index) => (
        <motion.line
          key={index}
          x1="0"
          x2="100%"
          y1="50%"
          y2="50%"
          variants={draw.x}
          style={{
            transform: translateY(index),
            stroke: 'rgba(145, 158, 171, 0.48)',
            strokeDasharray: '3px',
            strokeWidth: '1px',
          }}
        />
      ))}
    </>
  );

  const translateX = (index) =>
    strokeCount / 2 > index
      ? `translateX(calc(((${index} * 80px) + 80px / 2) * -1))`
      : `translateX(calc(((${strokeCount - (index + 1)} * 80px) + 80px / 2)))`;

  const linesY = (
    <>
      {[...Array(strokeCount)].map((_, index) => (
        <motion.line
          key={index}
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
          variants={draw.y}
          style={{
            transform: translateX(index),
            stroke: 'rgba(145, 158, 171, 0.48)',
            strokeDasharray: '3px',
            strokeWidth: '1px',
          }}
        />
      ))}
    </>
  );

  return (
    <>
      {linesX}
      {linesY}
    </>
  );
}
