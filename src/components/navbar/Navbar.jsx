import { useContext, useState } from 'react';
import hamburger from '../Assets/hamburger.svg';
import { Avatar } from '@chakra-ui/react';
import { Backdrop } from '../mobile/MenuLayout';
import classes from './Navbar.module.css';
import notification from '../Assets/notification.svg';
import logo from '../Assets/logo.svg';
import Notification from '../UI/Notifications';
import { context } from '../../store/store';

const Navbar = ({ display }) => {
  const [showNotification, setShowNotification] = useState(false);
  const { storedUser } = useContext(context);

  return (
    <>
      {showNotification && <Backdrop />}
      {showNotification && (
        <Notification toggleNotification={setShowNotification} />
      )}
      <header className={classes.container}>
        <nav className={classes.nav}>
          <header className={classes.header}>
            <div className={classes.logoLayout}>
              <img src={logo} alt="logo" />
            </div>
            <div className={classes.logoLayout}>
              <h1>Wincres </h1>
            </div>
          </header>
          <section className={classes['nav-section']}>
            <div className={classes.notif}>
              <img
                onClick={() => setShowNotification((prev) => !prev)}
                src={notification}
                alt="notification icon"
              />
            </div>
            <div className={classes.hamburger}>
              <img
                width={'100%'}
                height={'100%'}
                onClick={() => display()}
                src={hamburger}
                alt="menu logo"
              />
            </div>
            <Avatar
              size={'sm'}
              display={{ base: 'none', md: 'flex' }}
              name={
                storedUser
                  ? `${storedUser.name.split(' ')[0]} ${
                      storedUser.name.split(' ')[1]
                    }`
                  : ''
              }
              src={
                storedUser
                  ? `https://wincrest.onrender.com/img/${storedUser.photo}`
                  : ''
              }
            />
          </section>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
