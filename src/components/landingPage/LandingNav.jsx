import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import logo from '../Assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const LandingNav = () => {
  const navigate = useNavigate();

  return (
    <Box
      bg={'#FFF'}
      px={{ base: '16px', md: '8%' }}
      w={'100%'}
      h={'80px'}
      borderBottom={'1px solid #F4F6F7'}
    >
      <Grid
        w={'100%'}
        h={'inherit'}
        alignItems={'center'}
        templateColumns={'repeat(2, 1fr)'}
      >
        <GridItem>
          <UnorderedList
            display={'flex'}
            fontSize={'16px'}
            gap={6}
            ml={'0'}
            color={'#475467'}
            listStyleType={'none'}
          >
            <ListItem>
              <HStack>
                <Image src={logo} alt="bank logo" />
                <Text
                  color={'#000'}
                  _after={{ content: `' Trust'`, color: '#0052CC' }}
                  fontWeight={700}
                >
                  Wincres
                </Text>
              </HStack>
            </ListItem>
            <ListItem display={{ base: 'none', md: 'block' }}>
              <Text>ATMs/Locations</Text>
            </ListItem>
            <ListItem display={{ base: 'none', md: 'block' }}>
              <Text>Help</Text>
            </ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem textAlign={'end'}>
          <Button
            _hover={{ bg: 'transparent' }}
            fontWeight={400}
            bg={'transparent'}
            border={'none'}
            onClick={() => navigate('/login')}
          >
            Log in
          </Button>
          <Button
            _hover={{ bg: '#0052CC' }}
            fontWeight={400}
            bg={'#0052CC'}
            color={'#FFF'}
          >
            Sign up
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default LandingNav;
