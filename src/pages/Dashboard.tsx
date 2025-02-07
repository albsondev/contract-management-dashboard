import MetricCards from "../components/dashboard/MetricCards";
import ContractsTable from "../components/dashboard/ContractsTable";
import ContractsChart from "../components/dashboard/ContractsChart";
import ContractsDistributionChartStatus from "components/dashboard/ContractsDistributionChartStatus";
import ContractsDistributionChartServices from "components/dashboard/ContractsDistributionChartServices";

const Dashboard = () => {



  return (
    <div className="space-y-6 w-full">
      <h2 className="text-2xl font-semibold text-gray-800">Visão Geral</h2>

      {/* Cards de Métricas */}
      <MetricCards />

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Alteração para garantir que seja 1 coluna em telas menores */}
  <ContractsDistributionChartStatus />
  <ContractsDistributionChartServices />
</div>


      <ContractsChart />

      {/* Tabela de Contratos */}
      <ContractsTable />
    </div>
  );
};

export default Dashboard;
