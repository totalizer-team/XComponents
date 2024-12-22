import { Stack } from '@mui/material';
import XAnimateText from '@totalizer/xcomponents/XAnimateText';
import { useState } from 'react';

import ControlPanel from './ControlPanel';

export default () => {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState('slideInUp');
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack
        direction="row"
        sx={{ p: 2, width: '100%' }}
        alignItems="center"
        justifyContent="center"
      >
        <XAnimateText
          key={count}
          variant="h3"
          text="Totalizer"
          distance={400}
          animate={animate}
        />
      </Stack>
      <ControlPanel
        value={animate}
        onChange={(v) => {
          setCount(count + 1);
          setAnimate(v);
        }}
      />
    </Stack>
  );
};
