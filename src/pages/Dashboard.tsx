import MetricCards from "../components/dashboard/MetricCards";
import ContractsTable from "../components/dashboard/ContractsTable";
import ContractsChart from "../components/dashboard/ContractsChart";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Visão Geral</h2>
      
      {/* Cards de Métricas */}
      <MetricCards />

      {/* Gráficos */}
      <ContractsChart />

      {/* Tabela de Contratos */}
      <ContractsTable />
    </div>
  );
};

export default Dashboard;
