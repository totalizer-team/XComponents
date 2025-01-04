import { AnimatePresence } from 'framer-motion';

import Box from '@mui/material/Box';
import Bg from '@totalizer/xcomponents/Bg';
export default () => {
  return (
    <AnimatePresence>
      <Bg
        sx={{
          //   borderRadius: 2,
          //   padding: 2,
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            width: 400,
            height: 400,
            backgroundColor: 'white',
          }}
        >
          aaa
        </Box>
      </Bg>
    </AnimatePresence>
  );
};
