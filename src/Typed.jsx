import Typography from '@mui/material/Typography';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
export default ({ children, animate = {}, ...other }) => {
  const ele = useRef();
  const T = useRef();
  useEffect(() => {
    if (ele.current) {
      T.current = new Typed(ele.current, {
        typeSpeed: 30,
        loop: true,
        ...animate,
      });
    }
    return () => {
      T.current.destroy();
    };
  }, []);

  return (
    <Typography {...other}>
      <span ref={ele}>{children}</span>
    </Typography>
  );
};
