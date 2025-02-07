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
  }, [status, startDate, endDate, onFilterChange]);

  return (
    <div className="bg-zinc-50 border border-gray-300 shadow rounded-lg p-4 mb-4 gap-4 flex flex-col md:grid md:grid-cols-2 md:gap-6">
      {/* Filtro por Status */}
      <select
        className="border p-2 rounded w-full"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Todos os Status</option>
        <option value="Ativo">Ativo</option>
        <option value="Expirado">Expirado</option>
        <option value="Renovação Pendente">Renovação Pendente</option>
      </select>

      {/* Filtro por Data de Início */}
      <input
        type="date"
        className="border p-2 rounded w-full"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      {/* Filtro por Data de Vencimento */}
      <input
        type="date"
        className="border p-2 rounded w-full"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      {/* Botão para Limpar Filtros */}
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded w-full"
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
