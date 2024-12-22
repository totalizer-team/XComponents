/* eslint-disable react/no-array-index-key */
import {
  Box,
  Button,
  Chip,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import React, { useEffect, useMemo, useRef, useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SIZE_CONFIG = {
  small: {
    MAIN_FONT_SIZE: 14,
    MAIN_P: [0.5, 1],
    CONTENT_PL: 2,
    MAIN_ICON_SIZE: 20,
    MAIN_ICON_MR: 0.75,
    MAIN_SPACING: 0.24,
    MAIN_BORDER_RADIUS: 1,
  },
  medium: {
    MAIN_FONT_SIZE: 14,
    MAIN_P: [1, 1.5],
    CONTENT_PL: 2.75,
    MAIN_ICON_SIZE: 24,
    MAIN_ICON_MR: 1,
    MAIN_SPACING: 0.5,
    MAIN_BORDER_RADIUS: 2,
  },
  large: {
    MAIN_FONT_SIZE: 16,
    MAIN_P: [1.5, 2],
    CONTENT_PL: 3.75,
    MAIN_ICON_SIZE: 26,
    MAIN_ICON_MR: 1,
    MAIN_SPACING: 0.5,
    MAIN_BORDER_RADIUS: 2,
  },
};

const ChildItem = ({
  item = {},
  config = {},
  _selected = false,
  _hasSelected = false,
  _globalClickEvent = () => {},
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
    <MenuItem
      onClick={(e) => {
        onClick(e);
        _globalClickEvent(e);
        e.stopPropagation();
      }}
      selected={_selected}
      disabled={disabled}
      sx={{
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
            mr: config.MAIN_ICON_MR,
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
      </Stack>
    </MenuItem>
  );
};

const ParentItem = ({
  item = {},
  variant = '',
  config = {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  _selected = false,
  _hasSelected = false,
  _isOpen = false,
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

  if (variant === 'vertical')
    return (
      <MenuItem
        onClick={(e) => {
          onClick(e);
          _globalClickEvent(e);
          e.stopPropagation();
        }}
        selected={_selected}
        disabled={disabled}
        sx={{
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
              mr: config.MAIN_ICON_MR,
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
            _isOpen ? (
              <KeyboardArrowDownIcon fontSize="small" color="action" />
            ) : (
              <KeyboardArrowRightIcon fontSize="small" color="action" />
            )
          ) : (
            ''
          )}
        </Stack>
      </MenuItem>
    );
  if (variant === 'horizontal')
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
            fontSize: config.MAIN_ICON_SIZE,
            color:
              _selected || _hasSelected
                ? theme.palette.primary.main
                : disabled
                  ? 'inherit'
                  : 'GrayText',
            transition: 'all 0.2s ease-in-out',
          },
        }}
        color={_selected || _hasSelected ? 'primary' : 'inherit'}
        startIcon={icon}
      >
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography fontSize={config.MAIN_FONT_SIZE}>{title}</Typography>
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

  if (variant === 'sidebar')
    return (
      <>
        <Tooltip title={_parent ? '' : title} placement={'right'}>
          <Box component={'span'} ref={_ref}>
            <IconButton
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
            </IconButton>
          </Box>
        </Tooltip>
      </>
    );
};

const ListContent = ({
  item,
  variant,
  isSelected,
  config,
  onClick = () => {},
}) => {
  const hasSelected = item.children.some(isSelected);

  const [open, setOpen] = useState(
    variant === 'vertical' ? hasSelected || item.open : false,
  );

  const variantRef = useRef(variant);

  const itemRef = useRef(null);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (variant !== variantRef.current) {
      if (variant === 'vertical') {
        setOpen(hasSelected || item.open);
      } else {
        setOpen(false);
      }
      variantRef.current = variant;
    }
  }, [variant]);

  if (variant === 'vertical')
    return (
      <Box>
        <ParentItem
          variant={variant}
          _isOpen={open}
          item={item}
          config={config}
          _parent
          _globalClickEvent={(e) => {
            setOpen(!open);
            onClick(item, e);
          }}
          _selected={isSelected(item)}
          _hasSelected={item.children.some(isSelected)}
        />
        <Stack
          spacing={config.MAIN_SPACING}
          sx={{
            display: open ? 'block' : 'none',
            position: 'relative',
            pl: config.CONTENT_PL,
            pr: 0,
            pt: config.MAIN_SPACING,
            transition: 'all 0.2s ease-in-out',
            ':before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: config.CONTENT_PL * 8 - 2,
              bottom: 0,
              width: 2,
              backgroundColor: 'divider',
            },
          }}
        >
          {item.children.map((el, j) => (
            <Box
              key={j}
              sx={{
                position: 'relative',
                pl: 1.25,
                ':before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  width: 8,
                  height: 2,
                  transform: 'translateY(-50%)',
                  backgroundColor: 'divider',
                },
              }}
            >
              <ChildItem
                item={el}
                config={config}
                _selected={isSelected(el)}
                _globalClickEvent={(e) => onClick(el, e)}
              />
            </Box>
          ))}
        </Stack>
      </Box>
    );

  if (variant === 'horizontal')
    return (
      <>
        <ParentItem
          _parent
          _isOpen={open}
          variant={variant}
          item={item}
          config={config}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          _ref={itemRef}
          _globalClickEvent={(e) => onClick(item, e)}
          _selected={isSelected(item)}
          _hasSelected={item.children.some(isSelected)}
        />
        <Popover
          open={open}
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
              onMouseEnter: onOpen,
              onMouseLeave: onClose,
              sx: {
                ...(open && { pointerEvents: 'auto' }),
              },
            },
          }}
        >
          <Stack
            spacing={config.MAIN_SPACING}
            sx={{ p: config.MAIN_SPACING * 2 }}
          >
            {item.children.map((el, j) => (
              <ChildItem
                key={j}
                item={el}
                config={config}
                _selected={isSelected(el)}
                _globalClickEvent={(e) => {
                  onClose();
                  onClick(el, e);
                }}
              />
            ))}
          </Stack>
        </Popover>
      </>
    );

  if (variant === 'sidebar')
    return (
      <>
        <ParentItem
          _parent
          _isOpen={open}
          variant={variant}
          item={item}
          config={config}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          _ref={itemRef}
          _globalClickEvent={(e) => onClick(item, e)}
          _selected={isSelected(item)}
          _hasSelected={item.children.some(isSelected)}
        />
        <Popover
          open={open}
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
              onMouseEnter: onOpen,
              onMouseLeave: onClose,
              sx: {
                ...(open && { pointerEvents: 'auto' }),
              },
            },
          }}
        >
          <Stack
            spacing={config.MAIN_SPACING}
            sx={{ p: config.MAIN_SPACING * 2 }}
          >
            {item.children.map((el, j) => (
              <ChildItem
                key={j}
                item={el}
                config={config}
                _selected={isSelected(el)}
                _globalClickEvent={(e) => {
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
  size = 'medium', // small | medium | large
  variant = 'vertical', // vertical | horizontal | sidebar
  options = [],
  isSelected = () => {
    return false;
  },
  onClick = () => {
    return false;
  },
}) {
  const config = SIZE_CONFIG[size] || SIZE_CONFIG['medium'];

  const direction = useMemo(() => {
    if (variant === 'vertical') {
      return 'column';
    }
    if (variant === 'horizontal') {
      return 'row';
    } else {
      return 'column';
    }
  }, [variant]);

  const spacing = useMemo(() => {
    if (variant === 'vertical') {
      return config.MAIN_SPACING;
    }
    if (variant === 'horizontal') {
      return config.MAIN_SPACING * 2;
    } else {
      return 0;
    }
  }, [variant]);

  return (
    <Stack
      direction={direction}
      spacing={spacing}
      alignItems={variant === 'vertical' ? 'inherit' : 'flex-start'}
    >
      {options.map((item, i) => {
        if (item.children) {
          return (
            <ListContent
              key={i}
              item={item}
              variant={variant}
              isSelected={isSelected}
              onClick={onClick}
              config={config}
            />
          );
        } else {
          return (
            <ParentItem
              key={i}
              variant={variant}
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
