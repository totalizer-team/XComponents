/* eslint-disable react/no-array-index-key */
import {
  Avatar,
  Chip,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import React from 'react';

export default ({
  item = {},
  selected = false,
  cb = () => {},
  sx,
  ...other
}) => {
  const theme = useTheme();

  const {
    avatar = '',
    icon = null,
    title = '',
    info = '',
    secondary = '',
    label = '',
    labelColor = '',
    disabled = false,
    onClick = () => {},
  } = item;

  return (
    <MenuItem
      onClick={(e) => {
        onClick(e);
        cb(e);
        e.stopPropagation();
      }}
      selected={selected}
      disabled={disabled}
      sx={{
        pt: 0.5,
        pb: 0.5,
        pl: 1,
        pr: 1,
        minHeight: '0px !important',
        borderRadius: 1,
        ...sx,
      }}
      {...other}
    >
      {avatar && (
        <ListItemAvatar sx={{ mr: 1, minWidth: 0 }}>
          <Avatar src={avatar} />
        </ListItemAvatar>
      )}
      {icon && (
        <ListItemIcon
          sx={{
            minWidth: '0 !important',
            mr: 1,
            '.MuiSvgIcon-root': {
              fontSize: 20,
              color: selected ? theme.palette.primary.main : 'inherit',
              transition: 'all 0.2s ease-in-out',
            },
          }}
        >
          {icon}
        </ListItemIcon>
      )}
      <ListItemText
        sx={{
          mr: 1,
          '.MuiTypography-root': {
            lineHeight: 1.5,
          },
        }}
      >
        <Typography
          variant="body2"
          noWrap
          color={selected ? 'primary' : 'inherit'}
          fontSize={14}
        >
          {title}
        </Typography>
        {!!info && (
          <Typography
            variant="body2"
            fontSize={12}
            noWrap
            color={selected ? theme.palette.primary.main : 'GrayText'}
          >
            {info}
          </Typography>
        )}
      </ListItemText>

      <Stack direction="row" spacing={0.5} alignItems="center">
        {!!label && (
          <Chip
            label={label}
            color={labelColor}
            size="small"
            sx={{
              height: 18,
              fontSize: 12,
            }}
          ></Chip>
        )}
        {secondary && (
          <Typography variant="caption" color="text.secondary">
            {secondary}
          </Typography>
        )}
      </Stack>
    </MenuItem>
  );
};
