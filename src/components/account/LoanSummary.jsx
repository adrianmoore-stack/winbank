import { Box, Button, Text } from '@chakra-ui/react';
import SummaryWrapper from '../UI/SummaryWrapper';

const LoanSummary = () => {
  return (
    <SummaryWrapper>
      <Box
        mx={'auto'}
        mt={{ base: '24px', md: '43px' }}
        w={{ base: '90%', md: '50%' }}
        textAlign={'center'}
      >
        <Text
          color={'#06060B'}
          fontSize={'24px'}
          fontWeight={700}
          lineHeight={'32px'}
        >
          No Loan Record Found
        </Text>
        <Text
          mt="8px"
          fontSize={'14px'}
          fontWeight={400}
          lineHeight={'24px'}
          color={'#666481'}
        >
          It looks like you don't have any current or previous loan records on
          file. Please check back later or contact our customer support team for
          more information on how to apply for a loan
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
          Request for a loan
        </Button>
      </Box>
    </SummaryWrapper>
  );
};

export default LoanSummary;
