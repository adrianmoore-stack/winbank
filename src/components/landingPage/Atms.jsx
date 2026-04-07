import {
  Grid,
  GridItem,
  Text,
  HStack,
  Image,
} from '@chakra-ui/react';
import creditcard from '../Assets/creditcard.png'

const Atms = () => {
  return (
    <Grid
      gap={10}
      alignItems={'center'}
      py={{ base: '40px', md: '96px' }}
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      px={{ base: '16px', md: '8%' }}
      bg={'#FFF'}
    >
      <GridItem color={'#FFF'}>
        <Image w={'100%'} h={'100%'} src={creditcard} alt="credit card" />
      </GridItem>
      <GridItem>
        <Grid
          fontSize={'20px'}
          fontWeight={700}
          templateColumns={'repeat(2, 1fr)'}
          gap={4}
        >
          <GridItem bg={'#FAFAFA'} borderRadius={'8px'}>
            <HStack
              px={{ base: '10%', md: '40%' }}
              gap={2}
              flexDirection={'column'}
              py={'60px'}
              justifyContent={'center'}
              textAlign={'center'}
            >
              <Text fontSize={'40px'}>700K</Text>
              <Text fontSize={'16px'} fontWeight={400} color={'#4B525A'}>
                Customers
              </Text>
            </HStack>
          </GridItem>
          <GridItem bg={'#FAFAFA'} borderRadius={'8px'}>
            <HStack
              px={{ base: '10%', md: '40%' }}
              gap={2}
              flexDirection={'column'}
              py={'60px'}
              justifyContent={'center'}
              textAlign={'center'}
            >
              <Text fontSize={'40px'}>86%</Text>
              <Text fontSize={'16px'} fontWeight={400} color={'#4B525A'}>
                Yearly growth
              </Text>
            </HStack>
          </GridItem>
          <GridItem bg={'#FAFAFA'} borderRadius={'8px'}>
            <HStack
              px={{ base: '10%', md: '40%' }}
              gap={2}
              flexDirection={'column'}
              py={'60px'}
              justifyContent={'center'}
              textAlign={'center'}
            >
              <Text fontSize={'40px'}>96%</Text>
              <Text fontSize={'16px'} fontWeight={400} color={'#4B525A'}>
                Customer satisfaction
              </Text>
            </HStack>
          </GridItem>
          <GridItem bg={'#FAFAFA'} borderRadius={'8px'}>
            <HStack
              px={{ base: '10%', md: '40%' }}
              gap={2}
              flexDirection={'column'}
              py={'60px'}
              justifyContent={'center'}
              textAlign={'center'}
            >
              <Text fontSize={'40px'}>300B</Text>
              <Text fontSize={'16px'} fontWeight={400} color={'#4B525A'}>
                current money managed
              </Text>
            </HStack>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Atms;
