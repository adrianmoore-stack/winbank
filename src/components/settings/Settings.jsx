import { useContext } from 'react';
import { Box, Avatar, Text, HStack } from '@chakra-ui/react';
import SubNavigation from '../account/SubNavigation';
import classes from '../pay&transfer/Pay&transfer.module.css';

import { Outlet } from 'react-router-dom';
import { context } from '../../store/store';

const Settings = () => {
  const { storedUser, updateMe, updatePassword, logoutHandler } =
    useContext(context);
  return (
    <>
      <Box w={'100%'} h={'152px'} bg={'#D8E5FA'} />
      <HStack mt={'-10px'} gap={'16px'} alignItems={'flex-end'}>
        <Avatar
          border={'3px solid white'}
          bg={'green'}
          size={'lg'}
          w={'80px'}
          h={'80px'}
          name={storedUser?.name}
          src={
            storedUser ? `https://wincrest.onrender.com/img/${storedUser.photo}` : ''
          }
        />
        <Box pt>
          <Text
            color={'#1B1E21'}
            fontWeight={700}
            fontSize={{ base: '14px', md: '18px' }}
          >
            {storedUser.name}
          </Text>
          <Text color={'#4B525A'} fontWeight={400} fontSize={'14px'}>
            {storedUser.occupation}
          </Text>
        </Box>
      </HStack>
      <Box mt={'16px'}>
        <Text
          color={'#0F1011'}
          fontWeight={700}
          fontSize={{ base: '24px', md: '32px' }}
        >
          Settings
        </Text>
        <SubNavigation
          args={['Account information', 'Security preferences']}
          className={classes.settingRadius}
        />
      </Box>
      <Outlet
        context={{ storedUser, updateMe, updatePassword, logoutHandler }}
      />
    </>
  );
};

export default Settings;
