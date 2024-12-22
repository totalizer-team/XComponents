import React, { useState } from 'react';

import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { Box, IconButton, Stack } from '@mui/material';

import XAnimateNumber from '@totalizer/xcomponents/XAnimateNumber';

export default () => {
  const [tick, setTick] = useState(0);
  return (
    <Box sx={{ position: 'relative', p: 4 }}>
      <Stack spacing={1} alignItems="center">
        <XAnimateNumber
          key={`01_${tick}`}
          animate={{
            to: 500,
            unit: '+',
          }}
          fontSize={24}
        />

        <XAnimateNumber
          key={`02_${tick}`}
          animate={{
            from: 100,
            to: 324.23,
            toFixed: 2,
            unit: 'k',
          }}
          fontSize={24}
        />
      </Stack>
      <IconButton
        sx={{
          position: 'absolute',
          zIndex: 10,
          top: 10,
          right: 10,
        }}
        onClick={() => {
          setTick(tick + 1);
        }}
        size="small"
      >
        <ReplayRoundedIcon />
      </IconButton>
    </Box>
  );
};
