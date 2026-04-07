import { createContext, useState, useEffect } from 'react';
import useValidation from '../hooks/use-Validation';
import axiosClient from '../utils/axiosClient';

export const context = createContext({
  emailInput: () => {},
  passwordInput: () => {},
  dashboardData: () => {},
  logoutHandler: () => {},
  transactionDataAll: () => {},
  transactionData: () => {},
  makeTransfer: () => {},
  addBeneficiary: () => {},
  getBeneficiary: () => {},
  updateMe: () => {},
  updatePassword: () => {},
  sendOTP: () => {},
  deleteBeneficiary: () => {},
});

const ContextProvider = ({ children }) => {
  /////// LOGIN DATA AND VALIDATION //////
  const [formIsValid, setFormIsValid] = useState(false);
  const email = useValidation(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const password = useValidation(/^(?=.*\d).{8,}$/);

  const { inputState: emailState, dispatchInput: dispatchEmail } = email;
  const { inputState: passwordState, dispatchInput: dispatchPassword } =
    password;

  useEffect(() => {
    if (emailState.isValid && passwordState.isValid) setFormIsValid(true);
    else {
      setFormIsValid(false);
    }
  }, [emailState.isValid, passwordState.isValid]);

  //////////////////////////////////////////////////////

  const [accounts, setAccounts] = useState([]);
  const [dashboardHistory, setDashboardHistory] = useState([]);
  const [accountHistory, setAccountHistory] = useState([]);
  const [payeesList, setPayeesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingToken, setLoadingToken] = useState(false);
  const [error, setError] = useState('');

  const clearData = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    localStorage.removeItem('accounts');
    localStorage.removeItem('beneficiary');
    localStorage.removeItem('accountType');
    localStorage.removeItem('successTransaction');
    localStorage.removeItem('transData');
  };

  //////////////////// SIGN IN ///////////////////////
  const emailInput = (val) => {
    dispatchEmail({ type: 'EMAIL_INPUT', val: val });
  };
  const passwordInput = (val) => {
    dispatchPassword({ type: 'PASSWORD_INPUT', val: val });
  };
  const loginHandler = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await axiosClient.post('/users/login', {
        email: emailState.value,
        password: passwordState.value,
      });
      dispatchEmail({ type: 'EMAIL_INPUT', val: '' });
      dispatchPassword({ type: 'PASSWORD_INPUT', val: '' });
      setFormIsValid(false);
      if (response?.data?.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
        localStorage.setItem('accessToken', response?.data?.accessToken);
      }
      return response;
    } catch (error) {
      setError(error?.response?.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const storedUser = JSON.parse(localStorage.getItem('user'));

  // SIGN OUT
  const logoutHandler = async (navigate) => {
    try {
      await axiosClient.get('/users/logout');
      navigate('/', { replace: true });
      setError('')
      clearData();
    } catch (error) {}
  };

  ///// GENERATE OTP
  const sendOTP = async () => {
    setLoadingToken(true);
    try {
      const response = await axiosClient.get('/users/otp');
      return response;
    } catch (error) {
      console.log(error);
      if (error.response.status === 424) {
        throw Error(
          'Token could not be generated at this time please try again later'
        );
      }
    } finally {
      setLoadingToken(false);
    }
  };

  /////////////// DASHBOARD ///////////
  // ACCOUNT DATA
  const dashboardData = async () => {
    setIsLoading(true);
    try {
      const response = await axiosClient.get(
        `/accounts/?userId=${storedUser?._id}`
      );
      localStorage.setItem(
        'accounts',
        JSON.stringify(response.data.data.accounts)
      );
      setAccounts(response.data.data?.accounts);
    } catch (error) {
      if (error.response.status === 401) {
        throw Error('401');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // TRANSACTION HISTORY
  const transactionDataAll = async () => {
    setIsLoading(true);
    try {
      const response = await axiosClient.get(
        `/transactions/?userId=${storedUser?._id}`
      );
      setDashboardHistory(response.data?.data?.transactions);
    } catch (error) {
      if (error.response.status === 401) {
        throw Error('401');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const transactionData = async (val) => {
    setIsLoading(true);
    try {
      const response = await axiosClient.get(
        `/transactions/?userId=${storedUser._id}&accountType=${
          val ? val : 'business'
        }`
      );
      setAccountHistory(response?.data.data.transactions);
    } catch (error) {
      if (error.response.status === 401) {
        throw Error('401');
      }
    } finally {
      setIsLoading(false);
    }
  };

  ///////// MAKE TRANSACTION ////////////
  const makeTransfer = async (data) => {
    setIsLoading(true);
    try {
      const response = await axiosClient.post('/transactions', data);
      return response.data.data;
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
      const response = await axiosClient.get(
        `/accounts/?userId=${storedUser?._id}`
      );
      localStorage.setItem(
        'accounts',
        JSON.stringify(response.data.data.accounts)
      );
    }
  };

  /////////// SAVE BENEFICIARY ///////////////
  const addBeneficiary = async (data) => {
    setIsLoading(true);
    try {
      const response = await axiosClient.post('/beneficiaries', data);
      localStorage.setItem(
        'beneficiary',
        JSON.stringify(response.data.data.beneficiary)
      );
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // GET BENEFICIARY
  const getBeneficiary = async () => {
    setIsLoading(true);
    try {
      const response = await axiosClient.get(
        `/beneficiaries/?userId=${storedUser._id}`
      );
      setPayeesList(response.data?.data.beneficiaries);
      return response;
    } catch (error) {
      if (error.response.status === 401) {
        throw Error('401');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // DELETE BENEFICIARY
  const deleteBeneficiary = async (id) => {
    setIsLoading(true);
    try {
      await axiosClient.delete(`/beneficiaries/${id}`);
    } catch (error) {
      console.error(error.message);
    } finally {
      localStorage.removeItem('beneficiaryId');
      setIsLoading(false);
      await getBeneficiary();
    }
  };

  // UPDATE ME
  const updateMe = async (val) => {
    setIsLoading(true);
    try {
      const response = await axiosClient.patch(`/users/updateMe`, val);
      localStorage.setItem('user', JSON.stringify(response.data.data));
      return response.data.data;
    } catch (error) {
      if (error.response.status === 401) {
        throw Error('401');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // UPDATE PASSWORD
  const updatePassword = async (val) => {
    setIsLoading(true);
    try {
      const response = await axiosClient.patch(`/users/updatePassword`, val);
      return response.data.data;
    } catch (error) {
      if (error.response.status === 401) {
        throw Error('401');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // PAGINATION
  const [pageNumber, setPageNumber] = useState(1);
  const currentPageData = (pageNumber - 1) * 10;
  const pageDataEnd = pageNumber * 10;

  return (
    <context.Provider
      value={{
        accounts,
        storedUser,
        error,
        updateMe,
        loadingToken,
        updatePassword,
        sendOTP,
        deleteBeneficiary,
        emailState,
        passwordState,
        formIsValid,
        emailInput,
        passwordInput,
        loginHandler,
        dashboardData,
        logoutHandler,
        transactionDataAll,
        transactionData,
        dashboardHistory,
        accountHistory,
        makeTransfer,
        currentPageData,
        pageDataEnd,
        setPageNumber,
        pageNumber,
        addBeneficiary,
        getBeneficiary,
        payeesList,
        isLoading,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
