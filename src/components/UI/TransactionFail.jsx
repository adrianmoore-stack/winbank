import { createPortal } from 'react-dom';
import {
  Button,
  calc,
  Box,
  IconButton,
  Image,
  HStack,
  Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.svg';
import { useContext } from 'react';
import { context } from '../../store/store';

export const Fail = ({ setDisplay, logout }) => {
  const { error } = useContext(context);
  const navigate = useNavigate();

  return (
    <Box
      as="section"
      w={{ base: '90%', md: '50%' }}
      top={{
        base: calc('50vh').subtract('250px').toString(),
        md: calc('50vh').subtract('345px').toString(),
      }}
      left={{ base: '5%', md: '25%' }}
      bg={'#FFF'}
      position={'fixed'}
      zIndex={7}
    >
      {error.startsWith('Expired') && (
        <HStack
          p={'24px 24px'}
          borderBottom="1px Solid #F4F5F7"
          justifyContent={'space-between'}
        >
          <Text fontSize={'24px'} fontWeight={700} color={'#1B1E21'}>
            Delete
          </Text>
          <IconButton
            onClick={() => setDisplay((prev) => !prev)}
            bg={'transparent'}
            icon={<CloseIcon />}
          />
        </HStack>
      )}
      <Box as="section" mt="24px" pb={{ base: '40px', md: '56px' }} bg={'#FFF'}>
        <Box pt={{ base: '42px', md: '64px' }}>
          <Box
            mx={'auto'}
            display="flex"
            justifyContent={'center'}
            alignItems={'center'}
            bg="#F4F5F7"
            borderRadius={'50%'}
            w={{ base: '90px', md: '178px' }}
            h={{ base: '90px', md: '178px' }}
          >
            <Image w={'100%'} h={'100%'} src={logo} alt="delete logo" />
          </Box>
        </Box>
        )
        <Box
          mx={'auto'}
          mt={{ base: '24px', md: '43px' }}
          w={{ base: '90%', md: '70%' }}
          textAlign={'center'}
        >
          <Text
            color={'red'}
            fontSize={{ base: '20px', md: '24px' }}
            fontWeight={700}
            lineHeight={'32px'}
          >
            Transation Failed
          </Text>
          <Text
            mt="8px"
            fontSize={{ base: '14px', md: '16px' }}
            fontWeight={400}
            lineHeight={{ base: '16px', md: '24px' }}
            color={'#666481'}
          >
            {error}
          </Text>
        </Box>
        <Box mt="40px" mx={{ base: '10%', md: '64px' }}>
          {error && error.startsWith('An') ? (
            <Button
              fontSize={'14px'}
              color={'#FFF'}
              bg={'#EF2020'}
              _hover={{ bg: '#EF2020' }}
              w="100%"
              py={'16px'}
              onClick={() => logout(navigate)}
            >
              Logout
            </Button>
          ) : (
            <Button
              fontSize={'14px'}
              color={'#FFF'}
              bg={'#0052CC'}
              _hover={{ bg: '#EF2020' }}
              w="100%"
              py={'16px'}
              onClick={() => setDisplay((prev) => !prev)}
            >
              Generate new token
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const TransactionFail = ({ setDisplay, logout }) => {
  return createPortal(
    <Fail setDisplay={setDisplay} logout={logout} />,
    document.getElementById('menu')
  );
};

export default TransactionFail;
