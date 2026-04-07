import { Avatar, Box, Card, CardBody, Flex, HStack, Text } from '@chakra-ui/react';
import sent from '../Assets/send.svg';
import pending from '../Assets/pending.svg';
import receive from '../Assets/receive.svg';

const Transcard = ({ transaction }) => {
  return (
    <Card
      // key={transaction.id}
      boxShadow={'none'}
      mb={'12px'}
      py={'20px'}
      px={'16px'}
    >
      <HStack>
        <Avatar
          size='md'
          name={transaction.type}
          src={
            transaction.status === 'pending'
              ? pending
              : transaction.transactionType === 'credit'
              ? receive
              : transaction.transactionType === 'debit'
              ? sent
              : ''
          }
        />
        <CardBody w={'200px'}>
          <Text
            sx={{
              fontWeight: 700,
              color: '#1B1E21',
            }}
          >
            {transaction.transactionType}{' '}
            <span
              style={{ color: '#A3A7AB', fontWeight: 400 }}
            >{`(${transaction.transferType})`}</span>
          </Text>
          {/* <Text color={'#4B525A'}>{`${
            transaction.transactionId
          } ${transaction.description.substring(0, 30)}...`}</Text> */}
          <Box color={'#4B525A'}>
            <Text
              as={'span'}
              fontWeight={500}
            >{`${transaction.transactionId}`}</Text>{' '}
            {''}
            {transaction.description.substring(0, 30)}...
          </Box>
        </CardBody>
        <Flex
          flexDirection={'column'}
          alignItems={'flex-end'}
        >
          <Text
            fontWeight={'700'}
            fontSize='14px'
            lineHeight={'20px'}
            color={
              transaction.status === 'pending'
                ? '#1B1E21'
                : transaction.transactionType === 'debit'
                ? '#EF2020'
                : transaction.transactionType === 'credit'
                ? '#1DD435'
                : ''
            }
          >
            {transaction.amount.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
          <Text
            fontSize='14px'
            lineHeight='20px'
            color={'#4B525A'}
          >
            {
              new Date(transaction.transactionDate)
                .toLocaleString('en-US')
                .split(', ')[0]
            }
          </Text>
        </Flex>
      </HStack>
    </Card>
  );
};

export default Transcard;
