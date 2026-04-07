import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import Login from './Login';
import logo from '../Assets/logo.svg';
import sideImage from '../Assets/sideImage.jpg';
import { WarningTwoIcon } from '@chakra-ui/icons';

const LoginLayout = () => {
  return (
    <Box bg={{ base: '#F4F5F7', md: '#FFF' }} pb={'80px'}>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(7, 1fr)' }}
        alignItems={{ base: 'center', md: '' }}
      >
        <GridItem colSpan={3} display={{ base: 'none', md: 'block' }}>
          <Box w="100%" h="100vh" overflow={'hidden'}>
            <Image
              m={'0'}
              src={sideImage}
              w="100%"
              h={'900px'}
              objectFit={'cover'}
              alt="side image"
            />
          </Box>
        </GridItem>
        <GridItem colSpan={4} px={{ base: '15px', md: '15%' }}>
          <HStack
            as="header"
            mt={'12.5px'}
            display={{ base: 'flex', md: 'none' }}
          >
            <Box>
              <Image src={logo} alt="logo" />
            </Box>
            <Box>
              <Text
                fontWeight={700}
                color={'#1B1E21'}
                _after={{ content: `'Trust'`, color: '#0052CC' }}
              >
                Wincres{' '}
              </Text>
            </Box>
          </HStack>
          <Login />
          <Box
            gap={3}
            mt={{ base: '24px', md: '10px' }}
            pt="12px"
            pb="32px"
            px="14px"
            color="#563600"
            bg={'#FEF5F6'}
            border="1px solid #F59B00"
            borderRadius={'8px'}
            fontSize={'14px'}
          >
            <Box display={'flex'} gap={3}>
              <WarningTwoIcon mt="7px" w={'16px'} h={'16px'} color="#F59B00" />
              <Text
                display={'inline-block'}
                fontWeight={700}
                fontSize={{ base: '16px', md: '18px' }}
              >
                Investment and Insurance Products:
              </Text>
            </Box>
            <UnorderedList
              pl={'25px'}
              color={'#563600'}
              fontSize={'14px'}
              mt={'10px'}
            >
              <ListItem lineHeight={'20px'}>
                Not insured by the FDIC or Any Federal Government Agency
              </ListItem>
              <ListItem>
                Subject to investment Risks, including loss of the Principal
                Amount Invested
              </ListItem>
            </UnorderedList>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default LoginLayout;
