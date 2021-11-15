
import DashboardIndex from './components/views/dash/DashboardIndex';
import TransactionIndex from './components/views/txns/TransactionIndex';
import TransactionShow from './components/views/txns/TransactionShow';
import WalletIndex from './components/views/wallets/WalletIndex';
import WalletShow from './components/views/wallets/WalletShow';
import Login from './components/views/login/Login';


function isLoggedIn(){ 
  // determine if the user is logged in.
  return true;
}

const routes = {
  '/': DashboardIndex,
  "/wallets": WalletIndex,
  '/wallets/:id': WalletShow,
  '/transactions': TransactionIndex,
  '/transactions/:id': TransactionShow,
  '/login': Login,
  '*': DashboardIndex
}

export { routes }