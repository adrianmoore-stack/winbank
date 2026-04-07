import { useEffect, useContext } from 'react';
import { Text } from '@chakra-ui/react';
import classes from './Pay&transfer.module.css';
import SubNavigation from '../account/SubNavigation';
import { Outlet } from 'react-router-dom';
import { context } from '../../store/store';

const PayAndTransfer = () => {
  const { dashboardData } = useContext(context);
  useEffect(() => {
    const load = async () => {
      await dashboardData();
    };

    load();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Text
        fontSize={'32px'}
        fontWeight={700}
        mt={{ base: '36px', md: '30px' }}
      >
        Pay & Transfer
      </Text>
      <SubNavigation
        className={classes.radius}
        args={['Wire transfer', 'Global transfer', 'Instant transfer']}
      />
      <Outlet />
    </>
  );
};

export default PayAndTransfer;
