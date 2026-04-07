import { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import classes from './MainLayout.module.css';
import MenuLayout from '../mobile/MenuLayout';
import Sidebar from '../sidebar/Sidebar';
import LoadingAnimation from './LoadingAnimation';
import { context } from '../../store/store';
import Footer from './Footer';

const MainLayout = () => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');
  const { isLoading } = useContext(context);

  useEffect(() => {
    if (!token) return navigate('/', { replace: true });
  }, [navigate, token]);

  const menuDisplay = () => {
    setDisplay((prev) => !prev);
  };

  return (
    // main layout
    <>
      <main className={classes.mainContainer}>
        {isLoading && <LoadingAnimation />}
        {display && <MenuLayout display={menuDisplay} />}
        <section className={classes.sidebar}>
          <Sidebar />
        </section>
        <section className={classes.main}>
          <Outlet context={menuDisplay} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
