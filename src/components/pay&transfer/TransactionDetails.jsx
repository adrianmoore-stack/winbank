import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Text, Button, Flex, HStack, Link } from '@chakra-ui/react';
import Status from '../UI/Status';

const TransactionDetails = () => {
  const navigate = useNavigate();
  const successTransaction = JSON.parse(
    localStorage.getItem('successTransaction')
  );

  return (
    <Box
      w={'100%'}
      color="#1B1E21"
      mt="32px"
      bg={'#FFF'}
      px={'16px'}
      pt={'24px'}
      pb={{ base: '60px', md: '28px' }}
    >
      <Box as="header" w="100%" borderBottom={'1px solid #F4F5F7'} pb={'10px'}>
        <HStack>
          <Text fontSize={'24px'} fontWeight={700}>
            Transaction details
          </Text>
          <Status
            color={
              successTransaction?.status === 'successful'
                ? '#1DD435'
                : successTransaction?.status === 'pending'
                ? 'orange'
                : 'red'
            }
          >
            {successTransaction?.status}
          </Status>
        </HStack>
        <Text
          fontSize={'14px'}
          letterSpacing={'0.08rem'}
          fontWeight={700}
          mt={'28px'}
        >
          YOUR INFORMATION
        </Text>
      </Box>
      <HStack mt={'10px'} justifyContent={'space-between'}>
        <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
          Transaction date:
        </Text>
        <Text fontSize={'14px'} fontWeight={500}>
          {new Date(successTransaction?.transactionDate).toLocaleString(
            'en-US'
          )}
        </Text>
      </HStack>
      <HStack mt={'10px'} justifyContent={'space-between'}>
        <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
          Pay from:
        </Text>
        <Text fontSize={'14px'} fontWeight={500}>
          {successTransaction?.accountType}
        </Text>
      </HStack>
      <Box pb={'10px'} w="100%" borderBottom={'1px solid #F4F5F7'}>
        <Text
          fontSize={'14px'}
          letterSpacing={'0.08rem'}
          fontWeight={700}
          mt={'28px'}
        >
          PAYEE INFORMATION
        </Text>
      </Box>
      <HStack mt={'10px'} justifyContent={'space-between'}>
        <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
          Send to:
        </Text>
        <Text fontSize={'14px'} fontWeight={500}>
          {successTransaction?.recipientName}
        </Text>
      </HStack>
      <Box pb={'10px'} w="100%" borderBottom={'1px solid #F4F5F7'}>
        <Text
          fontSize={'14px'}
          letterSpacing={'0.08rem'}
          fontWeight={700}
          mt={'28px'}
        >
          BANK INFORMATION
        </Text>
      </Box>
      <HStack mt={'10px'} justifyContent={'space-between'}>
        <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
          Bank name:
        </Text>
        <Text fontSize={'14px'} fontWeight={500}>
          {`${successTransaction?.recipientBank} ${
            successTransaction?.country || ''
          }`}
        </Text>
      </HStack>
      <HStack mt={'10px'} justifyContent={'space-between'}>
        <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
          Account number:
        </Text>
        <Text fontSize={'14px'} fontWeight={500}>
          {successTransaction?.recipientAccountNumber}
        </Text>
      </HStack>
      <HStack mt={'10px'} justifyContent={'space-between'}>
        <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
          Wire routing (ABA) number:
        </Text>
        <Text fontSize={'14px'} fontWeight={500}>
          {successTransaction?.routingNumber}
        </Text>
      </HStack>
      <HStack mt={'10px'} justifyContent={'space-between'}>
        <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
          Special instruction (optional):
        </Text>
        <Text fontSize={'14px'} fontWeight={500}>
          {successTransaction?.description}
        </Text>
      </HStack>
      <Box pb={'10px'} w="100%" borderBottom={'1px solid #F4F5F7'}>
        <Text
          fontSize={'14px'}
          letterSpacing={'0.08rem'}
          fontWeight={700}
          mt={'36px'}
        >
          TRANSFER DETAILS
        </Text>
      </Box>
      <Box alignItems={'center'} pb="16px" borderBottom={'1px solid #F4F5F7'}>
        <HStack justifyContent={'space-between'}>
          <Text color="#4B525A" fontSize={'14px'}>
            Total amount:
          </Text>
          <Text fontSize={'14px'} fontWeight={500}>
            {`$${successTransaction?.amount?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
          </Text>
        </HStack>
        <HStack mt={'10px'} justifyContent={'space-between'}>
          <Text color="#4B525A" fontSize={'14px'}>
            Wire transfer fee:
          </Text>
          <Text fontSize={'14px'} fontWeight={500}>
            $25.00
          </Text>
        </HStack>
      </Box>
      <HStack
        mt={'10px'}
        pb="20px"
        alignItems={'center'}
        justifyContent={'space-between'}
        borderBottom={'1px solid #F4F5F7'}
      >
        <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
          Total amount + Transaction fee:
        </Text>
        <Text fontSize={'24px'} fontWeight={700}>
          {`$${(+successTransaction?.amount + 25).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </Text>
      </HStack>
      <Flex my="30px" alignItems={'center'} gap={4} bg={'#FFF'}>
        <Button
          py="16px"
          borderRadius="8px"
          fontSize="14px"
          px="40px"
          bg={'#0052CC'}
          color="#FFF"
          onClick={() => navigate(-1)}
        >
          Repeat transaction
        </Button>
        <Link
          as={NavLink}
          gap="3px"
          w={'fit-content'}
          ml={'40px'}
          replace
          color={'#0052CC'}
          textDecoration="underline"
          to="/dashboard/transactionhistory"
          onClick={() => {
            localStorage.removeItem('beneficiary');
            localStorage.removeItem('successTransaction');
          }}
        >
          Go to my account
        </Link>
      </Flex>
    </Box>
  );
};

export default TransactionDetails;
