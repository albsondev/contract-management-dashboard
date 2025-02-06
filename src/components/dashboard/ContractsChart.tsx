import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import mockContracts from "../../assets/mockContracts.json";

// Ensure mockContracts is typed correctly
const contracts: Contract[] = mockContracts as Contract[];

interface Contract {
  endDate: string;
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const getContractsByMonth = () => {
  const months = Array(12).fill(0);

  contracts.forEach((contract: Contract) => {
    const month: number = new Date(contract.endDate).getMonth();
    months[month] += 1;
  });

  return months;
};

const ContractsChart = () => {
  const data = {
    labels: [
      "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ],
    datasets: [
      {
        label: "Contratos vencendo",
        data: getContractsByMonth(),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      }
    ]
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Expiração de Contratos</h3>
      <Bar data={data} />
    </div>
  );
};

export default ContractsChart;
