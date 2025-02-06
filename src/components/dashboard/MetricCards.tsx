import { FiFileText, FiCheckCircle, FiClock, FiDollarSign } from "react-icons/fi";
import contracts from "../../assets/mockContracts.json";

// Função para calcular as métricas dinamicamente
const calculateMetrics = () => {
  const totalContracts = contracts.length;
  const activeContracts = contracts.filter((c) => c.status === "Ativo").length;
  const expiringContracts = contracts.filter((c) => {
    const daysToExpire = (new Date(c.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
    return daysToExpire > 0 && daysToExpire <= 30;
  }).length;
  const totalValue = contracts.reduce((sum, c) => sum + c.value, 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return { totalContracts, activeContracts, expiringContracts, totalValue };
};

// Obtendo as métricas calculadas
const { totalContracts, activeContracts, expiringContracts, totalValue } = calculateMetrics();

const metrics = [
  { id: 1, label: "Total de Contratos", value: totalContracts, icon: <FiFileText />, bgColor: "card-yellow", textColor: "text-yellow-600", colorValue: "text-yellow-800" },
  { id: 2, label: "Contratos Ativos", value: activeContracts, icon: <FiCheckCircle />, bgColor: "card-blue", textColor: "text-blue-600", colorValue: "text-blue-800" },
  { id: 3, label: "Próximos ao Vencimento", value: expiringContracts, icon: <FiClock />, bgColor: "card-red", textColor: "text-red-600", colorValue: "text-red-800" },
  { id: 4, label: "Valor Total (R$)", value: totalValue, icon: <FiDollarSign />, bgColor: "card-green", textColor: "text-green-600", colorValue: "text-green-800" },
];

const MetricCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div key={metric.id} className={`p-4 border-cards-default shadow rounded-lg flex items-center space-x-4 ${metric.bgColor}`}>
          <div className={`text-3xl ${metric.textColor}`}>{metric.icon}</div>
          <div>
            <p className={`text-md font-semibold ${metric.textColor}`}>{metric.label}</p>
            <h3 className={`text-xl font-bold ${metric.colorValue}`}>{metric.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricCards;
