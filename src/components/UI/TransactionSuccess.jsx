import { createPortal } from 'react-dom';
import {
  Grid,
  GridItem,
  calc,
  Box,
  IconButton,
  Image,
  HStack,
  Text,
} from '@chakra-ui/react';
import { CloseIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import checkmark from '../Assets/checkmark.svg';

export const Success = ({ setDisplay }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const transactionType = pathname.split('/')[2];

  const successTransaction = JSON.parse(
    localStorage.getItem('successTransaction')
  );

  return (
    <Grid
      bg={'#FFF'}
      position={'fixed'}
      gap={2}
      borderRadius={'8px'}
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      templateRows={{ base: '1fr', md: 'repeat(8, 1fr)' }}
      top={{ base: calc('50vh').subtract('270px').toString(), md: '10%' }}
      left={{ base: '5%', md: '15%' }}
      zIndex={7}
      w={{ base: '90%', md: '70%' }}
    >
      <GridItem
        colStart={{ md: 2 }}
        rowStart={{ md: 1 }}
        rowEnd={{ md: 2 }}
        w={'100%'}
      >
        <HStack
          borderBottom={'1px solid #F4F5F7'}
          px={'16px'}
          py={'16px'}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={4}
        >
          <Text fontSize={{ base: '20px', md: '24px' }} fontWeight={700}>
            Transaction details
          </Text>
          <IconButton
            bg={'#FFF'}
            icon={<CloseIcon />}
            onClick={() => {
              setDisplay((prev) => !prev);
              navigate(`/pay&transfer/${transactionType}/transactiondetails`, {
                replace: true,
              });
            }}
          />
        </HStack>
      </GridItem>
      <GridItem
        display={'flex'}
        alignItems={'center'}
        colStart={{ md: 1 }}
        rowStart={{ md: 1 }}
        rowEnd={{ md: 9 }}
        colEnd={{ md: 2 }}
        bg={{ md: '#F4F5F7' }}
        w={'100%'}
      >
        <Box
          display={'flex'}
          mt={'20px'}
          w={'70%'}
          mx={'auto'}
          flexDirection={'column'}
          alignItems={'center'}
          pb={{ base: '40px', md: '0' }}
          textAlign={'center'}
        >
          <Image
            src={checkmark}
            w={{ base: '52px', md: '104px' }}
            h={{ base: '52px', md: '104px' }}
            alt="success icon"
          />
          <Text fontSize={'24px'} fontWeight={700}>
            Success!
          </Text>
          <Text fontSize={'14px'} color={'#4B525A'}>
            Transaction successful!
          </Text>
        </Box>
      </GridItem>
      <GridItem
        w={'100%'}
        px={'16px'}
        colStart={{ md: 2 }}
        rowStart={{ md: 2 }}
        rowEnd={{ md: 9 }}
      >
        <Text fontSize={'14px'} fontWeight={700} color={'#1B1E21'}>
          PAYEE INFORMATION
        </Text>
        <Box mt={'20px'} pb={'20px'} borderBottom="1px solid #F4F5F7">
          <HStack justifyContent={'space-between'}>
            <Text fontSize={'14px'} color="#4B525A">
              Recipient name:
            </Text>
            <Text
              textAlign={'end'}
              fontSize={'14px'}
              fontWeight={700}
              color="#1B1E21"
            >
              {successTransaction?.recipientName}
            </Text>
          </HStack>
          <HStack mt={'16px'} justifyContent={'space-between'}>
            <Text fontSize={'14px'} color="#4B525A">
              Recipient nickname:
            </Text>
            <Text
              textAlign={'end'}
              fontSize={'14px'}
              fontWeight={700}
              color="#1B1E21"
            >
              {successTransaction?.nickName}
            </Text>
          </HStack>
        </Box>
        <Text
          display={{ base: 'none', md: 'block' }}
          mt="20px"
          fontSize={'14px'}
          fontWeight={700}
          color={'#1B1E21'}
        >
          BANK INFORMATION
        </Text>
        <Box
          display={{ base: 'none', md: 'grid' }}
          mt="20px"
          pb={'20px'}
          borderBottom="1px solid #F4F5F7"
        >
          <HStack mt={'16px'} justifyContent={'space-between'}>
            <Text fontSize={'14px'} color="#4B525A">
              Bank name:
            </Text>
            <Text
              textAlign={'end'}
              fontSize={'14px'}
              fontWeight={700}
              color="#1B1E21"
            >
              {successTransaction?.recipientBank}
            </Text>
          </HStack>
          <HStack mt={'16px'} justifyContent={'space-between'}>
            <Text fontSize={'14px'} color="#4B525A">
              Account number:
            </Text>
            <Text
              textAlign={'end'}
              fontSize={'14px'}
              fontWeight={700}
              color="#1B1E21"
            >
              {successTransaction?.recipientAccountNumber}
            </Text>
          </HStack>
          <HStack mt={'16px'} justifyContent={'space-between'}>
            <Text fontSize={'14px'} color="#4B525A">
              Wire routing (ABA) number:
            </Text>
            <Text
              textAlign={'end'}
              fontSize={'14px'}
              fontWeight={700}
              color="#1B1E21"
            >
              {successTransaction?.routingNumber}
            </Text>
          </HStack>
          <HStack mt={'16px'} justifyContent={'space-between'}>
            <Text fontSize={'14px'} color="#4B525A">
              Special instruction (optional):
            </Text>
            <Text
              textAlign={'end'}
              fontSize={'14px'}
              fontWeight={700}
              color="#1B1E21"
            >
              {successTransaction?.description}
            </Text>
          </HStack>
          <HStack mt={'16px'} justifyContent={'space-between'}>
            <Text fontSize={'14px'} color="#4B525A">
              Payment method:
            </Text>
            <Text
              textAlign={'end'}
              fontSize={'14px'}
              fontWeight={700}
              color="#1B1E21"
            >
              {successTransaction?.transferType}
            </Text>
          </HStack>
        </Box>
        <Box
          display={{ base: 'none', md: 'flex' }}
          gap={3}
          mt={'16px'}
          borderBottom={'1px solid #F4F5F7'}
          py="12px"
          px="14px"
          color="#563600"
          bg={'#FEF5F6'}
          border="1px solid #F59B00"
          borderRadius={'8px'}
          fontSize={'14px'}
        >
          <WarningTwoIcon mt="7px" w={'16px'} h={'16px'} color="#F59B00" />
          <Text display={'inline-block'}>
            Verify payee details for accuracy when adding a new payee. We are
            not responsible for errors or consequences arising from incorrect
            information. Contact support if there are any issues.
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
};

const TransactionSuccess = ({ transactionDetails, setDisplay }) => {
  return createPortal(
    <Success transactionDetails={transactionDetails} setDisplay={setDisplay} />,
    document.getElementById('menu')
  );
};

export default TransactionSuccess;
