import { useContext, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LoanSummary from './components/account/LoanSummary';
import TransactionHistory from './components/account/TransactionHistory';
import Dashboard from './components/dashboard/Dashboard';
import PayAndTransfer from './components/pay&transfer/Pay&Transfer';
import MainLayout from './components/UI/MainLayout';
import SubLayout from './components/UI/SubLayout';
import WireTransfer from './components/pay&transfer/WireTransfer';
import GlobalTransfer from './components/pay&transfer/GlobalTransfer';
import InstantTransfer from './components/pay&transfer/InstantTransfer';
import AddPayee from './components/pay&transfer/AddPayee';
import Investment from './components/investment/Investment';
import Active from './components/investment/Active';
import Explore from './components/investment/Explore';
import Matured from './components/investment/Matured';
import TransactionInit from './components/pay&transfer/TransactionInit';
import TransactionDetails from './components/pay&transfer/TransactionDetails';
import GlobalInit from './components/pay&transfer/GlobalInit';
import ChooseInstitution from './components/pay&transfer/ChooseInstitution';
import InstantTransInit from './components/pay&transfer/InstantTransInit';
import PayeeDetails from './components/myPayees/PayeeDetails';
import idle from './utils/idle';
import { context } from './store/store';
import Accounts from './components/accounts/Accounts';
import SecurityPreference from './components/settings/SecurityPreference';
import AccountInformation from './components/settings/AccountInformation';
import LandingPage from './components/landingPage/LandingPage';
import LoadingAnimation from './components/UI/LoadingAnimation';
import Admin from './components/Admin';
import Allow from './components/UI/Allow';
const LoginLayout = lazy(() => import('./components/login/LoginLayout'));
const MyPayees = lazy(() => import('./components/myPayees/MyPayees'));
const Settings = lazy(() => import('./components/settings/Settings'));
// const Settings = lazy(() =>
//   delayForDemo(import('./components/settings/Settings'))
// );

function App() {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(context);
  const { pathname } = useLocation();
  // inactivity timer
  useEffect(() => {
    if (pathname === '/') return;
    idle(600, logoutHandler, navigate);
  }, [logoutHandler, navigate, pathname]);

  return (
    <Routes>
      <Route path="/admin" element={<Admin/>} />
      <Route path="/allow" element={<Allow/>} />
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/login"
        element={
          <Suspense fallback={<LoadingAnimation />}>
            <LoginLayout />
          </Suspense>
        }
      />
      <Route element={<MainLayout />}>
        <Route element={<SubLayout />}>
          {/* DASHBOARD */}
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="transactionhistory" element={<TransactionHistory />} />
            <Route
              path="accountstatement"
              element={<h1>account statement</h1>}
            />
            <Route path="loanhistory" element={<LoanSummary />} />
          </Route>

          {/* ACCOUNTS */}
          <Route path="accounts" element={<Accounts />}>
            <Route path="transactionhistory" element={<TransactionHistory />} />
            <Route
              path="accountstatement"
              element={<h1>account statement</h1>}
            />
            <Route path="loanhistory" element={<LoanSummary />} />
          </Route>

          {/* PAY & TRANSFER */}
          <Route path="pay&transfer" element={<PayAndTransfer />}>
            <Route path="wiretransfer" element={<WireTransfer />}>
              <Route index element={<AddPayee />} />
              <Route
                path="initializetransaction"
                element={<TransactionInit />}
              />
              <Route
                path="transactiondetails"
                element={<TransactionDetails />}
              />
            </Route>
            <Route path="globaltransfer" element={<GlobalTransfer />}>
              <Route index element={<AddPayee />} />
              <Route path="initializetransaction" element={<GlobalInit />} />
              <Route
                path="transactiondetails"
                element={<TransactionDetails />}
              />
            </Route>
            <Route path="instanttransfer" element={<InstantTransfer />}>
              <Route index element={<ChooseInstitution />} />
              <Route
                path="initializetransaction"
                element={<InstantTransInit />}
              />
              <Route
                path="transactiondetails"
                element={<TransactionDetails />}
              />
            </Route>
          </Route>

          {/* MY PAYEES */}
          <Route
            path="mypayees"
            element={
              <Suspense fallback={<LoadingAnimation />}>
                <MyPayees />
              </Suspense>
            }
          />
          <Route path="mypayees/payeedetails" element={<PayeeDetails />}>
            <Route path="wiretransfer" element={<AddPayee />} />
            <Route path="globaltransfer" element={<AddPayee />} />
          </Route>

          {/* INVESTMENTS */}
          <Route path="investments" element={<Investment />}>
            <Route path="active" element={<Active />} />
            <Route
              path="explore"
              element={
                <Suspense fallback={<LoadingAnimation />}>
                  <Explore />
                </Suspense>
              }
            />
            <Route path="matured" element={<Matured />} />
          </Route>
        </Route>
        <Route
          path="settings"
          element={
            <Suspense fallback={<LoadingAnimation />}>
              <Settings />
            </Suspense>
          }
        >
          <Route path="accountinformation" element={<AccountInformation />} />
          <Route path="securitypreferences" element={<SecurityPreference />} />
        </Route>
      </Route>
      <Route path="*" element={<h1>404 Page not found</h1>} />
    </Routes>
  );
}

// function delayForDemo(promise) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   }).then(() => promise);
// }

export default App;
