/* eslint-disable react/no-array-index-key */
import { Button, Chip, Popover, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import React, { useRef, useState } from 'react';

import BaseMenuItem from './components/BaseMenuItem';

const ParentItem = ({
  item = {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  _selected = false,
  _globalClickEvent = () => {},
  _ref = null,
}) => {
  const theme = useTheme();

  const {
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
    <Button
      variant="text"
      ref={_ref}
      selected={_selected}
      disabled={disabled}
      onClick={(e) => {
        onClick(e);
        _globalClickEvent(e);
        e.stopPropagation();
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        textTransform: 'none',
        '.MuiSvgIcon-root': {
          fontSize: 18,
          color: _selected
            ? theme.palette.primary.main
            : disabled
              ? 'inherit'
              : 'GrayText',
          transition: 'all 0.2s ease-in-out',
        },
      }}
      color={_selected ? 'primary' : 'inherit'}
      startIcon={icon}
    >
      <Stack direction="row" spacing={0.5} alignItems="center">
        <Typography fontSize={14}>{title}</Typography>
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
      </Stack>
    </Button>
  );
};

const ListContent = ({ item, open, isSelected, onClick = () => {} }) => {
  const hasSelected = item.children.some(isSelected);

  const [expanded, setExpanded] = useState(
    open ? hasSelected || item.open : false,
  );

  const openRef = useRef(open);

  const itemRef = useRef(null);

  const onExpanded = () => {
    setExpanded(true);
  };
  const onClose = () => {
    setExpanded(false);
  };

  return (
    <>
      <ParentItem
        _parent
        _isOpen={expanded}
        item={item}
        onMouseEnter={onExpanded}
        onMouseLeave={onClose}
        _ref={itemRef}
        _globalClickEvent={(e) => onClick(item, e)}
        _selected={isSelected(item) || item.children.some(isSelected)}
      />
      <Popover
        open={expanded}
        anchorEl={itemRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={() => {
          onClose();
        }}
        sx={{
          pointerEvents: 'none',
          transform: 'translateY(-2px)',
        }}
        disableRestoreFocus
        slotProps={{
          paper: {
            onMouseEnter: onExpanded,
            onMouseLeave: onClose,
            sx: {
              ...(expanded && { pointerEvents: 'auto' }),
            },
          },
        }}
      >
        <Stack spacing={0.5} sx={{ p: 1, minWidth: 150 }}>
          {item.children.map((el, j) => (
            <BaseMenuItem
              key={j}
              item={el}
              selected={isSelected(el)}
              cb={(e) => {
                onClose();
                onClick(el, e);
              }}
            />
          ))}
        </Stack>
      </Popover>
    </>
  );
};

const NavigationMenu = function ({
  size = 'medium', // medium
  options = [],
  isSelected = () => {
    return false;
  },
  onClick = () => {
    return false;
  },
  ...other
}) {
  return (
    <Stack direction="row" spacing={0.25} alignItems={'inherit'} {...other}>
      {options.map((item, i) => {
        if (item.children) {
          return (
            <ListContent
              key={i}
              item={item}
              isSelected={isSelected}
              onClick={onClick}
            />
          );
        } else {
          return (
            <ParentItem
              key={i}
              item={item}
              _selected={isSelected(item)}
              _globalClickEvent={(e) => {
                onClick(item, e);
              }}
            />
          );
        }
      })}
    </Stack>
  );
};

export default NavigationMenu;
