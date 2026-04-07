import {
  Avatar,
  Table,
  TableContainer,
  Tbody,
  Th,
  Td,
  Thead,
  HStack,
  Tr,
  Text,
  Button,
  Grid,
  GridItem,
  TableCaption,
  Box,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import sent from '../Assets/send.svg';
import pending from '../Assets/pending.svg';
import receive from '../Assets/receive.svg';

const TransTable = ({
  transaction,
  currentPageData,
  pageDataEnd,
  totalData,
  setPageNumber,
  numberOfPages,
  pageNumber,
}) => {
  return (
    <TableContainer
      mt={'24px'}
      display={{ base: 'none', md: 'block' }}
    >
      {transaction ? (
        <Table
          size={'sm'}
          variant={'simple'}
          bg='white'
        >
          <Thead height={'52px'}>
            <Tr>
              <Th>Transaction type</Th>
              <Th>Transaction details</Th>
              <Th textAlign={'end'}>Amount</Th>
              <Th textAlign={'end'}>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transaction.map((trans, i) => {
              return (
                <Tr key={i}>
                  <Td>
                    <HStack gap={2}>
                      <Avatar
                        size='sm'
                        name={trans.transactionType}
                        src={
                          trans.status === 'successful' &&
                          trans.transactionType === 'debit'
                            ? sent
                            : trans.status === 'successful' &&
                              trans.transactionType === 'credit'
                            ? receive
                            : pending
                        }
                      />
                      <Text
                        sx={{
                          fontWeight: 700,
                          color: '#1B1E21',
                        }}
                      >
                        {trans.transactionType}
                        <span
                          style={{ color: '#A3A7AB', fontWeight: 400 }}
                        >{`(${trans.transferType})`}</span>
                      </Text>
                    </HStack>
                  </Td>
                  <Td>
                    <Box color={'#4B525A'}>
                      <Text as={'span'} fontWeight={500}>{`${trans.transactionId}`}</Text> {''}
                      {trans.description.substring(0, 30)}...
                    </Box>
                  </Td>
                  <Td
                    color={
                      trans.status === 'pending'
                        ? '#1B1E21'
                        : trans.transactionType === 'debit'
                        ? '#EF2020'
                        : trans.transactionType === 'credit'
                        ? '#1DD435'
                        : ''
                    }
                    isNumeric
                  >
                    {trans.amount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </Td>
                  <Td isNumeric>
                    {
                      new Date(trans.transactionDate)
                        .toLocaleString('en-US')
                        .split(', ')[0]
                    }
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
          <TableCaption
            pt={'15px'}
            mt={0}
            bg={'white'}
            h={'84px'}
          >
            <Grid
              templateColumns='repeat(7, 1fr)'
              gap={4}
              w='100%'
              alignItems={'center'}
            >
              <GridItem colSpan={5}>
                <Text
                  textAlign={'start'}
                  fontWeight={400}
                  fontSize='14px'
                  color={'#717171'}
                >
                  {transaction
                    ? `Showing results for ${currentPageData + 1}-${
                        pageDataEnd > totalData ? totalData : pageDataEnd
                      } of ${totalData}`
                    : ''}
                </Text>
              </GridItem>
              <GridItem colSpan={2}>
                <HStack
                  gap={8}
                  visibility={numberOfPages > 1 ? 'visible' : 'hidden'}
                >
                  <Button
                    border={'1px solid #A3A7AB'}
                    borderRadius='5px'
                    bg={'#FFF'}
                    isDisabled={pageNumber === 1}
                    leftIcon={<ArrowBackIcon />}
                    onClick={() => setPageNumber((prev) => prev - 1)}
                  >
                    Previous
                  </Button>
                  <Button
                    border={'1px solid #A3A7AB'}
                    borderRadius='5px'
                    bg={'#FFF'}
                    isDisabled={pageNumber === numberOfPages}
                    rightIcon={<ArrowForwardIcon />}
                    onClick={() => setPageNumber((prev) => prev + 1)}
                  >
                    Next
                  </Button>
                </HStack>
              </GridItem>
            </Grid>
          </TableCaption>
        </Table>
      ) : (
        'No records found'
      )}
    </TableContainer>
  );
};

export default TransTable;
