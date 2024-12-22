import { Box } from '@mui/material';

export default ({
  open = true,
  onOpenChange = () => {},
  children,
  sidebar = null,
  ...other
}) => {
  const SideBarWidth = open ? 250 : 52;
  return (
    <Box
      sx={{
        position: 'relative',
        paddingLeft: `${SideBarWidth}px`,
        transition: 'all ease-out .3s',
      }}
      {...other}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: SideBarWidth,
          borderRight: 1,
          borderColor: 'divider',
          transition: 'all ease-out .3s',
        }}
      >
        {sidebar}
      </Box>
      <Box
        sx={{
          position: 'relative',
          transition: 'all ease-out .3s',
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          cursor: 'col-resize',
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: SideBarWidth - 4,
          width: 8,
          //   transition: 'all ease-out .3s',
          '&:hover': {
            bgcolor: 'divider',
          },
        }}
        onClick={() => {
          onOpenChange(!open);
        }}
      ></Box>
    </Box>
  );
};
