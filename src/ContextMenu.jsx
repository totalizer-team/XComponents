import { Box, Divider, Menu } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import BaseMenuItem from './components/BaseMenuItem';

const COMPONENTS = {
  DEFAULT: ({
    avatar = '',
    icon = null,
    title = '',
    info = '',
    secondary = '',
    label = '',
    labelColor = '',
    disabled = false,
    onClick = () => {},
    /** 内部事件，用于XIconMenu XButtonMenu XAvatarMenu中关闭菜单操作 */
    _callback = () => {},
  }) => {
    return (
      <BaseMenuItem
        item={{
          avatar,
          icon,
          title,
          info,
          secondary,
          label,
          labelColor,
          disabled,
          onClick,
        }}
        cb={_callback}
        sx={{
          mx: 0.5,
          // borderRadius: 0,
        }}
      />
    );
  },
  Title: ({ title }) => (
    <Box
      sx={{
        p: 1,
        py: 0.5,
      }}
    >
      <Typography
        variant="caption"
        sx={{ color: 'GrayText', fontWeight: 'bold' }}
      >
        {title}
      </Typography>
    </Box>
  ),
  Divider: () => <Divider />,
};

export default function ContextMenu({
  width = '',
  children,
  options,
  onClick = () => {},
  onOpenChange = () => {},
  sx = {},
  ...other
}) {
  const [contextMenu, setContextMenu] = React.useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null,
    );
    onOpenChange(true);
  };

  const handleClose = () => {
    setContextMenu(null);
    onOpenChange(false);
  };

  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
      {children}

      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <Box sx={{ width, minWidth: 200, ...sx }} {...other}>
          {options.map((item, i) => {
            const C = COMPONENTS.hasOwnProperty(item.c)
              ? COMPONENTS[item.c]
              : COMPONENTS['DEFAULT'];
            return (
              <C
                key={i}
                {...item}
                _callback={() => {
                  onClick(item);
                  handleClose();
                }}
              />
            );
          })}
        </Box>
      </Menu>
    </div>
  );
}
