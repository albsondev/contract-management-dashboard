import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";
import ContractForm from "components/dashboard/ContractForm";
import Reports from "../pages/Reports";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contracts" element={<ContractForm onAddContract={() => {}} />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<div>Configurações no futuro!</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
