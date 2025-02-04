import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { CircleSvg, FloatLine, FloatPlusIcon } from './svg-elements';

export default function HomeMinimal({ sx, ...other }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const renderLines = (
    <>
      <FloatPlusIcon sx={{ top: 72, left: 72 }} />
      <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
      <FloatLine sx={{ top: 80, left: 0 }} />
      <FloatLine sx={{ bottom: 80, left: 0 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
      <FloatPlusIcon sx={{ top: 72, right: 72 }} />
      <FloatPlusIcon sx={{ bottom: 72, right: 72 }} />
      <FloatLine vertical sx={{ top: 0, right: 80 }} />
    </>
  );

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 10, md: 20 },
        backgroundColor: isDark ? '#151515' : '#fff',
        ...sx,
      }}
      {...other}
    >
      {renderLines}

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Typography align="center">
          We are currently working hard on this page
        </Typography>

        <CircleSvg />
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
