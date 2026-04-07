import { Box, Text, Button } from '@chakra-ui/react';
import SummaryWrapper from '../UI/SummaryWrapper';

const Active = () => {
  return (
    <SummaryWrapper>
      <Box
        mx={'auto'}
        mt={{ base: '24px', md: '43px' }}
        w={{ base: '90%', md: '70%' }}
        textAlign={'center'}
      >
        <Text
          color={'#06060B'}
          fontSize={{ base: '20px', md: '24px' }}
          fontWeight={700}
          lineHeight={'32px'}
        >
          Explore Active Investment Opportunities
        </Text>
        <Text
          mt="8px"
          fontSize={{ base: '12px', md: '14px' }}
          fontWeight={400}
          lineHeight={{ base: '16px', md: '24px' }}
          color={'#666481'}
        >
          We're sorry, but currently there are no active investment
          opportunities available. However, don't let that discourage you from
          exploring the exciting world of active investing
        </Text>
      </Box>
      <Box
        mx={'auto'}
        textAlign={'center'}
        mt="40px"
        w={{ base: '90%', md: '50%' }}
      >
        <Button
          bg={'#0052CC'}
          px={'32px'}
          py={'16px'}
          w="181px"
          h="52px"
          borderRadius={'8px'}
          color={'#FBFBFD'}
        >
          Explore now
        </Button>
      </Box>
    </SummaryWrapper>
  );
};

export default Active;
