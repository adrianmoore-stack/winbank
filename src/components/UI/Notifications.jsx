import { CloseIcon } from '@chakra-ui/icons';
import { Box, HStack, IconButton, Text, Image } from '@chakra-ui/react';
import bell from '../Assets/bell.svg';

const Notification = ({ toggleNotification }) => {
  return (
    <Box
      as="section"
      w={{ base: '100%', md: '40%' }}
      h="100vh"
      bg={'#FFF'}
      position={'fixed'}
      right={'0px'}
      zIndex={7}
    >
      <HStack
        p={'24px 32px'}
        borderBottom="1px Solid #F4F5F7"
        justifyContent={'space-between'}
      >
        <Text fontSize={'24px'} fontWeight={700} color={'#1B1E21'}>
          Notification
        </Text>
        <IconButton
          onClick={() => toggleNotification()}
          bg={'transparent'}
          icon={<CloseIcon />}
        />
      </HStack>
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
            <Image w={'100%'} h={'100%'} src={bell} alt="bell logo" />
          </Box>
        </Box>
        <Box
          mx={'auto'}
          mt={{ base: '24px', md: '43px' }}
          w={{ base: '90%', md: '70%' }}
          textAlign={'center'}
        >
          <Text
            color={'#06060B'}
            fontSize={{ base: '20px', md: '24px' }}
            fontWeight={700}
            lineHeight={'32px'}
          >
            Stay Tuned for Important Updates
          </Text>
          <Text
            mt="8px"
            fontSize={{ base: '12px', md: '14px' }}
            fontWeight={400}
            lineHeight={{ base: '16px', md: '24px' }}
            color={'#666481'}
          >
            Welcome to your Notification Page! Currently, there are no
            notifications to display. But don't fret—this space is dedicated to
            keeping you informed about important updates, transactions, and
            security alerts
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Notification;
