import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import SubNavigation from '../account/SubNavigation';
import classes from '../pay&transfer/Pay&transfer.module.css';
import { Icon, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { ArrowBackIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { context } from '../../store/store';

const PayeeDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const rootpath = pathname.split('/')[1];
  const pathName = pathname.split('/')[3];
  const { storedUser, addBeneficiary } = useContext(context);

  return (
    <>
      <UnorderedList display={'flex'} ml={0} gap={2}>
        <ListItem
          display={{ base: 'flex', md: 'none' }}
          alignItems={'center'}
          listStyleType={'none'}
        >
          <Icon
            w="20px"
            h="20px"
            onClick={() => navigate('/mypayees')}
            as={ArrowBackIcon}
          />
        </ListItem>
        <ListItem
          display={{ base: 'none', md: 'flex' }}
          listStyleType={'none'}
          alignItems={'center'}
        >
          <Link to={'/mypayees'} m={0} as={NavLink}>
            My payees
          </Link>
        </ListItem>
        <ListItem
          display={{ base: 'none', md: 'flex' }}
          alignItems={'center'}
          listStyleType={'none'}
        >
          <Icon w="20px" h="20px" as={ChevronRightIcon} />
        </ListItem>
        <ListItem display={'flex'} alignItems={'center'} listStyleType={'none'}>
          <Text color={'#0F1011'} fontWeight={700} fontSize={'14px'}>
            Add a payee
          </Text>
        </ListItem>
      </UnorderedList>
      <SubNavigation
        className={classes.radius}
        args={['Wire Transfer', 'Global Transfer']}
      />
      <Outlet context={{ pathName, rootpath, storedUser, addBeneficiary }} />
    </>
  );
};

export default PayeeDetails;
