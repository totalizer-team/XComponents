import { Stack } from '@mui/material';
import AnimateText from '@totalizer/xcomponents/AnimateText';
import { useState } from 'react';

import ControlPanel from './ControlPanel';

export default () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('slideInUp');
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack
        direction="row"
        sx={{ p: 2, width: '100%' }}
        alignItems="center"
        justifyContent="center"
      >
        <AnimateText
          key={count}
          animate={{
            name,
            distance: 200,
          }}
          sx={{
            fontSize: 24,
          }}
        >
          Totalizer
        </AnimateText>
      </Stack>
      <ControlPanel
        value={name}
        onChange={(v) => {
          setCount(count + 1);
          setName(v);
        }}
      />
    </Stack>
  );
};
