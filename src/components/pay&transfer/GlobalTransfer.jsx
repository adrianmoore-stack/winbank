import { useState, useContext } from 'react';
import {
  Text,
  Grid,
  HStack,
  Box,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Status from '../UI/Status';
import Cards from '../UI/Cards';
import Wrapper, { BigCard1, BigCard2 } from '../UI/BigCard';
import classes from './Pay&transfer.module.css';
import share from '../Assets/share.svg';
import { Outlet, useLocation } from 'react-router-dom';
import { EmptyWallet } from 'iconsax-react';
import { context } from '../../store/store';

const GlobalTransfer = () => {
  const {
    storedUser,
    addBeneficiary,
    makeTransfer,
    logoutHandler,
    sendOTP,
    loadingToken,
  } = useContext(context);
  const [acctype, setAcctype] = useState(0);
  const { pathname } = useLocation();
  const pathName = pathname.split('/')[2];

  const accounts = JSON.parse(localStorage.getItem('accounts'));

  return (
    <>
      <Wrapper>
        <BigCard1 className={classes.newBalance}>
          <Grid templateColumns={'1fr 1fr'}>
            <Text fontWeight={700} fontSize={'14px'}>
              {storedUser?.name}
            </Text>
            <HStack
              pr={{ base: '24px', md: '40px' }}
              justifyContent={'end'}
              gap={2}
            >
              <EmptyWallet color="#0052CC" />
              <Text fontSize={'14px'}>{`$${accounts?.accountDetails[
                acctype
              ].accountBalance.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}</Text>
            </HStack>
          </Grid>
          <HStack mt={'30px'} gap={2}>
            <Box w={'48px'} h={'48px'}>
              <Image w={'100%'} h={'100%'} src={share} alt="send icon" />
            </Box>
            <Text fontWeight={700} fontSize={{ base: '24px', md: '40px' }}>
              Global Transfer
            </Text>
          </HStack>
        </BigCard1>
        <BigCard2 className={classes.newType}>
          <HStack>
            <Status
              bh={'28px'}
              mh={'28px'}
              color={accounts?.status === 'active' ? '#1DD435' : 'red'}
            >
              {accounts?.status}
            </Status>
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
                    }}
                  >
                    {`${account?.accountType} checking`}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </HStack>
          <Box mt={'16px'}>
            <Text>{`****${accounts?.accountDetails[acctype].accountNumber
              .toString()
              .slice(6)} (${
              accounts?.accountDetails[acctype].accountType
            })`}</Text>
          </Box>
        </BigCard2>
      </Wrapper>
      <Flex gap={{ base: 0, md: 4 }} w={'100%'} mt={'40px'}>
        <Cards number={'1'} isChecked={true}>
          Add a payee
        </Cards>
        <Cards number={'2'} isChecked={false}>
          Initialize transaction
        </Cards>
        <Cards number={'3'} isChecked={false}>
          Get transaction status
        </Cards>
      </Flex>
      <Outlet
        context={{
          pathName,
          accounts,
          acctype,
          sendOTP,
          loadingToken,
          addBeneficiary,
          makeTransfer,
          logoutHandler,
        }}
      />
    </>
  );
};

export default GlobalTransfer;
