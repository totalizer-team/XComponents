import React from 'react';

import { Stack } from '@mui/material';
import XAnimateBorder from '@totalizer/xcomponents/XAnimateBorder';

import { useTheme } from '@mui/material/styles';

export default () => {
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={3} justifyContent="center">
      <XAnimateBorder
        animate={{
          width: 0.5,
        }}
        sx={{
          width: 160,
          height: 80,
          borderRadius: 2,
        }}
      />
    </Stack>
  );
};
