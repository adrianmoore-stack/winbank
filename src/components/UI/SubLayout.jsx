import { Outlet, useOutletContext } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const SubLayout = () => {
  const menuDisplay = useOutletContext();
  return (
    <>
      <Navbar display={menuDisplay} />
      <Outlet />
    </>
  );
};

export default SubLayout;
