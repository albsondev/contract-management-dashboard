import MetricCards from "../components/dashboard/MetricCards";
import ContractsTable from "../components/dashboard/ContractsTable";
import ContractsChart from "../components/dashboard/ContractsChart";

const Dashboard = () => {



  return (
    <div className="space-y-6 w-full">
      <h2 className="text-2xl font-semibold text-gray-800">Visão Geral</h2>

      {/* Cards de Métricas */}
      <MetricCards />

      {/* Gráficos */}
      <ContractsChart />

      {/* Filtro com botão para adicionar novo contrato */}
      

      {/* Tabela de Contratos */}
      <ContractsTable />
    </div>
  );
};

export default Dashboard;
