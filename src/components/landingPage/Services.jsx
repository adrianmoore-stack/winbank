import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  HStack,
} from '@chakra-ui/react';
import { CardPos, DocumentUpload, Moneys, Send2 } from 'iconsax-react';

const Services = () => {
  return (
    <Grid
      gap={6}
      alignItems={'center'}
      py={{ base: '40px', md: '96px' }}
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      px={{ base: '16px', md: '8%' }}
      bg={'#35A7FF'}
    >
      <GridItem color={'#FFF'}>
        <Heading
          fontSize={{ base: '30px', md: '40px' }}
          lineHeight={{ base: '40px', md: '52px' }}
        >
          Browse our set of banking services & offerings
        </Heading>
        <Text mt={'8px'}>
          We offer variety of tools and resources to help you manage your
          finances more efficiently.
        </Text>
        <Button
          mt={'24px'}
          _hover={{ bg: '#0052CC' }}
          fontWeight={400}
          color={'#FFF'}
          bg={'#0052CC'}
          rightIcon={<ExternalLinkIcon />}
        >
          Learn more
        </Button>
      </GridItem>
      <GridItem>
        <Grid
          fontSize={'20px'}
          fontWeight={700}
          templateColumns={'repeat(2, 1fr)'}
          gap={4}
        >
          <GridItem bg={'#FFF'} borderRadius={'8px'}>
            <HStack
              px={{ base: '10%', md: '40%' }}
              gap={2}
              flexDirection={'column'}
              py={'40px'}
              justifyContent={'center'}
              textAlign={'center'}
            >
              <Box bg={'#F4F6F7'} p={'13px'} borderRadius={'50%'}>
                <Send2 color={'#0052CC'} />
              </Box>
              <Text>Checking account</Text>
            </HStack>
          </GridItem>
          <GridItem bg={'#FFF'} borderRadius={'8px'}>
            <HStack
              px={{ base: '10%', md: '40%' }}
              gap={2}
              flexDirection={'column'}
              py={'40px'}
              justifyContent={'center'}
              textAlign={'center'}
            >
              <Box bg={'#F4F6F7'} p={'13px'} borderRadius={'50%'}>
                <CardPos color={'#0052CC'} />
              </Box>
              <Text>Credit & Debit cards</Text>
            </HStack>
          </GridItem>
          <GridItem bg={'#FFF'} borderRadius={'8px'}>
            <HStack
              px={{ base: '10%', md: '40%' }}
              gap={2}
              flexDirection={'column'}
              py={'40px'}
              justifyContent={'center'}
              textAlign={'center'}
            >
              <Box bg={'#F4F6F7'} p={'13px'} borderRadius={'50%'}>
                <DocumentUpload color={'#0052CC'} />
              </Box>
              <Text>Loans & Credits</Text>
            </HStack>
          </GridItem>
          <GridItem bg={'#FFF'} borderRadius={'8px'}>
            <HStack
              px={{ base: '10%', md: '40%' }}
              gap={2}
              flexDirection={'column'}
              py={'40px'}
              justifyContent={'center'}
              textAlign={'center'}
            >
              <Box bg={'#F4F6F7'} p={'13px'} borderRadius={'50%'}>
                <Moneys color={'#0052CC'} />
              </Box>
              <Text>Wealth management</Text>
            </HStack>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Services;
