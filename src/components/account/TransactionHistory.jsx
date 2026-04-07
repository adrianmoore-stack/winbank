import { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import Transcard from './Transcard';
import TransTable from './TransTable';
import TransactionNav from './TransactionNav';
import { context } from '../../store/store';
import { useLocation } from 'react-router-dom';

const TransactionHistory = () => {
  const {
    dashboardHistory,
    accountHistory,
    pageNumber,
    setPageNumber,
    currentPageData,
    pageDataEnd,
  } = useContext(context);

  const { pathname } = useLocation();
  const pathName = pathname?.split('/')[1];

  const transHistory =
    pathName === 'dashboard'
      ? dashboardHistory?.slice(currentPageData, pageDataEnd)
      : accountHistory?.slice(currentPageData, pageDataEnd);

  const totalData =
    pathName === 'dashboard'
      ? dashboardHistory?.length
      : accountHistory?.length;

  const numberOfPages =
    pathName === 'dashboard'
      ? Math.ceil(dashboardHistory?.length / 10)
      : Math.ceil(accountHistory?.length / 10);

  return (
    <>
      <Box mt={'24px'} display={{ md: 'none' }}>
        {transHistory.map((dashhistory, i) => {
          return <Transcard key={i} transaction={dashhistory} />;
        })}
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
      <TransTable
        transaction={transHistory}
        setPageNumber={setPageNumber}
        numberOfPages={numberOfPages}
        pageNumber={pageNumber}
        totalData={totalData}
        pageDataEnd={pageDataEnd}
        currentPageData={currentPageData}
      />
    </>
  );
};

export default TransactionHistory;
