import React from 'react';

import { Box } from '@mui/material';

import NavigationMenu from '@totalizer/xcomponents/NavigationMenu';

import config from '../navigation-config';

export default () => {
  const [path, setPath] = React.useState('/Account');

  return (
    <Box>
      <NavigationMenu
        options={config}
        isSelected={(item) => item.path === path}
        onClick={(item) => {
          if (item.path) setPath(item.path);
        }}
      />
    </Box>
  );
};
