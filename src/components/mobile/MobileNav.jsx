import { NavLink, useLocation } from 'react-router-dom';
import classes from './MobileNav.module.css';
import {
  BitcoinConvert,
  Briefcase,
  EmptyWallet,
  Home,
  Profile2User,
} from 'iconsax-react';

const MobileNav = ({ p, display }) => {
  const { pathname } = useLocation();
  const pathName = pathname.split('/')[1];

  return (
    <ul
      className={classes.list}
      style={{ padding: p }}
      onClick={() => {
        if (!display) return;
        display();
      }}
    >
      <li className={classes.link}>
        <NavLink
          className={pathName === 'dashboard' ? classes.active : ''}
          to="/dashboard/transactionhistory"
        >
          <Home />
          Dashboard
        </NavLink>
      </li>
      <li className={classes.link}>
        <NavLink
          className={pathName === 'accounts' ? classes.active : ''}
          to="/accounts/transactionhistory"
        >
          <EmptyWallet />
          Accounts
        </NavLink>
      </li>
      <li className={classes.link}>
        <NavLink
          className={pathName === 'pay&transfer' ? classes.active : ''}
          to="/pay&transfer/wiretransfer"
        >
          <BitcoinConvert />
          Pay & Transfer
        </NavLink>
      </li>
      <li className={classes.link}>
        <NavLink
          className={pathName === 'myPayees' ? classes.active : ''}
          to="/myPayees"
        >
          <Profile2User />
          My Payees
        </NavLink>
      </li>
      <li className={classes.link}>
        <NavLink
          className={pathName === 'investments' ? classes.active : ''}
          to="/investments/active"
        >
          <Briefcase />
          Investments
        </NavLink>
      </li>
    </ul>
  );
};

export default MobileNav;
