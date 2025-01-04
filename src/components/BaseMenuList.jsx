import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Divider, Popover, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import BaseMenuItem from './BaseMenuItem';

const COMPONENTS = {
  Title: ({ title }) => (
    <Typography
      variant="caption"
      sx={{ p: 1, py: 0.5, color: 'GrayText', fontWeight: 'bold' }}
    >
      {title}
    </Typography>
  ),
  Divider: () => <Divider />,
};

const MenuList = ({ options = [], onClick = () => {}, sx = {}, ...other }) => {
  const itemRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const onExpanded = () => {
    setExpanded(true);
  };
  const onClose = () => {
    setExpanded(false);
  };
  return (
    <Box sx={{ py: 1, minWidth: 150, maxWidth: 400, ...sx }} {...other}>
      {options.map((item, i) => {
        if (item.c && COMPONENTS.hasOwnProperty(item.c)) {
          const C = COMPONENTS[item.c];
          return <C key={i} {...item} />;
        }

        if (item.children) {
          return (
            <Box key={i}>
              <BaseMenuItem
                key={i}
                item={item}
                onMouseEnter={onExpanded}
                onMouseLeave={onClose}
                cb={(e) => onClick(item, e)}
                _ref={itemRef}
                extra={
                  <KeyboardArrowRightIcon
                    sx={{
                      fontSize: 18,
                      color: 'GrayText',
                    }}
                  />
                }
                sx={{
                  mx: 0.5,
                }}
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
                <MenuList options={item.children} onClick={onClick} />
              </Popover>
            </Box>
          );
        }
        return (
          <BaseMenuItem
            key={i}
            item={item}
            cb={(el, e) => {
              onClick(el, e);
            }}
            sx={{
              mx: 0.5,
            }}
          />
        );
      })}
    </Box>
  );
};

export default MenuList;
