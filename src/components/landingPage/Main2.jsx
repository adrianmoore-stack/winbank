import {
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  UnorderedList,
  ListItem,
  Image,
} from '@chakra-ui/react';
import { Bank, FolderOpen, I24Support, SecurityUser } from 'iconsax-react';
import one from '../Assets/one.png';
import two from '../Assets/two.png';
import three from '../Assets/three.png';

const Main2 = () => {
  return (
    <Box px={{ base: '16px', md: '8%' }} py={{ base: '40px', md: '96px' }}>
      <Heading
        w={{ base: '100%', md: '60%' }}
        fontSize={{ base: '30px', md: '40px' }}
        lineHeight={{ base: '40px', md: '52px' }}
      >
        What makes out bank stand out from the rest?
      </Heading>
      <Grid
        gap={6}
        mt={'40px'}
        alignItems={'center'}
        templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
        bg={'#FFF'}
      >
        <GridItem color={'#1B1E21'} py={'61px'}>
          <UnorderedList listStyleType={'none'}>
            <ListItem display={'flex'} gap={6} mb={'32px'}>
              <Box
                color={'#0052CC'}
                p={'13px'}
                borderRadius={'50%'}
                w={'50px'}
                h={'50px'}
                bg={'#F4F6F7'}
              >
                <SecurityUser />
              </Box>
              <Box>
                <Heading lineHeight={'28px'} fontSize={'20px'}>
                  Robust Security Measures
                </Heading>
                <Text lineHeight={'24px'} color={'#4B525A'}>
                  We ensure the highest level of protection for your sensitive
                  information.
                </Text>
              </Box>
            </ListItem>
            <ListItem display={'flex'} gap={6} mb={'32px'}>
              <Box
                color={'#0052CC'}
                p={'13px'}
                borderRadius={'50%'}
                w={'50px'}
                h={'50px'}
                bg={'#F4F6F7'}
              >
                <I24Support />
              </Box>
              <Box>
                <Heading lineHeight={'28px'} fontSize={'20px'}>
                  24/7 Customer Support
                </Heading>
                <Text lineHeight={'24px'} color={'#4B525A'}>
                  Our dedicated support team is available 24/7, ready to assist
                  you with any questions or concerns you may have.
                </Text>
              </Box>
            </ListItem>
            <ListItem display={'flex'} gap={6} mb={'32px'}>
              <Box
                color={'#0052CC'}
                p={'13px'}
                borderRadius={'50%'}
                w={'50px'}
                h={'50px'}
                bg={'#F4F6F7'}
              >
                <Bank />
              </Box>
              <Box>
                <Heading lineHeight={'28px'} fontSize={'20px'}>
                  Convenient Mobile Banking
                </Heading>
                <Text lineHeight={'24px'} color={'#4B525A'}>
                  Deposit checks, pay bills, transfer funds, and stay informed
                  with real-time notifications, all from the convenience of your
                  mobile device.
                </Text>
              </Box>
            </ListItem>
            <ListItem display={'flex'} gap={6} mb={'32px'}>
              <Box
                color={'#0052CC'}
                p={'13px'}
                borderRadius={'50%'}
                w={'50px'}
                h={'50px'}
                bg={'#F4F6F7'}
              >
                <FolderOpen />
              </Box>
              <Box>
                <Heading lineHeight={'28px'} fontSize={'20px'}>
                  Quick & Convenient Account Opening
                </Heading>
                <Text lineHeight={'24px'} color={'#4B525A'}>
                  Open an account with us quickly and enjoy the convenience of
                  banking at your fingertips.
                </Text>
              </Box>
            </ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem>
          <Grid
            fontSize={'20px'}
            fontWeight={700}
            templateColumns={'repeat(2, 1fr)'}
            templateRows={'repeat(2, 1fr)'}
            gap={4}
          >
            <GridItem colSpan={1} rowSpan={1}>
              <Image w={'100%'} h={'100%'} src={one} alt="images" />
            </GridItem>
            <GridItem colSpan={1} rowSpan={2}>
              <Image w={'100%'} h={'100%'} src={three} alt="images" />
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
              <Image w={'100%'} h={'100%'} src={two} alt="images" />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Main2;
