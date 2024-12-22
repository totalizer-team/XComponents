/* eslint-disable react/no-array-index-key */
import {
  Box,
  Chip,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import React, { useEffect, useRef, useState } from 'react';

import BaseMenuItem from './components/BaseMenuItem';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SIZE_CONFIG = {
  medium: {
    MAIN_FONT_SIZE: 14,
    MAIN_P: [0.5, 1],
    CONTENT_PL: 2.75,
    MAIN_ICON_SIZE: 20,
    MAIN_ICON_MR: 1,
    MAIN_SPACING: 0.5,
    MAIN_BORDER_RADIUS: 1,
  },
};

const ParentItem = ({
  item = {},
  open = true,
  config = {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  _selected = false,
  _hasSelected = false,
  _isExpanded = false,
  _globalClickEvent = () => {},
  _ref = null,
  _parent = false,
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
    <Tooltip title={_parent || open ? '' : title} placement={'right'}>
      <MenuItem
        ref={_ref}
        onClick={(e) => {
          onClick(e);
          _globalClickEvent(e);
          e.stopPropagation();
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        selected={_selected}
        disabled={disabled}
        sx={{
          width: open ? 'auto' : '36px',
          pt: config.MAIN_P[0],
          pb: config.MAIN_P[0],
          pl: config.MAIN_P[1],
          pr: config.MAIN_P[1],
          minHeight: '0px !important',
          borderRadius: config.MAIN_BORDER_RADIUS,
        }}
      >
        {icon && (
          <ListItemIcon
            sx={{
              minWidth: '0 !important',
              mr: open ? config.MAIN_ICON_MR : 0,
              '.MuiSvgIcon-root': {
                fontSize: config.MAIN_ICON_SIZE,
                color:
                  _selected || _hasSelected
                    ? theme.palette.primary.main
                    : 'inherit',
                transition: 'all 0.2s ease-in-out',
              },
            }}
          >
            {icon}
          </ListItemIcon>
        )}

        {open && (
          <>
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
                color={_selected || _hasSelected ? 'primary' : 'inherit'}
                fontSize={config.MAIN_FONT_SIZE}
              >
                {title}
              </Typography>
              {!!info && (
                <Typography
                  variant="body2"
                  fontSize={12}
                  noWrap
                  color={
                    _selected || _hasSelected
                      ? theme.palette.primary.main
                      : 'GrayText'
                  }
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
              {_parent ? (
                _isExpanded ? (
                  <KeyboardArrowDownIcon fontSize="small" color="action" />
                ) : (
                  <KeyboardArrowRightIcon fontSize="small" color="action" />
                )
              ) : (
                ''
              )}
            </Stack>
          </>
        )}
      </MenuItem>
    </Tooltip>
  );
};

const ListContent = ({
  item,
  open,
  isSelected,
  config,
  onClick = () => {},
}) => {
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

  useEffect(() => {
    if (open !== openRef.current) {
      if (open) {
        setExpanded(hasSelected || item.expanded);
      } else {
        setExpanded(false);
      }
      openRef.current = open;
    }
  }, [open]);

  if (open)
    return (
      <Box>
        <ParentItem
          open={open}
          _isExpanded={expanded}
          item={item}
          config={config}
          _parent
          _globalClickEvent={(e) => {
            setExpanded(!expanded);
            onClick(item, e);
          }}
          _selected={isSelected(item)}
          _hasSelected={item.children.some(isSelected)}
        />
        <Stack
          spacing={config.MAIN_SPACING}
          sx={{
            display: expanded ? 'block' : 'none',
            position: 'relative',
            pl: 2,
            pr: 0,
            pt: config.MAIN_SPACING,
            transition: 'all 0.2s ease-in-out',
            ':before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 17,
              bottom: 0,
              width: '1px',
              backgroundColor: 'divider',
            },
          }}
        >
          {item.children.map((el, j) => (
            <Box
              key={j}
              sx={{
                position: 'relative',
                pl: 1.5,
                ':before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: '50%',
                  left: 1,
                  width: 8,
                  height: '1px',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'divider',
                },
              }}
            >
              <BaseMenuItem
                item={el}
                selected={isSelected(el)}
                cb={(e) => onClick(el, e)}
              />
            </Box>
          ))}
        </Stack>
      </Box>
    );

  return (
    <>
      <ParentItem
        _parent
        _isExpanded={expanded}
        open={open}
        item={item}
        config={config}
        onMouseEnter={onExpanded}
        onMouseLeave={onClose}
        _ref={itemRef}
        _globalClickEvent={(e) => onClick(item, e)}
        _selected={isSelected(item)}
        _hasSelected={item.children.some(isSelected)}
      />
      <Popover
        open={expanded}
        anchorEl={itemRef.current}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        onClose={() => {
          onClose();
        }}
        sx={{
          pointerEvents: 'none',
          transform: 'translateX(-2px)',
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
        <Stack
          spacing={config.MAIN_SPACING}
          sx={{ p: config.MAIN_SPACING * 2 }}
        >
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

const XNavigation = function ({
  size = 'medium', // medium
  open = true,
  options = [],
  isSelected = () => {
    return false;
  },
  onClick = () => {
    return false;
  },
  ...other
}) {
  const config = SIZE_CONFIG[size] || SIZE_CONFIG['medium'];

  return (
    <Stack direction="column" spacing={0.25} alignItems={'inherit'} {...other}>
      {options.map((item, i) => {
        if (item.children) {
          return (
            <ListContent
              key={i}
              item={item}
              open={open}
              isSelected={isSelected}
              onClick={onClick}
              config={config}
            />
          );
        } else {
          return (
            <ParentItem
              key={i}
              open={open}
              item={item}
              _selected={isSelected(item)}
              _globalClickEvent={(e) => {
                onClick(item, e);
              }}
              config={config}
            />
          );
        }
      })}
    </Stack>
  );
};

export default XNavigation;
