import React, { useState } from 'react';

import { Box, FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';

import XNavigation from '@totalizer/xcomponents/XNavigation';

import config from '../navigation-config';

export default () => {
  const [path, setPath] = useState('/Account');

  const [variant, setVariant] = useState('vertical');
  const [size, setSize] = useState('medium');

  return (
    <Stack direction="row" justifyContent="space-between">
      <Box sx={{ p: 2 }}>
        <XNavigation
          variant={variant}
          size={size}
          options={config}
          isSelected={(item) => item.path === path}
          onClick={(item) => {
            if (item.path) setPath(item.path);
          }}
        />
      </Box>
      <Box sx={{ p: 2, width: 300, borderLeft: 1, borderColor: 'divider' }}>
        <RadioGroup
          row
          value={variant}
          onChange={(e) => {
            setVariant(e.target.value);
          }}
        >
          <FormControlLabel
            value="vertical"
            control={<Radio />}
            label="vertical"
          />
          <FormControlLabel
            value="horizontal"
            control={<Radio />}
            label="horizontal"
          />
          <FormControlLabel
            value="sidebar"
            control={<Radio />}
            label="sidebar"
          />
        </RadioGroup>
        <RadioGroup
          row
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        >
          <FormControlLabel value="small" control={<Radio />} label="small" />
          <FormControlLabel value="medium" control={<Radio />} label="medium" />
          <FormControlLabel value="large" control={<Radio />} label="large" />
        </RadioGroup>
      </Box>
    </Stack>
  );
};
