import Account from '../account/Account';
import SubNavigation from '../account/SubNavigation';
import classes from '../navbar/Navbar.module.css';
import { Outlet, useLocation } from 'react-router-dom';

const Accounts = () => {
  const { pathname } = useLocation();
  const pathName = pathname?.split('/')[1];

  return (
    <>
      <div className={classes.user}>
        <h2>My Accounts</h2>
      </div>
      <Account pathName={pathName} />
      <SubNavigation
        args={['Transaction history', 'Loan history']} // add Account statement
      />
      <Outlet />
    </>
  );
};

export default Accounts;
