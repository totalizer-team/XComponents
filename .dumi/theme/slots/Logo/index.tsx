import { Avatar, Button, Stack, Typography } from '@mui/material';
import { history, useLocale, useSiteData } from 'dumi';
import React, { type FC } from 'react';

const Logo: FC = () => {
  const { themeConfig } = useSiteData();
  const locale = useLocale();

  return (
    <Stack
      direction="row"
      alignItems="center"
      onClick={() => {
        history.push('base' in locale ? locale.base : '/');
      }}
    >
      <Button
        startIcon={themeConfig.logo ? <Avatar src={themeConfig.logo} /> : ''}
        sx={{
          textTransform: 'none',
          borderColor: 'divider',
        }}
        color="inherit"
        // variant="contained"
        // color="secondary"
      >
        <Typography fontSize={18}>{themeConfig.name}</Typography>
      </Button>
    </Stack>
  );
};

export default Logo;
