import React from 'react';

import { Stack } from '@mui/material';

import Compare from '@totalizer/xcomponents/Compare';

export default () => {
  return (
    <Stack alignItems="center">
      <Compare
        firstImage="/home-light.png"
        secondImage="/home-dark.png"
        autoplay
        sx={{
          width: 400,
          height: 250,
          boxShadow: '0 0 0 3px rgba(125,125,125,.5)',
          borderRadius: 1,
        }}
      ></Compare>
    </Stack>
  );
};
