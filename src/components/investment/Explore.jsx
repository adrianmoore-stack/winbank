import { Box, Button, Grid, HStack } from '@chakra-ui/react';
import Invest from './Invest';
import investment from '../../utils/investmentData';

const Explore = () => {
  return (
    <>
      <Box
        w="100%"
        overflowX={'scroll'}
        sx={{
          scrollbarWidth: 'none',
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <HStack mt="24px" w={'600px'}>
          <Button
            bg="#0052CC" // #FFF
            borderRadius={'30px'}
            color={'#FFF'}
            fontSize={'16px'}
            fontWeight={400}
            py={'8px'}
            px={'16px'}
            w="fit-content"
          >
            All
          </Button>
          {/* <Button
            bg="#FFF"
            fontSize={'16px'}
            fontWeight={400}
            borderRadius={'30px'}
            py={'8px'}
            px={'16px'}
            w="fit-content"
          >
            Fixed-Income
          </Button>
          <Button
            bg="#FFF"
            fontSize={'16px'}
            fontWeight={400}
            borderRadius={'30px'}
            py={'8px'}
            px={'16px'}
            w="fit-content"
          >
            Real-Estate
          </Button>
          <Button
            bg="#FFF"
            fontSize={'16px'}
            fontWeight={400}
            borderRadius={'30px'}
            py={'8px'}
            px={'16px'}
            w="fit-content"
          >
            Agriculture
          </Button>
          <Button
            bg="#FFF"
            fontSize={'16px'}
            fontWeight={400}
            borderRadius={'30px'}
            py={'8px'}
            px={'16px'}
            w="fit-content"
          >
            Transportation
          </Button> */}
        </HStack>
      </Box>
      <Grid
        bg="#FFF"
        gap={4}
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        pt={{ base: '24px', md: '32px' }}
        px={{ base: '16px', md: '32px' }}
        w="100%"
        mt="24px"
        pb={{ base: '57px', md: '172px' }}
      >
        {investment.map((data, i) => {
          return <Invest key={i} investing={data} />;
        })}
      </Grid>
    </>
  );
};

export default Explore;
