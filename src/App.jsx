import React from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { CardResumo } from "./components/CardResumo";
import { CrescimentoCarteira } from "./components/Charts/CrescimentoCarteira";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-y-auto">
          <CardResumo title="Carteira Total" value="R$ 5.000,00" change="+5%" color="green" />
          <CardResumo title="Aporte Mensal" value="R$ 200,00" change="+2%" color="blue" />
          <CardResumo title="Projeção 10 anos" value="R$ 50.000,00" change="+15%" color="yellow" />

          <div className="md:col-span-2 bg-white rounded-2xl shadow p-4">
            <CrescimentoCarteira />
          </div>
        </main>
      </div>
    </div>
  );
}

