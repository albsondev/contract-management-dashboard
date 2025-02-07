import { useState, useEffect } from "react";

interface ChartsFiltersProps {
  onFilterChange: (filters: { status: string; startDate: string; endDate: string }) => void;
}

const ChartsFilters = ({ onFilterChange }: ChartsFiltersProps) => {
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Disparar a filtragem sempre que houver uma mudança nos filtros
  useEffect(() => {
    onFilterChange({ status, startDate, endDate });
  }, [status, startDate, endDate, onFilterChange]); // O useEffect será chamado sempre que qualquer filtro for alterado

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4 flex flex-wrap gap-4 items-center justify-between">
      {/* Filtro por Status */}
      <select
        className="border p-2 rounded w-40"
        value={status}
        onChange={(e) => setStatus(e.target.value)} // Agora apenas atualiza o estado, e o useEffect cuida do resto
      >
        <option value="">Todos os Status</option>
        <option value="Ativo">Ativo</option>
        <option value="Expirado">Expirado</option>
        <option value="Renovação Pendente">Renovação Pendente</option>
      </select>

      {/* Filtro por Data de Início */}
      <input
        type="date"
        className="border p-2 rounded"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      {/* Filtro por Data de Vencimento */}
      <input
        type="date"
        className="border p-2 rounded"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      {/* Botão para Limpar Filtros */}
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded"
        onClick={() => {
          setStatus("");
          setStartDate("");
          setEndDate("");
        }}
      >
        Limpar Filtros
      </button>
    </div>
  );
};

export default ChartsFilters;
