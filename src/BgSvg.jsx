import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Lines } from './svg';

export default () => {
  return (
    <Box
      component={motion.svg}
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="1080"
      fill="none"
      viewBox="0 0 1440 1080"
      initial="hidden"
      animate="visible"
      sx={{ width: 1, height: 1 }}
    >
      <defs>
        <radialGradient
          id="mask_gradient_id"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(720 0 0 420 720 560)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity={1} />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.08} />
        </radialGradient>

        <mask id="mask_id">
          <ellipse
            cx="50%"
            cy="50%"
            rx="50%"
            ry="36%"
            fill="url(#mask_gradient_id)"
          />
        </mask>
      </defs>

      <g mask="url(#mask_id)">
        <Lines strokeCount={12} />
      </g>
    </Box>
  );
};
