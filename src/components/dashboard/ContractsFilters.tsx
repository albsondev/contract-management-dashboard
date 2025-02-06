import { useState, useEffect } from "react";

interface ContractsFiltersProps {
  onAddClick: () => void;
  onFilterChange: (filters: { status: string; type: string; startDate: string; endDate: string }) => void;
}

const ContractsFilters = ({ onAddClick, onFilterChange }: ContractsFiltersProps) => {
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    // Chamar a função de filtro sempre que qualquer estado de filtro mudar
    onFilterChange({ status, type, startDate, endDate });
  }, [status, type, startDate, endDate, onFilterChange]); // Dependências para aplicar a filtragem

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4 flex flex-wrap gap-4 items-center justify-between">
      {/* Filtro por Status */}
      <select
        className="border p-2 rounded w-40"
        value={status}
        onChange={(e) => setStatus(e.target.value)} // Atualiza o estado sem necessidade de função extra
      >
        <option value="">Todos os Status</option>
        <option value="Ativo">Ativo</option>
        <option value="Expirado">Expirado</option>
        <option value="Renovação Pendente">Renovação Pendente</option>
      </select>

      {/* Filtro por Tipo */}
      <select
        className="border p-2 rounded w-40"
        value={type}
        onChange={(e) => setType(e.target.value)} // Atualiza o estado sem necessidade de função extra
      >
        <option value="">Todos os Tipos</option>
        <option value="Serviços">Serviços</option>
        <option value="Fornecimento">Fornecimento</option>
        <option value="Consultoria">Consultoria</option>
        <option value="Manutenção">Manutenção</option>
      </select>

      {/* Filtro por Data de Início */}
      <input
        type="date"
        className="border p-2 rounded"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)} // Atualiza o estado sem necessidade de função extra
      />

      {/* Filtro por Data de Vencimento */}
      <input
        type="date"
        className="border p-2 rounded"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)} // Atualiza o estado sem necessidade de função extra
      />

      {/* Botão para Adicionar Novo Contrato */}
      <button onClick={onAddClick} className="bg-green-500 text-white px-4 py-2 rounded">
        + Novo Contrato
      </button>

      {/* Botão para Limpar Filtros */}
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded"
        onClick={() => {
          setStatus("");
          setType("");
          setStartDate("");
          setEndDate("");
          onFilterChange({ status: "", type: "", startDate: "", endDate: "" }); // Reseta os filtros
        }}
      >
        Limpar Filtros
      </button>
    </div>
  );
};

export default ContractsFilters;
