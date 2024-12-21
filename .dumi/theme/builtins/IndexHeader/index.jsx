import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export default function HomeHero({ sx, ...other }) {
  const theme = useTheme();

  const renderContent = (
    <Stack
      spacing={5}
      alignItems={{ xs: 'center', md: 'flex-start' }}
      sx={{
        maxWidth: 480,
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Box>
        <Typography variant="h2">XComponents</Typography>
      </Box>

      <Box>
        <Typography sx={{ maxWidth: 480 }}>
          The XComponents UI is built on top of MUI, a powerful library that
          provides flexible, customizable, and easy-to-use components.
        </Typography>
      </Box>

      <Box>
        <Button
          // color="inherit"
          size="large"
          variant="contained"
          target="_blank"
          rel="noopener"
          disabled
        >
          GET STARTED
        </Button>
      </Box>

      <Stack spacing={3}>
        <Box>
          <Box
            component="span"
            gap={0.75}
            display="flex"
            alignItems="center"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >
            <Typography>Available for</Typography>
            <Typography variant="caption">@totalizer/xcomponents</Typography>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );

  const renderImage = (
    <Box
      // component={MotionViewport}
      sx={{
        flex: '1 1 auto',
        position: 'relative',
        display: { xs: 'none', md: 'block' },
      }}
    >
      {[...Array(7)].map((_, index) => (
        <Box
          key={index}
          component={m.img}
          // variants={varFade({ distance: 40 }).inDown}
          alt="Home hero"
          src={`home/hero-${index + 1}.webp`}
          sx={{
            top: 0,
            left: 0,
            m: 'auto',
            bottom: 0,
            width: 800,
            maxWidth: 'unset',
            zIndex: 9 - index,
            position: 'absolute',
          }}
        />
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        overflow: 'hidden',
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          [theme.breakpoints.up('md')]: {
            columnGap: 10,
            alignItems: 'center',
            justifyContent: 'unset',
          },
        }}
      >
        {renderContent}
        {renderImage}
      </Container>
    </Box>
  );
}
