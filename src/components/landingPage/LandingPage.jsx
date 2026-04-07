import { useEffect } from 'react';
import Footer from '../UI/Footer';
import Atms from './Atms';
import LandingMain from './LandingMain';
import LandingNav from './LandingNav';
import Main2 from './Main2';
import Notes from './Note';
import Services from './Services';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    if (token) navigate('/dashboard/transactionhistory', { replace: true });
  }, [navigate, token]);

  return (
    <>
      <LandingNav />
      <LandingMain />
      <Services />
      <Main2 />
      <Atms />
      <Notes />
      <Footer />
    </>
  );
};

export default LandingPage;
