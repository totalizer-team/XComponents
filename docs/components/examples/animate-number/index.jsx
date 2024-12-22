import React from 'react';

import { Stack } from '@mui/material';
import XAnimateNumber from '@totalizer/xcomponents/XAnimateNumber';

import { useTheme } from '@mui/material/styles';

export default () => {
  const theme = useTheme();
  return (
    <Stack spacing={3} alignItems="center">
      <XAnimateNumber variant="h3" to={500} unit="+" />

      <XAnimateNumber
        variant="h3"
        from={100}
        to={324.23}
        toFixed={2}
        unit="k"
      />
    </Stack>
  );
};
