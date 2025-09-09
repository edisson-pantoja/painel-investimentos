import React from 'react';
import { PainelInvestimentos } from './components/PainelInvestimentos';

function Card({ title, value, change }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg flex flex-col items-start space-y-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
      <p className={`text-sm ${change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
        {change}
      </p>
      <button className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition">
        Ver detalhes
      </button>
    </div>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Painel de Investimentos</h1>
        <nav>
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition">
            Login
          </button>
        </nav>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Carteira Total" value="R$ 5.000,00" change="+5%" />
        <Card title="Aporte Mensal" value="R$ 200,00" change="+2%" />
        <Card title="Projeção 10 anos" value="R$ 50.000,00" change="+15%" />
      </section>
    </div>
  );
}
