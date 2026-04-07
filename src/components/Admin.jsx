import axiosClient from '../utils/axiosClient';
import {
  Heading,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Admin = () => {
  const layoutStyle = {
    border: '1.5px solid blue',
    marginLeft: '5px',
    marginBottom: '5px',
    borderRadius: '5px',
  };

  const user = JSON.parse(localStorage.getItem('user'));
  const accounts = JSON.parse(localStorage.getItem('accounts'));

  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [accountType, setAccountType] = useState('');
  const [senderName, setSenderName] = useState('');
  const [recipientAccountNumber, setRecipientAccountNumber] = useState('');
  const [transferType, setTransferType] = useState('');
  const [description, setDescription] = useState('');

  const [customerStatusMessage, setCustomerStatusMessage] = useState('');
  const [transactionStatusMessage, setTransactionStatusMessage] = useState('');

  const allTransactions = async () => {
    try {
      const allTransfers = await axiosClient.get(
        `/transactions/?userId=${user._id}`
      );
      setTransactions(allTransfers.data.data.transactions);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTransactionStatus = async (id) => {
    try {
      await axiosClient.patch(`transactions/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      allTransactions();
    }
  };

  const confirmTransaction = async () => {
    if (
      accountType &&
      amount &&
      senderName &&
      recipientAccountNumber &&
      transferType
    ) {
      try {
        await axiosClient.post('transactions/external', {
          accountType,
          amount: +amount,
          senderName,
          recipientAccountNumber: +recipientAccountNumber,
          transferType,
          description,
        });
      } catch (error) {
        console.log(error);
      } finally {
        allTransactions();
      }
    }

    setAccountType('');
    setAmount('');
    setSenderName('');
    setDescription('');
    setRecipientAccountNumber('');
    setTransferType('');
  };

  const disableTransactions = async () => {
    try {
      const req = await axiosClient.delete(
        `accounts/?id=${accounts?._id}&userId=${accounts?.userId}`
      );
      setTransactionStatusMessage(req.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const enableTransactions = async () => {
    try {
      const req = await axiosClient.patch(
        `accounts/?id=${accounts?._id}&userId=${accounts?.userId}`
      );
      setTransactionStatusMessage(req.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const disableCustomerAccess = async () => {
    const req = await axiosClient.delete(`users/${user._id}`)
    setCustomerStatusMessage(req.data.message)
  };

  useEffect(() => {
    allTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <Box marginLeft={'20px'}>
      <Heading>Administrator</Heading>
      <Box>
        <NavLink to={'/dashboard/transactionhistory'}>to Dashboard</NavLink>
      </Box>
      <Box>
        <Text
          fontSize={18}
          margin={'20px'}
          fontWeight={'bold'}
        >
          My Transactions
        </Text>
        <UnorderedList>
          {transactions.map((transaction, i) => {
            return (
              <ListItem
                mb={'10px'}
                key={i}
                display={'flex'}
                gap={4}
                alignItems={'center'}
              >
                <Text
                  w={'100px'}
                  overflowX={'scroll'}
                >
                  {transaction.recipientName}
                </Text>
                <Text
                  w={'100px'}
                  overflow={'scroll'}
                >
                  {transaction.recipientBank}
                </Text>
                <Text
                  w={'100px'}
                  overflowX={'scroll'}
                >
                  {transaction.amount}
                </Text>
                <Text
                  w={'100px'}
                  overflowX={'scroll'}
                >
                  {transaction.status}
                </Text>
                <Button
                  onClick={() => updateTransactionStatus(transaction._id)}
                >
                  update transaction
                </Button>
              </ListItem>
            );
          })}
        </UnorderedList>

        <Text
          fontSize={18}
          margin={'20px'}
          fontWeight={'bold'}
        >
          Crediting
        </Text>
        <Grid>
          <GridItem>
            <label htmlFor='acctype'>Account type</label>
            <input
              style={layoutStyle}
              id='acctype'
              type={'text'}
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              placeholder={'business/personal/premium'}
            />
          </GridItem>
          <GridItem>
            <label htmlFor='amount'>Amount</label>
            <input
              style={layoutStyle}
              id='amount'
              type={'number'}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={'1000'}
            />
          </GridItem>
          <GridItem>
            <label htmlFor='sender'>Sender Name</label>
            <input
              style={layoutStyle}
              id='sender'
              type={'text'}
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder={'John Doe'}
            />
          </GridItem>
          <GridItem>
            <label htmlFor='account'>Recipient Account</label>
            <input
              style={layoutStyle}
              id='account'
              type={'text'}
              value={recipientAccountNumber}
              onChange={(e) => setRecipientAccountNumber(e.target.value)}
              placeholder={'989482024'}
            />
          </GridItem>
          <GridItem>
            <label htmlFor='transferType'>Transfer Type</label>
            <input
              style={layoutStyle}
              id='transferType'
              type={'text'}
              value={transferType}
              onChange={(e) => setTransferType(e.target.value)}
              placeholder={'global/wire/instant'}
            />
          </GridItem>
          <GridItem>
            <label htmlFor='desc'>Description</label>
            <input
              style={layoutStyle}
              id='desc'
              type={'text'}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={'optional'}
            />
          </GridItem>
          <GridItem>
            <Button onClick={confirmTransaction}>Send</Button>
          </GridItem>
        </Grid>
        <Text
          fontSize={18}
          margin={'20px'}
          fontWeight={'bold'}
        >
          Transaction Access
        </Text>
        <Grid>
          <GridItem
            display={'flex'}
            alignItems={'center'}
            gap={4}
            mb={'10px'}
          >
            <Button onClick={enableTransactions}>Enable transactions</Button>
            <Text>{transactionStatusMessage}</Text>
          </GridItem>
          <GridItem
            display={'flex'}
            alignItems={'center'}
            gap={4}
            mb={'10px'}
          >
            <Button onClick={disableTransactions}>Disable transaction</Button>
          </GridItem>
        </Grid>
        <Text
          fontSize={18}
          margin={'20px'}
          fontWeight={'bold'}
        >
          Customer Access
        </Text>
        <Grid>
          <GridItem
            display={'flex'}
            alignItems={'center'}
            gap={4}
            mb={'10px'}
          >
            <Button onClick={disableCustomerAccess}>Deny login access</Button>
            <Text>{customerStatusMessage}</Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Admin;
