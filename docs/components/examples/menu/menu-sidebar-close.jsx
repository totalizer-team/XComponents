import React from 'react';

import { Box } from '@mui/material';

import SidebarMenu from '@totalizer/xcomponents/SidebarMenu';

import config from '../navigation-config';

export default () => {
  const [path, setPath] = React.useState('/Account');

  return (
    <Box sx={{ width: 300 }}>
      <SidebarMenu
        open={false}
        options={config}
        isSelected={(item) => item.path === path}
        onClick={(item) => {
          if (item.path) setPath(item.path);
        }}
      />
    </Box>
  );
};
