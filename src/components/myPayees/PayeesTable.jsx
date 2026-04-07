import {
  Text,
  Button,
  Grid,
  GridItem,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  HStack,
  TableCaption,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { Send2, Trash } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';

const PayeesTable = ({
  payees,
  deleteModalHandler,
  currentPageData,
  pageDataEnd,
  totalData,
  pageNumber,
  numberOfPages,
  setPageNumber,
}) => {
  const navigate = useNavigate();

  return (
    <TableContainer mt={'24px'} display={{ base: 'none', md: 'block' }}>
      <Table size={'sm'} variant={'simple'} bg="white">
        <Thead h={'52px'}>
          <Tr>
            <Th
              w={'200px'}
              maxW={'300px'}
              fontSize={'14px'}
              color={'#1B1E21'}
              textTransform={'none'}
            >
              <Text>Full name</Text>
            </Th>
            <Th
              w={'200px'}
              maxW={'300px'}
              fontSize={'14px'}
              color={'#1B1E21'}
              textTransform={'none'}
            >
              <Text>Bank Name</Text>
            </Th>
            <Th fontSize={'14px'} color={'#1B1E21'} textTransform={'none'}>
              <Text>Account number</Text>
            </Th>
            <Th
              fontSize={'14px'}
              textAlign={'start'}
              color={'#1B1E21'}
              textTransform={'none'}
            >
              <Text>Type</Text>
            </Th>
            <Th
              fontSize={'14px'}
              textAlign={'end'}
              color={'#1B1E21'}
              textTransform={'none'}
            >
              <Text>Created at</Text>
            </Th>
            <Th
              textAlign={'center'}
              fontSize={'14px'}
              color={'#1B1E21'}
              textTransform={'none'}
            >
              <Text>Actions</Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {payees.map((payee) => {
            return (
              <Tr key={payee._id}>
                <Td>{payee.name}</Td>
                <Td>{payee.bankName}</Td>
                <Td textAlign={'center'}>{payee.accountNumber}</Td>
                <Td textAlign={'center'}>
                  <Text
                    bg={'#F0F0F1'}
                    w={'fit-content'}
                    fontSize={'14px'}
                    px={'8px'}
                    py={'8px'}
                    color={'#1B1E21'}
                    borderRadius={'15px'}
                  >
                    {payee.transferType}
                  </Text>
                </Td>
                <Td isNumeric>
                  {
                    new Date(payee.createdAt)
                      .toLocaleString('en-US')
                      .split(', ')[0]
                  }
                </Td>
                <Td>
                  <HStack gap={0} justifyContent={'flex-end'}>
                    <Button
                      bg={'#FFF'}
                      onClick={() => {
                        localStorage.setItem(
                          'beneficiary',
                          JSON.stringify(payee)
                        );
                        navigate(
                          `/pay&transfer/${payee.transferType}transfer/initializetransaction`
                        );
                      }}
                    >
                      <Send2 width={'18px'} height={'18px'} />
                    </Button>
                    <Button
                      bg={'#FFF'}
                      onClick={() => {
                        localStorage.setItem('beneficiaryId', payee._id);
                        deleteModalHandler((prev) => !prev);
                      }}
                    >
                      <Trash width={'18px'} height={'18px'} color="#F03737" />
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
        <TableCaption pt={'15px'} mt={0} bg={'white'} h={'84px'}>
          <Grid
            templateColumns="repeat(7, 1fr)"
            gap={4}
            w="100%"
            alignItems={'center'}
          >
            <GridItem colSpan={5}>
              <Text
                textAlign={'start'}
                fontWeight={400}
                fontSize="14px"
                color={'#717171'}
              >
                {/* Showing result for 1-10 of 20 */}
                {`Showing results for ${currentPageData + 1}-${
                  pageDataEnd > totalData ? totalData : pageDataEnd
                } of ${totalData}`}
              </Text>
            </GridItem>
            <GridItem colSpan={2}>
              <HStack
                gap={8}
                visibility={numberOfPages > 1 ? 'visible' : 'hidden'}
              >
                <Button
                  border={'1px solid #A3A7AB'}
                  borderRadius="5px"
                  bg={'#FFF'}
                  isDisabled={pageNumber === 1}
                  leftIcon={<ArrowBackIcon />}
                  onClick={() => setPageNumber((prev) => prev - 1)}
                >
                  Previous
                </Button>
                <Button
                  border={'1px solid #A3A7AB'}
                  borderRadius="5px"
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
    </TableContainer>
  );
};

export default PayeesTable;
