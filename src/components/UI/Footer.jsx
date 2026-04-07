import { Box, Grid, GridItem, HStack, Image, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/wincresLogo.svg';

const Footer = () => {
  return (
    <Box
      w={'100%'}
      bg={'#0052CC'}
      px={{ base: '16px', md: '8%' }}
      py={'40px'}
    >
      <Grid
        gap={{ base: 6, md: 2 }}
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
      >
        <GridItem
          color={'#FFF'}
          fontWeight={700}
        >
          <Text
            color={'#A1C7FF'}
            fontSize={'14px'}
          >
            Wealth management
          </Text>
          <NavLink
            to={'/allow'}
            style={{ fontWeight: 'bold', margin: 0, height: '28px' }}
          >
            Private client
          </NavLink>
          <NavLink
            to={'/admin'}
            style={{ fontWeight: 'bold', margin: 0, height: '28px' }}
          >
            Wincres-Gold
          </NavLink>
        </GridItem>
        <GridItem
          color={'#FFF'}
          fontWeight={700}
        >
          <Text
            color={'#A1C7FF'}
            fontSize={'14px'}
          >
            Business Banking
          </Text>
          <Text>Small accounts</Text>
          <Text>Commercial accounts</Text>
        </GridItem>
        <GridItem
          color={'#FFF'}
          fontWeight={700}
        >
          <Text
            color={'#A1C7FF'}
            fontSize={'14px'}
          >
            Rates
          </Text>
          <Text>Personal rates</Text>
          <Text>Credit cards</Text>
        </GridItem>
        <GridItem
          color={'#FFF'}
          fontWeight={700}
        >
          <Text
            color={'#A1C7FF'}
            fontSize={'14px'}
          >
            Help & Support
          </Text>
          <Text>Contact us</Text>
          <Text>Help & FAQ'S</Text>
        </GridItem>
      </Grid>
      <Box
        mt={'40px'}
        borderTop={'1px solid #FFF'}
        pt={'30px'}
      >
        <Grid
          alignItems={'center'}
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        >
          <HStack gap={2}>
            <Image src={logo} />
            <Text
              fontSize={'16px'}
              fontWeight={700}
              color={'#FFF'}
            >
              Wincres Trust
            </Text>
          </HStack>
          <Text
            mt={{ base: '30px', md: 0 }}
            textAlign={'end'}
            fontSize={'14px'}
            color={'#D0D5DD'}
          >
            © 2023 Wincres Trust. All rights reserved. NMLSR IR 453841
          </Text>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
