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

// Função para obter a distribuição de contratos por tipo
const getDistributionByType = () => {
  const distribution = {
    Serviços: 0,
    Fornecimento: 0,
    Consultoria: 0,
    Manutenção: 0,
  };

  contracts.forEach((contract: Contract) => {
    if (contract.type in distribution) {
      distribution[contract.type as keyof typeof distribution] += 1;
    }
  });

  return distribution;
};

const ContractsDistributionChartServices = () => {
  const distribution = getDistributionByType();
  const data = {
    labels: Object.keys(distribution),
    datasets: [
      {
        label: "Distribuição por Tipo",
        data: Object.values(distribution),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Distribuição de Contratos por Tipo</h3>
      <div style={{ position: "relative", height: "40vh", width: "100%" }}>
        <Bar data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default ContractsDistributionChartServices;
