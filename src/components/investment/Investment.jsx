import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../account/SubNavigation';
import classes from '../pay&transfer/Pay&transfer.module.css';

const Investment = () => {
  return (
    <Box>
      <SubNavigation
        args={['Active', 'Explore', 'Matured']}
        className={classes.radius}
      />
      <Outlet />
    </Box>
  );
};

export default Investment;
