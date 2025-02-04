import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import React from 'react';
export default function DotBackgroundDemo({ children, sx, ...rest }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      style={{
        // backgroundColor: 'white',
        backgroundImage: isDark
          ? "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E\")"
          : "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
      }}
      sx={{ ...sx }}
      {...rest}
    >
      {children}
    </Box>
  );
}
