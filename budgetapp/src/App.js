import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './js/Layout';

function App() {
  return (
    <HashRouter>
    <Layout>
      <Routes>
          {/* <Route path="/finances/*" element={<FinancesCard />} />
          <Route path="/accounts" element={<Accounts_Card/>}/>
          <Route path="/operations" element={<Operations_Card/>}/> */}
      </Routes>
    </Layout>
    </HashRouter>
  );
}

export default App;
