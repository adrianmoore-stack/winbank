import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Grid,
  GridItem,
  IconButton,
  Text,
  Flex,
  HStack,
  Button,
  useToast,
  calc,
} from '@chakra-ui/react';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import Status from '../UI/Status';
import { Copy } from 'iconsax-react';
import { context } from '../../store/store';

export const Details = ({ modal, accounts }) => {
  const { storedUser } = useContext(context);
  const { copyToClipBoard } = useCopyToClipboard();
  const toast = useToast();

  const { status, routingNumber } = JSON.parse(
    localStorage.getItem('accounts')
  );

  const successToast = (message) => {
    const id = 'toast';
    if (toast.isActive(id)) return;
    toast({
      id,
      position: 'top',
      status: 'success',
      duration: 2000,
      isClosable: false,
      render: (props) => {
        return (
          <Box
            color={'white'}
            display={'flex'}
            m={'auto'}
            justifyContent="center"
            alignItems="center"
            textAlign={'center'}
            borderRadius={'5px'}
            bg={'blue.500'}
            h={'30px'}
            w={'100px'}
          >
            {message}
          </Box>
        );
      },
    });
  };

  return (
    <Box
      w={{ base: '90%', md: '50%' }}
      position={'fixed'}
      top={calc('50%').subtract('305px').toString()}
      left={{ base: '5%', md: '25%' }}
      bg={'#FFF'}
      zIndex={'7'}
      pb={'12px'}
    >
      <Grid
        gap={2}
        h={'70px'}
        px={'16px'}
        alignItems={'center'}
        borderBottom={'1px solid #F4F5F7'}
        templateColumns={'repeat(5, 1fr)'}
      >
        <GridItem colSpan={'4'}>
          <Text
            color={'#1B1E21'}
            fontSize={{ base: '20px', md: '24px' }}
            fontWeight={700}
          >
            Account details
          </Text>
        </GridItem>
        <GridItem textAlign={'end'}>
          <IconButton
            onClick={() => modal()}
            bg="transparent"
            borderRadius={'50%'}
            border={'1px solid #A3A7AB'}
            icon={<CloseIcon />}
          />
        </GridItem>
      </Grid>
      <Box mt={'27px'} px={'16px'}>
        <Flex
          alignItems={{ base: '', md: 'center' }}
          gap={'2'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Text fontWeight={700} fontSize={{ base: '16px', md: '28px' }}>
            {storedUser.name}
          </Text>
          <Status
            bh={'24px'}
            mh={'28px'}
            color={status === 'active' ? '#1DD435' : 'red'}
          >
            {accounts.accountType}
          </Status>
        </Flex>
        <Text
          mt={'16px'}
          color={'#4B525A'}
          fontWeight={400}
          fontSize={'14px'}
          lineHeight={'20px'}
        >
          Available balance
        </Text>
        <Text
          color={'#1B1E21'}
          fontSize={{ base: '24px', md: '40px' }}
          fontWeight={700}
          mb={'24px'}
          lineHeight={{ base: '32px', md: '52px' }}
        >
          {`$${accounts.accountBalance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </Text>
      </Box>
      <Grid
        gap={4}
        mx={'16px'}
        pt={'20px'}
        alignItems={'center'}
        templateColumns={'1fr 1fr'}
        borderTop={'1px solid #F4F5F7'}
      >
        <Text fontWeight={400} fontSize={'14px'} color={'#4B525A'}>
          Account number:
        </Text>
        <HStack justifyContent={'flex-end'}>
          <Text
            color={'#1B1E21'}
            fontSize={'14px'}
            fontWeight={'500'}
            textAlign={'end'}
          >
            {accounts.accountNumber}
          </Text>
          <Button
            bg={'transparent'}
            padding={0}
            w={'10px'}
            h={'40px'}
            border={'1px solid #0052CC'}
            borderRadius={'50%'}
            color={'#0052CC'}
            onClick={() => {
              copyToClipBoard(accounts.accountNumber);
              successToast('copied!');
            }}
          >
            <Copy size={20} />
          </Button>
        </HStack>
        <Text fontWeight={400} fontSize={'14px'} color={'#4B525A'}>
          Routing (ABA) number:
        </Text>
        <HStack justifyContent={'flex-end'}>
          <Text
            color={'#1B1E21'}
            fontSize={'14px'}
            fontWeight={'500'}
            textAlign={'end'}
          >
            {routingNumber}
          </Text>
          <Button
            bg={'transparent'}
            padding={0}
            w={'10px'}
            h={'40px'}
            border={'1px solid #0052CC'}
            borderRadius={'50%'}
            color={'#0052CC'}
            onClick={() => {
              copyToClipBoard(routingNumber);
              successToast('copied!');
            }}
          >
            <Copy size={20} />
          </Button>
        </HStack>
        <Text fontWeight={400} fontSize={'14px'} color={'#4B525A'}>
          Phone number:
        </Text>
        <HStack justifyContent={'flex-end'}>
          <Text
            color={'#1B1E21'}
            fontSize={'14px'}
            fontWeight={'500'}
            textAlign={'end'}
          >
            {storedUser.phone}
          </Text>
          <Button
            bg={'transparent'}
            padding={0}
            w={'10px'}
            h={'40px'}
            border={'1px solid #0052CC'}
            borderRadius={'50%'}
            color={'#0052CC'}
            onClick={() => {
              copyToClipBoard(storedUser.phone);
              successToast('copied!');
            }}
          >
            <Copy size={20} />
          </Button>
        </HStack>
        <Text fontWeight={400} fontSize={'14px'} color={'#4B525A'}>
          Maximum credit limit:
        </Text>
        <Text
          color={'#1B1E21'}
          fontSize={'14px'}
          fontWeight={'500'}
          textAlign={'end'}
        >
          {`$${accounts.maxCreditLimit.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </Text>
        <Text fontWeight={400} fontSize={'14px'} color={'#4B525A'}>
          Minimum credit limit:
        </Text>
        <Text
          color={'#1B1E21'}
          fontSize={'14px'}
          fontWeight={'500'}
          textAlign={'end'}
        >
          {`$${accounts.minCreditLimit.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </Text>
        <Text fontWeight={400} fontSize={'14px'} color={'#4B525A'}>
          Daily limit:
        </Text>
        <Text
          color={'#1B1E21'}
          fontSize={'14px'}
          fontWeight={'500'}
          textAlign={'end'}
        >
          {`$${accounts.dailyTransactionLimit.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </Text>
        <Text fontWeight={400} fontSize={'14px'} color={'#4B525A'}>
          Monthly maintenance fee:
        </Text>
        <Text
          color={'#1B1E21'}
          fontSize={'14px'}
          fontWeight={'500'}
          textAlign={'end'}
        >
          {`$${accounts.monthlyFee.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </Text>
      </Grid>
    </Box>
  );
};

const AccountDetails = ({ closeModal, accounts }) => {
  return createPortal(
    <Details modal={closeModal} accounts={accounts} />,
    document.getElementById('menu')
  );
};

export default AccountDetails;
