import MobileNav from '../mobile/MobileNav';
import MobileAccountOptions from '../mobile/MobileAccountOptions';
import { Text, Image, Box } from '@chakra-ui/react';
import logo from '../Assets/logo.svg';
import MobileProfile from '../mobile/MobileProfile';

const Sidebar = () => {
  return (
    <Box w={'100%'} borderRight={'1px solid #DEDFE0'}>
      <Box borderBottom={'1px solid #DEDFE0'} py={'36px'}>
        <Box
          display={'flex'}
          justifyContent={'center'}
          gap={2}
          alignItems={'center'}
        >
          <Image src={logo} alt="apex logo" />
          <Text
            color={'#1B1E21'}
            fontWeight="700"
            _after={{ content: `"Trust"`, color: '#0052CC' }}
          >
            Wincres{' '}
          </Text>
        </Box>
      </Box>
      <MobileAccountOptions my={'40px'} width={'85%'} />
      <MobileNav p={'3px'} />
      <MobileProfile mt={'20px'} pl={0} px={0} />
    </Box>
  );
};

export default Sidebar;
