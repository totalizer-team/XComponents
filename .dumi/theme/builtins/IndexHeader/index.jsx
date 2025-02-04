'use client';
import ExploreIcon from '@mui/icons-material/Explore';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import * as React from 'react';
import { history } from 'umi';

import HomeRectanglesDark from './home-rectangles-dark.svg';
import HomeRectanglesLight from './home-rectangles-light.svg';

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src={
            theme.palette.mode === 'dark'
              ? HomeRectanglesDark
              : HomeRectanglesLight
          }
          sx={{ height: 'auto', width: '1900px' }}
        />
      </Box>
      <Container
        maxWidth="md"
        sx={{ position: 'relative', py: '120px', zIndex: 3 }}
      >
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Typography
              sx={{
                fontSize: '3.5rem',
                fontWeight: 600,
                lineHeight: 1.2,
                textAlign: 'center',
              }}
            >
              Develop the future, we’ll make it {''}
              <Typography
                color="primary.main"
                component="span"
                variant="inherit"
              >
                SEAMLESS
              </Typography>{' '}
              !
            </Typography>
            <Typography
              color="neutral.300"
              sx={{ fontWeight: 400, textAlign: 'center' }}
              variant="h5"
            >
              50+ free and open-source components
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
            <Button
              variant="contained"
              onClick={() => {
                history.push('/guide');
              }}
              startIcon={<ExploreIcon />}
            >
              Guide
            </Button>
            <Button
              onClick={() => {
                history.push('/components');
              }}
            >
              50+ Components
            </Button>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: 'center', justifyContent: 'center ' }}
          >
            <AvatarGroup>
              <Avatar alt="User 5" src="/assets/avatar-5.png" />
              <Avatar alt="User 1" src="/assets/avatar-1.png" />
              <Avatar alt="User 2" src="/assets/avatar-2.png" />
              <Avatar alt="User 2" src="/assets/avatar-2.png" />
              <Avatar alt="User 2" src="/assets/avatar-2.png" />
            </AvatarGroup>
            <Typography
              color="neutral.300"
              sx={{ whiteSpace: 'nowrap' }}
              variant="caption"
            >
              based on (100+ reviews)
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
