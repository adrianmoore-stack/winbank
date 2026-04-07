import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Account from '../account/Account';
import SubNavigation from '../account/SubNavigation';
import classes from '../navbar/Navbar.module.css';
import { Outlet } from 'react-router-dom';
import { context } from '../../store/store';

const Dashboard = () => {
  const { pathname } = useLocation();
  const pathName = pathname?.split('/')[1];
  const { storedUser } = useContext(context);
  const time = new Date().getHours();

  const greetTime = () => {
    if (time <= 11) return 'Goodmorning';
    if (time > 11 && time < 16) return 'Goodafternoon';
    if (time >= 16) return 'Goodevening';
  };

  return (
    <>
      <div className={classes.user}>
        <h2>
          {storedUser
            ? `${greetTime()} ${storedUser.name.split(' ')[0]}`
            : 'Loading data'}
        </h2>
        <p>
          Check all your activities with our quick online bank. Create your new
          way of management
        </p>
      </div>
      <Account pathName={pathName} />
      <SubNavigation
        args={['Transaction history', 'Loan history']} // add Account statement
      />
      <Outlet />
    </>
  );
};

export default Dashboard;
