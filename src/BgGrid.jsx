import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import React from 'react';
export default function GridSmallBackgroundDemo({ children, sx, ...rest }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      style={{
        backgroundImage: isDark
          ? `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`
          : `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
             linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }}
      sx={{ ...sx }}
      {...rest}
    >
      {children}
    </Box>
  );
}
