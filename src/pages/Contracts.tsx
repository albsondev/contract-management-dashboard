import { useNavigate } from "react-router-dom";
import ContractForm from "../components/dashboard/ContractForm";

const Contracts = () => {
  const navigate = useNavigate();

  interface Contract {
    id: number;
  client: string;
  name?: string;
  startDate: string;
  endDate: string;
  status: string;
  value: number;
  type: string;
  }

  const addContract = (newContract: Contract) => {
    // Recuperar contratos do localStorage
    const existingContracts = JSON.parse(localStorage.getItem("contracts") || "[]");

    // Adicionar o novo contrato e salvar
    existingContracts.push(newContract);
    localStorage.setItem("contracts", JSON.stringify(existingContracts));

    // Redirecionar para o Dashboard
    navigate("/");
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800">Cadastrar Novo Contrato</h2>
      <ContractForm onAddContract={addContract} />
    </div>
  );
};

export default Contracts;
