import { useState } from 'react';
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Text,
  Flex,
  Button,
  Link,
  Textarea,
} from '@chakra-ui/react';
import { InfoIcon, RepeatIcon } from '@chakra-ui/icons';
import InputElement from '../UI/InputElement';
import { NavLink, useOutletContext } from 'react-router-dom';
import TransactionSuccess from '../UI/TransactionSuccess';
import { Backdrop } from '../mobile/MenuLayout';
import useValidation from '../../hooks/use-Validation';
import TransactionFail from '../UI/TransactionFail';

const GlobalInit = () => {
  const { acctype, makeTransfer, logoutHandler, sendOTP, loadingToken } =
    useOutletContext();

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [otpSuccess, setOtpSuccess] = useState(null);
  const [otpFail, setOtpFail] = useState(null);
  const [otpCode, setOtpCode] = useState('');

  const amount = useValidation(/^[0-9]+$/);
  const description = useValidation(/^[A-Za-z0-9_]+$/);

  const { inputState: amountState, dispatchInput: dispatchAmount } = amount;
  const { inputState: descriptionState, dispatchInput: dispatchDescription } =
    description;

  const accounts = JSON.parse(localStorage.getItem('accounts'));

  const generateOTP = async () => {
    setOtpFail(null);
    try {
      const res = await sendOTP();
      setOtpSuccess(res?.data.message);
    } catch (error) {
      setOtpFail(error.message);
    }
  };

  const confirmTransfer = async () => {
    const data = {
      accountType: accounts?.accountDetails[acctype].accountType,
      senderAccountNumber: accounts?.accountDetails[acctype].accountNumber,
      amount: +amountState.value,
      charges: 25,
      otp: otpCode,
      routingNumber: transactionDetails.routingNumber,
      recipientAccountNumber: transactionDetails.accountNumber,
      recipientBank: transactionDetails.bankName,
      recipientName: transactionDetails.name,
      transferType: transactionDetails.transferType,
      transactionType: 'debit',
      description: descriptionState.value,
    };

    try {
      const transaction = await makeTransfer(data);
      localStorage.setItem(
        'successTransaction',
        JSON.stringify(transaction.transactionDetails)
      );
      setShowSuccessModal((prev) => !prev);
    } catch (error) {
      setShowFailModal(true);
    }
  };

  const transactionDetails = JSON.parse(localStorage.getItem('beneficiary'));

  return (
    <>
      {showFailModal && (
        <TransactionFail setDisplay={setShowFailModal} logout={logoutHandler} />
      )}
      {showSuccessModal && <Backdrop />}
      {showSuccessModal && (
        <TransactionSuccess
          transactionDetails={transactionDetails}
          setDisplay={setShowSuccessModal}
        />
      )}
      <Box
        w={'100%'}
        color="#1B1E21"
        mt="32px"
        bg={'#FFF'}
        px={'16px'}
        pt={'24px'}
        pb={{ base: '60px', md: '28px' }}
      >
        <Box
          as="header"
          w="100%"
          borderBottom={'1px solid #F4F5F7'}
          pb={'10px'}
        >
          <Text fontSize={'24px'} fontWeight={700}>
            {`Review transfer to ${transactionDetails?.name}`}
          </Text>
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
            Transfer request date:
          </Text>
          <Text fontSize={'14px'} fontWeight={500}>
            {new Date(Date.now()).toLocaleString('en-US')}
          </Text>
        </HStack>
        <HStack mt={'10px'} justifyContent={'space-between'}>
          <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
            Pay from:
          </Text>
          <Text fontSize={'14px'} fontWeight={500}>
            {accounts?.accountDetails[acctype].accountType}
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
            {transactionDetails?.name}
          </Text>
        </HStack>
        <HStack mt={'10px'} justifyContent={'space-between'}>
          <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
            Country:
          </Text>
          <Text fontSize={'14px'} fontWeight={500}>
            {transactionDetails?.bankCountry}
          </Text>
        </HStack>
        <HStack mt={'10px'} justifyContent={'space-between'}>
          <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
            State:
          </Text>
          <Text fontSize={'14px'} fontWeight={500}>
            {transactionDetails?.bankState}
          </Text>
        </HStack>
        <HStack mt={'10px'} justifyContent={'space-between'}>
          <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
            City:
          </Text>
          <Text fontSize={'14px'} fontWeight={500}>
            {transactionDetails?.bankCity}
          </Text>
        </HStack>
        <HStack mt={'10px'} justifyContent={'space-between'}>
          <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
            Address:
          </Text>
          <Text fontSize={'14px'} fontWeight={500}>
            {transactionDetails?.bankAddress}
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
            {`${transactionDetails?.bankName}, ${transactionDetails?.bankCountry}`}
          </Text>
        </HStack>
        <HStack mt={'10px'} justifyContent={'space-between'}>
          <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
            Account number:
          </Text>
          <Text fontSize={'14px'} fontWeight={500}>
            {transactionDetails?.accountNumber}
          </Text>
        </HStack>
        <HStack mt={'10px'} justifyContent={'space-between'}>
          <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
            Wire routing (ABA) number:
          </Text>
          <Text fontSize={'14px'} fontWeight={500}>
            {transactionDetails?.routingNumber}
          </Text>
        </HStack>
        <HStack mt={'10px'} justifyContent={'space-between'}>
          <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
            Bank swift code:
          </Text>
          <Text fontSize={'14px'} fontWeight={500}>
            {transactionDetails?.swiftCode}
          </Text>
        </HStack>
        <Grid gap={4} mt={'10px'} templateColumns={{ md: 'repeat(2, 1fr)' }}>
          <GridItem>
            <Text
              position={'relative'}
              mt={'16px'}
              fontWeight={400}
              fontSize="14px"
              color={'#4B525A'}
            >
              Special instruction (Optional)
            </Text>
          </GridItem>
          <GridItem>
            <Textarea
              w={{ base: '100%', md: '100%' }}
              mt={'8px'}
              h="155px"
              fontWeight={400}
              fontSize={'14px'}
              color={'#4B525A'}
              borderRadius={'16px'}
              pt={'16px'}
              pl={'16px'}
              placeholder="Enter instruction"
              bg={'#F4F5F7'}
              value={descriptionState.value}
              onChange={(e) =>
                dispatchDescription({
                  type: 'DESCRIPTION_INPUT',
                  val: e.target.value,
                })
              }
            />
            <Box mt="8px" color={'#4B525A'}>
              <InfoIcon />
              <Text ml="7px" display={'inline'} fontSize={'14px'}>
                Max 105 characters, 35 characters per line
              </Text>
            </Box>
          </GridItem>
        </Grid>
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
        <Grid
          alignItems={'center'}
          pb="16px"
          borderBottom={'1px solid #F4F5F7'}
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        >
          <GridItem display={{ base: 'none', md: 'block' }}>
            <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
              Total amount:
            </Text>
          </GridItem>
          <GridItem>
            <InputElement
              value={+amountState.value}
              onChange={(e) =>
                dispatchAmount({ type: 'AMOUNT_INPUT', val: e.target.value })
              }
              placeholder={'Enter amount'}
            >
              Amount
            </InputElement>
            <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
              Amount in USD
            </Text>
          </GridItem>
          <GridItem display={{ base: 'none', md: 'block' }}>
            <Text color="#4B525A" display={'inline-block'} fontSize={'14px'}>
              Wire transfer fee:
            </Text>
          </GridItem>
          <GridItem textAlign={'end'} display={{ base: 'none', md: 'block' }}>
            <Text fontSize={'14px'} fontWeight={500}>
              $25.00
            </Text>
          </GridItem>
        </Grid>
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
            {amountState.value && amountState.value > 0
              ? `$${(+amountState.value + 25).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
              : ''}
          </Text>
        </HStack>
        <Flex my="30px" alignItems={'center'} gap={4} bg={'#FFF'}>
          {!otpSuccess && (
            <Button
              py="16px"
              isLoading={loadingToken}
              loadingText={'Generating token'}
              borderRadius="8px"
              fontSize="14px"
              px="40px"
              bg={'#0052CC'}
              isDisabled={!amountState.isValid}
              _hover={{ bg: '#0052CC' }}
              color="#FFF"
              onClick={generateOTP}
            >
              proceed
            </Button>
          )}
          <Text color={'red'}>{otpFail}</Text>
        </Flex>
        {otpSuccess && (
          <Grid
            alignItems={{ md: 'center' }}
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          >
            <GridItem>
              <Text color={'#0052CC'}>{otpSuccess}</Text>
              <Button
                mt={{ base: '20px', md: '40px' }}
                mb={{ base: '20px', md: 0 }}
                rightIcon={<RepeatIcon />}
                onClick={() => setOtpSuccess('')}
              >
                Regenerate code
              </Button>
            </GridItem>
            <GridItem>
              <InputElement
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
              >
                Transaction token
              </InputElement>
              <Flex my="30px" alignItems={'center'} gap={4} bg={'#FFF'}>
                <Button
                  py="16px"
                  // mt={'15px'}
                  borderRadius="8px"
                  fontSize="14px"
                  px="40px"
                  bg={'#0052CC'}
                  isDisabled={!amountState.isValid}
                  _hover={{ bg: '#0052CC' }}
                  color="#FFF"
                  onClick={confirmTransfer}
                >
                  Confirm transfer
                </Button>
                <Link
                  as={NavLink}
                  gap="3px"
                  w={'fit-content'}
                  ml={'40px'}
                  color={'#EF2020'}
                  textDecoration="underline"
                  to="/pay&transfer/globaltransfer"
                  onClick={() => localStorage.removeItem('transData')}
                >
                  Cancel
                </Link>
              </Flex>
            </GridItem>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default GlobalInit;
