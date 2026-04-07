import { Text, Button, Grid, GridItem, Box } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import PayeesTable from './PayeesTable';
import PayeesMobile from './PayeesMobile';
import TransactionNav from '../account/TransactionNav';
import { Backdrop } from '../mobile/MenuLayout';
import { useContext, useEffect, useState } from 'react';
import ConfirmDelete from '../UI/ConfirmDelete';
import { useNavigate } from 'react-router-dom';
import { context } from '../../store/store';

const MyPayees = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const {
    getBeneficiary,
    deleteBeneficiary,
    payeesList,
    setPageNumber,
    pageNumber,
    currentPageData,
    logoutHandler,
    pageDataEnd,
    transferToPayee,
  } = useContext(context);

  const payeesLists = payeesList?.slice(currentPageData, pageDataEnd);

  const totalData = payeesList?.length;

  const numberOfPages = Math.ceil(payeesList?.length / 10);

  const navigate = useNavigate();

  useEffect(() => {
    const loadBeneficiaries = async () => {
      setPageNumber(1);
      try {
        await getBeneficiary();
      } catch (error) {
        if (error) {
          if (error.message === '401') {
            logoutHandler(navigate);
          }
        }
      }
    };

    loadBeneficiaries();
    //eslint-disable-next-line
  }, []);

  const deleteBeneficiaryHandler = async (id) => {
    try {
      setDeleteModal(false)
      await deleteBeneficiary(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {deleteModal && <Backdrop />}
      {deleteModal && (
        <ConfirmDelete
          deleteBeneficiaryHandler={deleteBeneficiaryHandler}
          toggleDeleteHandler={setDeleteModal}
        />
      )}
      <Grid
        templateColumns={'1fr 1fr'}
        h={'56px'}
        fontSize={'32px'}
        fontWeight={700}
        mt={{ base: '36px', md: '30px' }}
      >
        <GridItem>
          <Text>My Payees</Text>
        </GridItem>
        <GridItem h={'100%'} textAlign={'end'}>
          <Button
            bg={'#0052CC'}
            h={'100%'}
            borderRadius={'8px'}
            p={'16px 24px'}
            color="#FFF"
            leftIcon={<AddIcon />}
            onClick={() => navigate('payeedetails/wiretransfer')}
          >
            New payee
          </Button>
        </GridItem>
      </Grid>
      <Box mt="24px" display={{ base: 'block', md: 'none' }}>
        {payeesLists.map((payee) => (
          <PayeesMobile
            key={payee._id}
            payee={payee}
            deleteModalHandler={setDeleteModal}
            transferToPayee={transferToPayee}
          />
        ))}
        <TransactionNav
          setPageNumber={setPageNumber}
          numberOfPages={numberOfPages}
          pageNumber={pageNumber}
        >
          {`Showing results for ${currentPageData + 1}-${
            pageDataEnd > totalData ? totalData : pageDataEnd
          } of ${totalData}`}
        </TransactionNav>
      </Box>
      <PayeesTable
        transferToPayee={transferToPayee}
        payees={payeesLists}
        setPageNumber={setPageNumber}
        numberOfPages={numberOfPages}
        pageNumber={pageNumber}
        totalData={totalData}
        pageDataEnd={pageDataEnd}
        currentPageData={currentPageData}
        deleteModalHandler={setDeleteModal}
      />
    </>
  );
};

export default MyPayees;
