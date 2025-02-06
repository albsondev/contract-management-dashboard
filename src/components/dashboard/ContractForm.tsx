import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Contract {
  id: number;
  client: string;
  startDate: string;
  endDate: string;
  status: string;
  value: number;
  type: string;
}

const ContractForm = ({ onAddContract }: { onAddContract: (contract: Contract) => void }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    client: "",
    startDate: "",
    endDate: "",
    status: "Ativo",
    value: "",
    type: "Serviços"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newContract: Contract = {
      id: Math.floor(Math.random() * 1000) + 101,
      client: formData.client,
      startDate: formData.startDate,
      endDate: formData.endDate,
      status: formData.status,
      value: parseFloat(formData.value),
      type: formData.type
    };

    onAddContract(newContract);

    // Redireciona para o Dashboard
    navigate("/");
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Cadastrar Novo Contrato</h3>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <input type="text" name="client" placeholder="Nome do Cliente" value={formData.client} onChange={handleChange} className="border p-2 rounded w-full" required />
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="border p-2 rounded w-full" required />
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="border p-2 rounded w-full" required />
        <select name="status" value={formData.status} onChange={handleChange} className="border p-2 rounded w-full">
          <option value="Ativo">Ativo</option>
          <option value="Expirado">Expirado</option>
          <option value="Renovação Pendente">Renovação Pendente</option>
        </select>
        <select name="type" value={formData.type} onChange={handleChange} className="border p-2 rounded w-full">
          <option value="Serviços">Serviços</option>
          <option value="Fornecimento">Fornecimento</option>
          <option value="Consultoria">Consultoria</option>
          <option value="Manutenção">Manutenção</option>
        </select>
        <input type="number" name="value" placeholder="Valor (R$)" value={formData.value} onChange={handleChange} className="border p-2 rounded w-full" required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded col-span-1 md:col-span-2">Adicionar Contrato</button>
      </form>
    </div>
  );
};

export default ContractForm;
