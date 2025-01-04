import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Typed from '@totalizer/xcomponents/Typed';
export default () => {
  return (
    <Box
      sx={{
        p: 4,
      }}
    >
      <Typography sx={{ fontSize: 18, color: 'GrayText' }}>
        The XComponents is{' '}
        <Typed
          component="span"
          sx={{
            fontSize: 24,
            color: 'primary.main',
          }}
          animate={{
            strings: ['Efficient', 'Elegant', 'Continuously Updated'],
          }}
        />
      </Typography>
      <Typography sx={{ fontSize: 18, color: 'GrayText' }}>
        Front-end Component Library.
      </Typography>
    </Box>
  );
};
