import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './js/Layout';
import FinancesCard from './js/FinancesCard';
import OperationsCard from './js/OperationsCard';

function App() {
  return (
    <HashRouter>
    <Layout>
      <Routes>
          <Route path="/*" element={<FinancesCard />} />
          <Route path="/finances/*" element={<FinancesCard />} />
          {/* <Route path="/accounts" element={<Accounts_Card/>}/> */}
          <Route path="/operations" element={<OperationsCard/>}/>
      </Routes>
    </Layout>
    </HashRouter>
  );
}

export default App;
