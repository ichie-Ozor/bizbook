import Dashboard from './Component/Dashboard';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import Creditor from './Component/Main/Creditor'
import Sales from './Component/Main/Sales'
import Debtor from './Component/Main/Debtor'
import Stock from './Component/Main/Stock'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='dashboard' element={<Dashboard />}/>
        <Route path='dashboard/creditor' element={<Creditor />} />
        <Route path='dashboard/sales' element={<Sales />} />
        <Route path='dashboard/debtor' element={<Debtor />} />
        <Route path='dashboard/stock' element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;








