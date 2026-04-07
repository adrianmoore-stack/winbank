import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import classes from './Account.module.css';
import eye from '../Assets/eye.svg';
import money from '../Assets/money.svg';
import { useCallback, useContext, useEffect, useState } from 'react';
import AccountDetails from './AccountDetails';
import { Backdrop } from '../mobile/MenuLayout';
import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons';
import Wrapper, { BigCard1, BigCard2 } from '../UI/BigCard';
import { context } from '../../store/store';
import { EmptyWallet, Send } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';

const Account = ({ pathName }) => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  const [acctype, setAcctype] = useState(0);
  const {
    transactionDataAll,
    transactionData,
    dashboardData,
    setPageNumber,
    logoutHandler,
    storedUser,
  } = useContext(context);

  const accounts = JSON.parse(localStorage.getItem('accounts'));

  const loadDashboardData = useCallback(async () => {
    await dashboardData();
  }, [dashboardData]);

  const loadTransactionDataAll = async () => {
    if (pathName !== 'dashboard') return;
    await transactionDataAll();
  };
  const loadTransactionData = async (val) => {
    if (pathName !== 'accounts') return;
    await transactionData(val);
  };

  useEffect(() => {
    const loadAll = async () => {
      try {
        await Promise.all([
          loadDashboardData(),
          loadTransactionDataAll(),
          loadTransactionData(accounts?.accountDetails[acctype]?.accountType),
        ]);
      } catch (error) {
        if (error) {
          if (error.message === '401') {
            logoutHandler(navigate);
          }
        }
      }
    };
    loadAll();
    setPageNumber(1);
    // eslint-disable-next-line
  }, [acctype]);

  const closeModal = () => {
    setShowDetails((prev) => !prev);
  };

  const accountTotal = (a, b) => a + b;

  return (
    <Wrapper>
      {showDetails && (
        <AccountDetails
          phoneNumber={storedUser.phone}
          accounts={accounts.accountDetails[acctype]}
          closeModal={closeModal}
        />
      )}
      {showDetails && <Backdrop />}
      <BigCard1 className={classes.newBalance}>
        <div className={classes['account-layout']}>
          <div className={classes['grid-item1']}>
            <p>
              {pathName === 'dashboard' ? `Total Balance` : `Current Balance`}
            </p>
            <HStack spacing={4} mt="10px">
              <Avatar
                color={'#0052CC'}
                bg={'#F4F6F7'}
                icon={
                  pathName === 'dashboard' ? (
                    <Box transform={'rotate(-45deg)'}>
                      <Send />
                    </Box>
                  ) : (
                    <EmptyWallet />
                  )
                }
              />
              <h5 className={classes.total}>
                {pathName === 'dashboard'
                  ? accounts?.accountDetails?.length > 0
                    ? accounts?.accountDetails
                        .map((account) => account.accountBalance)
                        .reduce(accountTotal)
                        .toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                    : 'Loading Balance'
                  : accounts?.accountDetails?.length > 0
                  ? accounts?.accountDetails[
                      acctype
                    ]?.accountBalance.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : 'Loading Balance'}
              </h5>
              <div>USD</div>
            </HStack>
          </div>
          <button
            onClick={() => setShowDetails((prev) => !prev)}
            className={classes.view}
          >
            <HStack justifyContent={'center'}>
              <img src={eye} alt="view icon" />
              <p>View details</p>
            </HStack>
          </button>
        </div>
      </BigCard1>
      <BigCard2 className={classes.newType}>
        <p>{pathName === 'dashboard' ? 'Account summary' : 'Account type'}</p>
        <HStack spacing={4} mt="10px">
          <Image src={money} alt="money icon" />
          {pathName === 'dashboard' ? (
            <p className={classes['account-type']}>All accounts data</p>
          ) : (
            <>
              <div>
                <p className={classes['account-type']}>
                  {accounts?.accountDetails?.length > 0
                    ? `${accounts?.accountDetails[acctype].accountType} checking`
                    : 'Loading account data'}
                </p>
                <p className={classes['account-number']}>
                  {accounts?.accountDetails[acctype]?.accountNumber
                    ? `****${accounts.accountDetails[acctype]?.accountNumber
                        .toString()
                        .slice(6)}`
                    : 'account not found'}
                </p>
              </div>
              <Menu>
                <MenuButton
                  w={'50px'}
                  h={'35px'}
                  borderRadius={'50px'}
                  as={IconButton}
                  icon={<ChevronDownIcon w={'25px'} h={'25px'} />}
                />
                <MenuList>
                  {accounts?.accountDetails.map((account, i) => (
                    <MenuItem
                      key={i}
                      h={'45px'}
                      bg={acctype === i ? '#F4F5F7' : 'transparent'}
                      borderBottom={'1px solid #F4F5F7'}
                      fontSize={'14px'}
                      fontWeight={acctype === i ? 700 : 400}
                      lineHeight={'20px'}
                      onClick={() => {
                        setAcctype(i);
                        localStorage.setItem(
                          'accountType',
                          accounts.accountDetails[i].accountType
                        );
                      }}
                    >
                      {`${account.accountType} checking`}
                    </MenuItem>
                  ))}
                  <MenuItem
                    as={Button}
                    w={'90%'}
                    mt={'10px'}
                    mx={'auto'}
                    bg={'#F2F1F9'}
                    border="1px solid #0052CC"
                    color={'#0052CC'}
                    borderRadius={'4px'}
                    leftIcon={<AddIcon />}
                  >
                    <Text>New account</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          )}
        </HStack>
      </BigCard2>
    </Wrapper>
  );
};

export default Account;
