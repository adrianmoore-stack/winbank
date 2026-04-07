import { WarningTwoIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Link,
  Text,
} from '@chakra-ui/react';
import { NavLink, useOutletContext } from 'react-router-dom';
import InputElement from '../UI/InputElement';
import { useEffect, useState } from 'react';
import AddPayeeSuccess from '../UI/AddPayeeSuccess';
import { Backdrop } from '../mobile/MenuLayout';
import useValidation from '../../hooks/use-Validation';

const AddPayee = () => {
  let pathName;
  let rootpath;

  const [payeeAdded, setPayeeAdded] = useState(false);
  const context = useOutletContext();

  const [formIsValid, setFormIsValid] = useState(false);
  const [checkedData, setCheckedData] = useState(false);

  ///////// VALIDATORS ////////////
  const name = useValidation(/^[a-zA-Z]{3,25}$/);
  const nickName = useValidation(/^[a-zA-Z]{3,10}$/);
  const country = useValidation(/^[a-zA-Z]{3,15}$/);
  const state = useValidation(/^[a-zA-Z]{3,25}$/);
  const city = useValidation(/^[a-zA-Z]{3,25}$/);
  const address = useValidation(/^[a-zA-Z]{3,100}$/);
  const accountNumber = useValidation(/^[0-9]+$/);
  const routing = useValidation(/^[0-9]+$/);
  const bankName = useValidation(/^[a-zA-Z]{3,50}$/);
  const swiftCode = useValidation(/^[a-zA-Z0-9]{3,15}$/);

  const { inputState: nameState, dispatchInput: dispatchName } = name;
  const { inputState: nickNameState, dispatchInput: dispatchNickName } =
    nickName;
  const { inputState: countryState, dispatchInput: dispatchCountry } = country;
  const { inputState: stateState, dispatchInput: dispatchState } = state;
  const { inputState: cityState, dispatchInput: dispatchCity } = city;
  const { inputState: addressState, dispatchInput: dispatchAddress } = address;
  const {
    inputState: accountNumberState,
    dispatchInput: dispatchAccountNumber,
  } = accountNumber;
  const { inputState: routingState, dispatchInput: dispatchRouting } = routing;
  const { inputState: bankNameState, dispatchInput: dispatchBankName } =
    bankName;
  const { inputState: swiftCodeState, dispatchInput: dispatchSwiftCode } =
    swiftCode;

  if (context) {
    pathName = context.pathName;
    rootpath = context.rootpath;
  }

  useEffect(() => {
    if (
      pathName === 'wiretransfer' &&
      (!nameState.isValid ||
        !accountNumberState.isValid ||
        !routingState.isValid ||
        !bankNameState.isValid ||
        !checkedData)
    )
      return setFormIsValid(false);

    if (
      pathName === 'globaltransfer' &&
      (!nameState.isValid ||
        !accountNumberState.isValid ||
        !routingState.isValid ||
        !bankNameState.isValid ||
        !swiftCodeState.isValid ||
        !countryState.isValid ||
        !stateState.isValid ||
        !cityState.isValid ||
        !addressState.isValid ||
        !checkedData)
    )
      return setFormIsValid(false);
    setFormIsValid(true);
  }, [
    pathName,
    nameState.isValid,
    accountNumberState.isValid,
    routingState.isValid,
    bankNameState.isValid,
    swiftCodeState.isValid,
    countryState.isValid,
    stateState.isValid,
    cityState.isValid,
    addressState.isValid,
    checkedData,
  ]);

  const addPayeeHandler = async () => {
    const transdata = {
      name: nameState.value,
      nickName: nickNameState.value,
      accountNumber: accountNumberState.value,
      routingNumber: routingState.value,
      bankName: bankNameState.value,
      swiftCode: swiftCodeState.value,
      bankCountry: countryState.value,
      bankState: stateState.value,
      bankCity: cityState.value,
      bankAddress: addressState.value,
      transferType:
        pathName === 'wiretransfer'
          ? 'wire'
          : pathName === 'globaltransfer'
          ? 'global'
          : 'instant',
    };

    await context.addBeneficiary(transdata);
    dispatchName({ type: 'NAME_INPUT', val: '' });
    dispatchNickName({ type: 'NICK_NAME_INPUT', val: '' });
    dispatchCountry({ type: 'COUNTRY_INPUT', val: '' });
    dispatchState({ type: 'STATE_INPUT', val: '' });
    dispatchCity({ type: 'CITY_INPUT', val: '' });
    dispatchAddress({ type: 'ADDRESS_INPUT', val: '' });
    dispatchAccountNumber({ type: 'ACCOUNT_NUMBER_INPUT', val: '' });
    dispatchRouting({ type: 'ROUTING_INPUT', val: '' });
    dispatchBankName({ type: 'BANK_NAME_INPUT', val: '' });
    dispatchSwiftCode({ type: 'SWIFT_CODE_INPUT', val: '' });
    setFormIsValid(false);
    setPayeeAdded((prev) => !prev);
  };

  return (
    <>
      {!rootpath && payeeAdded && <Backdrop />}
      {!rootpath && payeeAdded && (
        <AddPayeeSuccess setDisplay={setPayeeAdded} />
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
        <Text
          // mt={{ base: '26px', md: '34px' }}
          fontWeight={700}
          textTransform={'uppercase'}
        >
          Payee information
        </Text>
        <Grid
          gap={{ base: 4, md: 5 }}
          mt={'16px'}
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
              required={true}
            >
              Recipient's name
            </InputElement>
          </GridItem>
          <GridItem>
            <InputElement
              value={nickNameState.value}
              onChange={(e) =>
                dispatchNickName({
                  type: 'NICK_NAME_INPUT',
                  val: e.target.value,
                })
              }
              placeholder={'Enter nick name'}
            >
              Nick name
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
          gap={{ base: 4, md: 5 }}
          mt={'16px'}
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
              required={true}
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
              required={true}
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
              required={true}
            >
              Bank name
            </InputElement>
          </GridItem>
          {pathName === 'globaltransfer' && (
            <GridItem>
              <InputElement
                value={swiftCodeState.value}
                onChange={(e) =>
                  dispatchSwiftCode({
                    type: 'SWIFT_CODE_INPUT',
                    val: e.target.value,
                  })
                }
                placeholder={'Enter swift code'}
                required={true}
              >
                Bank swift code
              </InputElement>
            </GridItem>
          )}
          {pathName === 'globaltransfer' && (
            <GridItem>
              <InputElement
                value={countryState.value}
                onChange={(e) =>
                  dispatchCountry({ type: 'COUNTRY', val: e.target.value })
                }
                placeholder={"Enter recipient's country"}
                required={true}
              >
                Bank country
              </InputElement>
            </GridItem>
          )}
          {pathName === 'globaltransfer' && (
            <GridItem>
              <InputElement
                value={stateState.value}
                onChange={(e) =>
                  dispatchState({ type: 'STATE_INPUT', val: e.target.value })
                }
                placeholder={"Enter recipient's state"}
                required={true}
              >
                Bank state
              </InputElement>
            </GridItem>
          )}
          {pathName === 'globaltransfer' && (
            <GridItem>
              <InputElement
                value={cityState.value}
                onChange={(e) =>
                  dispatchCity({ type: 'CITY_INPUT', val: e.target.value })
                }
                placeholder={"Enter recipient's city"}
                required={true}
              >
                Bank city
              </InputElement>
            </GridItem>
          )}
          <GridItem>
            <InputElement
              value={addressState.value}
              onChange={(e) =>
                dispatchAddress({
                  type: 'ADDRESS_INPUT',
                  val: e.target.value,
                })
              }
              placeholder={"Enter recipient's address"}
              required={true}
            >
              Bank Address
            </InputElement>
          </GridItem>
        </Grid>
        {/* <Text
          position={'relative'}
          mt={'16px'}
          fontWeight={400}
          fontSize="14px"
          color={'#4B525A'}
        >
          Special instruction (Optional)
        </Text>
        <Textarea
          w={{ base: '100%', md: '48.5%' }}
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
        </Box> */}
        <Box
          display={'flex'}
          gap={3}
          mt={'44px'}
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
        <Box mt="23px" fontSize="14px">
          <Checkbox
            onChange={() => {
              if (checkedData) setCheckedData(false);
              else setCheckedData(true);
            }}
          >
            Yes, it is correct
          </Checkbox>
        </Box>
      </Box>
      <Flex
        py="40px"
        pl={{ base: '16px', md: '32px' }}
        alignItems={'center'}
        gap={4}
        bg={'#FFF'}
      >
        <Button
          py="16px"
          borderRadius="8px"
          fontSize="14px"
          px="40px"
          bg={'#0052CC'}
          isDisabled={!formIsValid}
          color="#FFF"
          _hover={{ bg: '#0052CC' }}
          onClick={addPayeeHandler}
        >
          Add
        </Button>
        <Link
          as={NavLink}
          border={
            rootpath === 'myPayees'
              ? 'none'
              : { base: 'none', md: '1px solid #0052CC' }
          }
          borderRadius="8px"
          mb="0"
          w={'fit-content'}
          px={{ base: '0', md: '40px' }}
          // py={{base: '0',md: '16px'}}
          color={rootpath === 'myPayees' ? '#EF2020' : '#0052CC'}
          // textDecoration='underline'
          to="/myPayees"
        >
          {rootpath === 'myPayees' ? 'Back' : 'Choose from existing payees'}
        </Link>
      </Flex>
    </>
  );
};

export default AddPayee;
