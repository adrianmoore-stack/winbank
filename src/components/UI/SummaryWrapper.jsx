import { Box, Image } from '@chakra-ui/react';
import money from '../Assets/moneyloan.svg';

const SummaryWrapper = ({ children }) => {
  return (
    <Box as="section" mt="24px" pb={{ base: '40px', md: '56px' }} bg={'#FFF'}>
      <Box pt={{ base: '42px', md: '64px' }}>
        <Box
          mx={'auto'}
          display="flex"
          justifyContent={'center'}
          alignItems={'center'}
          bg="#F4F5F7"
          borderRadius={'50%'}
          w={{ base: '45px', md: '178px' }}
          h={{ base: '45px', md: '178px' }}
        >
          <Image w={'100%'} h={'100%'} src={money} alt="money logo" />
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default SummaryWrapper;
