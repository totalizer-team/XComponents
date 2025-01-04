import React from 'react';

import { Stack } from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import SettingsIcon from '@mui/icons-material/Settings';

import BaseMenuList from '@totalizer/xcomponents/components/BaseMenuList';

export default () => {
  const options = [
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
      children: [
        {
          title: 'Message',
          label: '+2',
          labelColor: 'primary',
        },
        {
          title: 'Email',
        },
        {
          title: 'Team',
          children: [
            {
              title: 'Create',
            },
            {
              title: 'Invite users',
            },
            {
              title: 'Support',
            },
          ],
        },
        {
          title: 'API',
          disabled: true,
        },
      ],
    },
    {
      icon: <DoNotTouchIcon />,
      title: 'Disabled',
      disabled: true,
    },
  ];

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <BaseMenuList
        options={options}
        onClick={(item) => {
          console.log(item);
        }}
      />
    </Stack>
  );
};
