import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

import { BaseMenuList } from '@totalizer/xmenu';
import DashedBorder from './DashedBorder';

const column01 = [
  {
    c: 'Title',
    title: 'X Projects',
    disabled: true,
  },
  {
    title: 'XForm',
    disabled: true,
  },
  {
    title: 'XMenu',
    disabled: true,
  },
  {
    title: 'XComponents',
    disabled: true,
  },
  {
    title: 'XTemplate',
    disabled: true,
  },
];

const column02 = [
  {
    c: 'Title',
    title: 'Platform',
  },
  {
    title: 'Data Delivery',
    disabled: true,
  },
  {
    title: 'Landing Page',
    disabled: true,
  },
  {
    title: 'Knowledge Base',
    disabled: true,
  },
  {
    title: 'Content Creation',
    disabled: true,
  },
];

const column03 = [
  {
    c: 'Title',
    title: 'Help',
    disabled: true,
  },
  {
    title: 'FAQ',
    disabled: true,
  },
  {
    title: 'Change Log',
    disabled: true,
  },
  {
    title: 'Discussions',
    disabled: true,
  },
];

export default function Footer({ sx }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: isDark
          ? "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")"
          : "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.06)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        backgroundRepeat: 'repeat',
        ...sx,
      }}
    >
      <Container
        sx={{
          pb: 5,
          pt: 10,
        }}
      >
        <Grid
          container
          sx={{
            mt: 3,
            justifyContent: 'space-between',
          }}
        >
          <Grid size={6}>
            <Stack spacing={2}>
              <DashedBorder sx={{ py: 1.5, px: 2, width: 200 }}>
                <Typography sx={{ fontSize: 28 }}>Totalizer</Typography>
              </DashedBorder>
              <Stack spacing={0.5}>
                <Typography color="textSecondary" fontSize={14}>
                  Develop the future, we’ll make it semaless.
                </Typography>
                <Typography color="textSecondary" fontSize={14}>
                  Our mission is to empower everyone to effortlessly bring their
                  websites and applications to life.
                </Typography>
              </Stack>

              <Typography variant="h6">Social</Typography>
              <Stack
                direction="row"
                sx={{
                  mt: 3,
                  mb: 0,
                }}
              >
                <IconButton disabled>
                  <XIcon />
                </IconButton>
                <IconButton disabled>
                  <GitHubIcon />
                </IconButton>
                <IconButton disabled>
                  <FacebookIcon />
                </IconButton>
                <IconButton disabled>
                  <InstagramIcon />
                </IconButton>
                <IconButton disabled>
                  <LinkedInIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={6}>
            <Stack spacing={1} direction={'row'} justifyContent={'flex-end'}>
              <BaseMenuList sx={{ minWidth: 100 }} options={column01} />
              <BaseMenuList sx={{ minWidth: 100 }} options={column02} />
              <BaseMenuList sx={{ minWidth: 100 }} options={column03} />
            </Stack>
          </Grid>
        </Grid>

        <Typography fontSize={14} sx={{ mt: 5 }}>
          © All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
