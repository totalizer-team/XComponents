import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

import Typography from '@mui/material/Typography';

export default function CountUp({
  animate: animateProps = {},
  sx = {},
  ...other
}) {
  const {
    to = 0,
    from = 0,
    toFixed = 0,
    once = true,
    duration = 2,
    amount = 0.5,
    unit: unitProp,
  } = animateProps;

  const ref = useRef(null);

  const shortNumber = shortenNumber(to);

  const startCount = useMotionValue(from);

  const endCount = shortNumber ? shortNumber.value : to;

  const unit = unitProp ?? shortNumber?.unit;

  const inView = useInView(ref, { once, amount });

  const rounded = useTransform(startCount, (latest) =>
    latest.toFixed(isFloat(latest) ? toFixed : 0),
  );

  useEffect(() => {
    if (inView) {
      animate(startCount, endCount, { duration });
    }
  }, [duration, endCount, inView, startCount]);

  return (
    <Typography
      sx={{
        p: 0,
        m: 0,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <motion.span ref={ref}>{rounded}</motion.span>
      {unit}
    </Typography>
  );
}

// ----------------------------------------------------------------------

function isFloat(n) {
  return typeof n === 'number' && !Number.isInteger(n);
}

function shortenNumber(num) {
  if (num >= 1e9) {
    return { unit: 'b', value: num / 1e9 };
  }
  if (num >= 1e6) {
    return { unit: 'm', value: num / 1e6 };
  }
  if (num >= 1e3) {
    return { unit: 'k', value: num / 1e3 };
  }
  return undefined;
}
