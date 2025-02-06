import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import mockContracts from "../../assets/mockContracts.json";

// Garantindo que mockContracts está tipado corretamente
const contracts: Contract[] = mockContracts as Contract[];

interface Contract {
  id: number;
  client: string;
  startDate: string;
  endDate: string;
  status: string;
  value: number;
  type: string;
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Função para obter a distribuição de contratos por status
const getDistributionByStatus = () => {
  const distribution = {
    Ativo: 0,
    Expirado: 0,
    "Renovação Pendente": 0,
  };

  contracts.forEach((contract: Contract) => {
    distribution[contract.status as keyof typeof distribution] += 1;
  });

  return distribution;
};

const ContractsDistributionChartStatus = () => {
  const distribution = getDistributionByStatus();
  const data = {
    labels: Object.keys(distribution),
    datasets: [
      {
        label: "Distribuição por Status",
        data: Object.values(distribution),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Distribuição de Contratos por Status</h3>
      <div style={{ position: "relative", height: "40vh", width: "100%" }}>
        <Bar data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default ContractsDistributionChartStatus;
