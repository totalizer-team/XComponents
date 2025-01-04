import React from 'react';

import { Button, Stack } from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import SettingsIcon from '@mui/icons-material/Settings';

import ActionMenu from '@totalizer/xcomponents/ActionMenu';

export default () => {
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
      <ActionMenu
        options={options}
        placement="bottom-start"
        onClick={(item) => {
          console.log(item);
        }}
      >
        <Button size="small" variant="outlined" startIcon={<SettingsIcon />}>
          More
        </Button>
      </ActionMenu>
    </Stack>
  );
};
