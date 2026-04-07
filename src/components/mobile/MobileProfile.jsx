import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { LoginCurve, Setting2 } from 'iconsax-react';
import { useContext } from 'react';
import { context } from '../../store/store';

const MobileProfile = ({ mt, pl, px, display }) => {
  const navigate = useNavigate();
  const { storedUser, logoutHandler } = useContext(context);

  return (
    <Grid w={'100%'} px={'24px'} mt={mt} gap={4}>
      <GridItem>
        <HStack
          display={{ base: 'flex', md: 'none' }}
          gap={4}
          h={'60px'}
          alignItems="center"
        >
          <Avatar
            name={storedUser ? `${storedUser?.name}` : ''}
            src={
              storedUser
                ? `https://wincrest.onrender.com/img/${storedUser.photo}`
                : ''
            }
          />
          <Box>
            <Text color={'#1B1E21'} fontWeight={500} fontSize={'14px'}>
              {storedUser?.name}
            </Text>
            <Text color={'#4B525A'} fontWeight={400} fontSize={'14px'}>
              {storedUser?.occupation}
            </Text>
          </Box>
        </HStack>
      </GridItem>
      <GridItem px={px}>
        <Button
          px={'10px'} // previously 0
          bg={'transparent'}
          w="100%"
          color={'#4B525A'}
          display="flex"
          justifyContent={'flex-start'}
          textAlign={'start'}
          onClick={() => {
            navigate('settings/accountinformation');
            if (!display) return;
            display();
          }}
        >
          <Setting2 />
          <Text
            fontSize={'14px'}
            fontWeight={400}
            ml={{ base: 0, md: '10px' }}
            pl={pl}
            display={'inline'}
          >
            Settings
          </Text>
        </Button>
      </GridItem>
      <GridItem px={px}>
        <Button
          px={'10px'}
          bg={'transparent'}
          w="100%"
          color={'#EF2020'}
          display="flex"
          justifyContent={'flex-start'}
          textAlign={'start'}
          onClick={() => logoutHandler(navigate)}
        >
          <LoginCurve />
          <Text
            fontSize={'14px'}
            ml={{ base: 0, md: '10px' }}
            fontWeight={400}
            pl={pl}
            display={'inline'}
          >
            Logout
          </Text>
        </Button>
      </GridItem>
    </Grid>
  );
};

export default MobileProfile;
