import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import man from '../Assets/man.jpg';
import star from '../Assets/Star.svg';
import review1 from '../Assets/review1.jpg';
import review2 from '../Assets/review2.jpg';
import review3 from '../Assets/review3.jpg';
import review4 from '../Assets/review4.jpg';
import review5 from '../Assets/review5.jpg';

const LandingMain = () => {
  return (
    <Grid
      pb={'60px'}
      px={{ base: '16px', md: '8%' }}
      alignItems={'center'}
      mt={'64px'}
      gap={10}
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
    >
      <GridItem>
        <Heading
          fontSize={{ base: '35px', md: '50px' }}
          fontWeight={700}
          lineHeight={{ base: '50px', md: '72px' }}
        >
          Banking technology that has your back.
        </Heading>
        <Text
          mt={{ base: '14px', md: '24px' }}
          color={'#4B525A'}
          fontSize={'18px'}
        >
          Simple transparent banking. No hidden fees.
        </Text>
        <InputGroup mt={{ base: '20px', md: '60px' }} gap={4}>
          <Input w={'65%'} type="email" placeholder="Enter your email" />
          <Button _hover={{ bg: '#0052CC' }} color={'#FFF'} bg={'#0052CC'}>
            Get started
          </Button>
        </InputGroup>
        <Text fontSize={'14px'} color={'#4B525A'} mt={'18px'}>
          We care about your data in our{' '}
          <Text color={'#0052CC'} as={'span'}>
            privacy policy.
          </Text>{' '}
        </Text>
        <HStack mt={'50px'}>
          <Box>
            <Avatar
              size={{ base: 'sm', md: 'md' }}
              border={'2px solid #FFF'}
              src={review1}
            />
            <Avatar
              size={{ base: 'sm', md: 'md' }}
              border={'2px solid #FFF'}
              ml={'-10px'}
              src={review2}
            />
            <Avatar
              size={{ base: 'sm', md: 'md' }}
              border={'2px solid #FFF'}
              ml={'-10px'}
              src={review3}
            />
            <Avatar
              size={{ base: 'sm', md: 'md' }}
              border={'2px solid #FFF'}
              ml={'-10px'}
              src={review4}
            />
            <Avatar
              size={{ base: 'sm', md: 'md' }}
              border={'2px solid #FFF'}
              ml={'-10px'}
              src={review5}
            />
          </Box>
          <Box ml={'10px'}>
            <HStack>
              <Image src={star} alt="star" />
              <Image src={star} alt="star" />
              <Image src={star} alt="star" />
              <Image src={star} alt="star" />
              <Image src={star} alt="star" />
              <Text fontSize={'16px'} fontWeight={700}>
                5.0
              </Text>
            </HStack>
            <Text color={'#475467'}>from 12,0000+ reviews</Text>
          </Box>
        </HStack>
      </GridItem>
      <GridItem>
        <Box border={'20px solid #D7E4F8'}>
          <Image w={'100%'} height={'100%'} src={man} alt="man" />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default LandingMain;
