import {
  Box,
  Grid,
  GridItem,
  Text,
  Textarea,
  Button,
  Flex,
  Link,
  Checkbox,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { InfoIcon, WarningTwoIcon, RepeatIcon } from '@chakra-ui/icons';
import InputElement from '../UI/InputElement';
import TransactionSuccess from '../UI/TransactionSuccess';
import { Backdrop } from '../mobile/MenuLayout';
import { useState, useEffect } from 'react';
import useValidation from '../../hooks/use-Validation';
import { useOutletContext } from 'react-router-dom';
import TransactionFail from '../UI/TransactionFail';

const InstantTransInit = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [otpSuccess, setOtpSuccess] = useState(null);
  const [otpFail, setOtpFail] = useState(null);
  const [otpCode, setOtpCode] = useState('');

  const {
    accounts,
    acctype,
    makeTransfer,
    logoutHandler,
    sendOTP,
    loadingToken,
  } = useOutletContext();

  const [formIsValid, setFormIsValid] = useState(false);
  const [checkedData, setCheckedData] = useState(false);

  const name = useValidation(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/u);
  const amount = useValidation(/^[0-9]+$/);
  const accountNumber = useValidation(/^[0-9]+$/);
  const routing = useValidation(/^[0-9]+$/);
  const bankName = useValidation(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/u);
  const description = useValidation(/^[A-Za-z0-9_]+$/);

  const { inputState: nameState, dispatchInput: dispatchName } = name;
  const { inputState: amountState, dispatchInput: dispatchAmount } = amount;
  const {
    inputState: accountNumberState,
    dispatchInput: dispatchAccountNumber,
  } = accountNumber;
  const { inputState: routingState, dispatchInput: dispatchRouting } = routing;
  const { inputState: bankNameState, dispatchInput: dispatchBankName } =
    bankName;

  const { inputState: descriptionState, dispatchInput: dispatchDescription } =
    description;

  useEffect(() => {
    if (
      !nameState.isValid ||
      !accountNumberState.isValid ||
      !routingState.isValid ||
      !bankNameState.isValid ||
      !checkedData
    )
      return setFormIsValid(false);

    setFormIsValid(true);
  }, [
    nameState.isValid,
    accountNumberState.isValid,
    routingState.isValid,
    bankNameState.isValid,
    checkedData,
  ]);

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
    const transdata = {
      accountType: accounts?.accountDetails[acctype].accountType,
      senderAccountNumber: accounts?.accountDetails[acctype].accountNumber,
      amount: +amountState.value,
      charges: 25,
      otp: otpCode,
      recipientAccountNumber: +accountNumberState.value,
      recipientBank: bankNameState.value,
      recipientName: nameState.value,
      transferType: 'instant',
      transactionType: 'debit',
      description: descriptionState.value,
      routingNumber: routingState.value,
    };

    try {
      const transaction = await makeTransfer(transdata);
      localStorage.setItem(
        'successTransaction',
        JSON.stringify(transaction.transactionDetails)
      );
      setShowSuccessModal((prev) => !prev);
    } catch (error) {
      setShowFailModal(true);
    }
  };

  return (
    <>
      {showFailModal && (
        <TransactionFail setDisplay={setShowFailModal} logout={logoutHandler} />
      )}
      {showSuccessModal && <Backdrop />}
      {showSuccessModal && (
        <TransactionSuccess
          setDisplay={setShowSuccessModal}
          transactionDetails={JSON.parse(localStorage.getItem('transData'))}
        />
      )}
      <Box
        mt={{ base: '32px', md: '40px' }}
        bg={'#FFF'}
        borderBottom={'#F4F5F7'}
        as="section"
        px={{ base: '16px', md: '32px' }}
        pt={{ base: '24px', md: '32px' }}
        pb={'40px'}
      >
        <Text fontWeight={700} fontSize={'24px'}>
          Transfer details
        </Text>

        <Text
          mt={{ base: '26px', md: '34px' }}
          fontWeight={700}
          textTransform={'uppercase'}
        >
          recipient's information
        </Text>
        <Grid
          gap={{ base: 2, md: 8 }}
          borderBottom={{ base: '1px solid #F4F5F7', md: 'none' }}
          pb={'24px'}
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        >
          <GridItem>
            <InputElement
              value={nameState.value}
              onChange={(e) =>
                dispatchName({ type: 'NAME_INPUT', val: e.target.value })
              }
              placeholder={"Enter recipient's name"}
            >
              Recipient's name
            </InputElement>
          </GridItem>
        </Grid>
        <Text
          mt={{ base: '16px', md: '0' }}
          fontWeight={700}
          textTransform={'uppercase'}
        >
          Bank information
        </Text>
        <Grid
          gap={{ base: 2, md: 8 }}
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        >
          <GridItem>
            <InputElement
              value={accountNumberState.value}
              onChange={(e) =>
                dispatchAccountNumber({
                  type: 'ACCOUNT_NUMBER_INPUT',
                  val: e.target.value,
                })
              }
              placeholder={'Enter account number'}
            >
              Account number
            </InputElement>
          </GridItem>
          <GridItem>
            <InputElement
              value={routingState.value}
              onChange={(e) =>
                dispatchRouting({ type: 'ROUTING_INPUT', val: e.target.value })
              }
              placeholder={'Enter routing number'}
            >
              Wire routing (ABA) number
            </InputElement>
            <Text fontSize={'14px'} mt={'8px'} display={'inline-block'}>
              Don't know?{' '}
              <a
                style={{
                  display: 'inline',
                  color: '#0052CC',
                  textDecoration: 'underline',
                }}
                href="https://www.aba.com/about-us/routing-number"
                target={'_blank'}
                rel="noreferrer"
              >
                Search here
              </a>
            </Text>
          </GridItem>
          <GridItem>
            <InputElement
              value={bankNameState.value}
              onChange={(e) =>
                dispatchBankName({
                  type: 'BANK_NAME_INPUT',
                  val: e.target.value,
                })
              }
              placeholder={'Enter bank name'}
            >
              Bank name
            </InputElement>
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
              Transfer fee included
            </Text>
          </GridItem>
        </Grid>
        <Text
          position={'relative'}
          mt={'16px'}
          fontWeight={400}
          fontSize="14px"
          color={'#4B525A'}
        >
          Purpose of payment (Optional)
        </Text>
        <Textarea
          w={{ base: '100%', md: '48.5%' }}
          mt={'8px'}
          h="155px"
          fontWeight={400}
          fontSize={'14px'}
          color={'#4B525A'}
          borderRadius={'16px'}
          value={descriptionState.value}
          onChange={(e) =>
            dispatchDescription({
              type: 'DESCRIPTION_INPUT',
              val: e.target.value,
            })
          }
          pt={'16px'}
          pl={'16px'}
          placeholder="Enter instruction"
          bg={'#F4F5F7'}
        />
        <Box mt="8px" color={'#4B525A'}>
          <InfoIcon />
          <Text ml="7px" display={'inline'} fontSize={'14px'}>
            Max 105 characters
          </Text>
        </Box>
        <Box
          display={'flex'}
          gap={3}
          mt={'24px'}
          pt="12px"
          pb="32px"
          px="14px"
          color="#563600"
          bg={'#FEF5F6'}
          border="1px solid #F59B00"
          borderRadius={'8px'}
          fontSize={'14px'}
        >
          <WarningTwoIcon mt="7px" w={'16px'} h={'16px'} color="#F59B00" />
          <Text display={'inline-block'}>
            Transfer to this payee will be routed as a wire transfer. Fees and
            transfer limits generally applies for wire transfer service, for a
            description of those limits fees and other terms and conditions
            related to the wire transfer service, refer to out Client Mutual or{' '}
            <a
              style={{
                display: 'inline',
                color: '#0052CC',
                textDecoration: 'underline',
              }}
              href="https://www.google.com"
              target={'_blank'}
              rel="noreferrer"
            >
              visit this page
            </a>{' '}
            ® Online
          </Text>
        </Box>
        <Box
          mt="23px"
          pb={{ base: '100px', md: '30px' }}
          borderBottom={'1px solid #F4F5F7'}
          fontSize="14px"
        >
          <Checkbox
            onChange={() => {
              if (checkedData) setCheckedData(false);
              else setCheckedData(true);
            }}
          >
            Yes, it is correct
          </Checkbox>
        </Box>
        <Flex mt="30px" alignItems={'center'} gap={4} bg={'#FFF'}>
          {!otpSuccess && (
            <Button
              py="16px"
              isLoading={loadingToken}
              loadingText={'Generating token'}
              borderRadius="8px"
              fontSize="14px"
              px="40px"
              bg={'#0052CC'}
              isDisabled={!formIsValid}
              color="#FFF"
              _hover={{ bg: '#0052CC' }}
              onClick={generateOTP}
            >
              Proceed
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
                  to="/pay&transfer/instanttransfer"
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

export default InstantTransInit;
