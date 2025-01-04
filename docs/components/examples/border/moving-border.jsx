import React from 'react';

import { Avatar, ListItemText, Stack, useTheme } from '@mui/material';
import MovingBorder from '@totalizer/xcomponents/MovingBorder';

export default () => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      spacing={3}
      justifyContent="center"
      alignItems={'center'}
    >
      <MovingBorder
        sx={{
          width: 160,
          borderRadius: 2,
          p: 2,
        }}
      >
        <ListItemText primary="Totalizer" secondary="default" />
      </MovingBorder>

      <MovingBorder
        animate={{
          double: true,
          width: 2,
          duration: 4,
        }}
        sx={{
          width: 160,
          borderRadius: 2,
          p: 2,
          background: 'rgba(0,0,0,.05)',
        }}
      >
        <ListItemText primary="Totalizer" secondary="double line" />
      </MovingBorder>

      <MovingBorder
        animate={{
          double: true,
          width: 8,
          duration: 4,
          outline: theme.palette.text.disabled,
          color: theme.palette.text.primary,
          distance: 100,
        }}
        sx={{
          borderRadius: '50%',
        }}
      >
        <Avatar>X</Avatar>
      </MovingBorder>
    </Stack>
  );
};
