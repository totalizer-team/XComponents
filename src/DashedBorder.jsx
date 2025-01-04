import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Box from '@mui/material/Box';
export default ({
  children,
  hover = true,
  icon = AddRoundedIcon,
  sx = {},
  ...other
}) => {
  const offset = -13;
  const C = icon;
  const iconSx = {
    position: 'absolute',
    fontSize: 24,
    color: 'GrayText',
  };
  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        position: 'relative',
        border: 2,
        borderStyle: 'dashed',
        borderColor: 'divider',
        ...sx,
      }}
      {...other}
    >
      <C
        sx={{
          top: offset,
          left: offset,
          ...iconSx,
        }}
      />
      <C
        sx={{
          top: offset,
          right: offset,
          ...iconSx,
        }}
      />
      <C
        sx={{
          bottom: offset,
          left: offset,
          ...iconSx,
        }}
      />
      <C
        sx={{
          bottom: offset,
          right: offset,
          ...iconSx,
        }}
      />
      {children}
    </Box>
  );
};
