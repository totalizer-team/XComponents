import React from 'react';

import { Box, Stack, Typography } from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import SettingsIcon from '@mui/icons-material/Settings';

import ContextMenu from '@totalizer/xcomponents/ContextMenu';

import BaseMenuList from '@totalizer/xcomponents/components/BaseMenuList';

export default () => {
  const optionsTest = [
    {
      icon: <AccountCircleIcon />,
      title: 'Profile',
      secondary: '⇧⌘P',
    },
    {
      icon: <CreditCardIcon />,
      title: 'Billing',
      secondary: '⌘B',
    },
    {
      icon: <SettingsIcon />,
      title: 'Settings',
      secondary: '⌘S',
      children: [
        {
          icon: <MarkUnreadChatAltIcon />,
          title: 'Message',
          label: '+2',
          labelColor: 'primary',
        },
        {
          icon: <DoNotTouchIcon />,
          title: 'Disabled',
          disabled: true,
        },
      ],
    },
  ];

  const options = [
    {
      c: 'Title',
      title: 'My Account',
    },
    {
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
      title: 'My Name',
      info: 'Id: 301841',
    },
    {
      c: 'Divider',
    },
    {
      icon: <AccountCircleIcon />,
      title: 'Profile',
      secondary: '⇧⌘P',
    },
    {
      icon: <CreditCardIcon />,
      title: 'Billing',
      secondary: '⌘B',
    },
    {
      icon: <SettingsIcon />,
      title: 'Settings',
      secondary: '⌘S',
      chidren: [
        {
          icon: <MarkUnreadChatAltIcon />,
          title: 'Message',
          label: '+2',
          labelColor: 'primary',
        },
        {
          icon: <DoNotTouchIcon />,
          title: 'Disabled',
          disabled: true,
        },
      ],
    },
    {
      c: 'Divider',
    },
    {
      icon: <MarkUnreadChatAltIcon />,
      title: 'Message',
      label: '+2',
      labelColor: 'primary',
    },
    {
      icon: <DoNotTouchIcon />,
      title: 'Disabled',
      disabled: true,
    },
  ];

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <BaseMenuList options={optionsTest} />
      <ContextMenu
        options={options}
        placement="bottom-start"
        onClick={(item) => {
          console.log(item);
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 150,
            height: 80,
            borderRadius: 1,
            border: 1,
            borderStyle: 'dashed',
            borderColor: 'primary.main',
          }}
        >
          <Typography fontSize={14}>Right click here</Typography>
        </Box>
      </ContextMenu>
    </Stack>
  );
};
