import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<div>Dashboard</div>} />
          <Route path="/contracts" element={<div>Contratos</div>} />
          <Route path="/reports" element={<div>Relatórios</div>} />
          <Route path="/settings" element={<div>Configurações</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
