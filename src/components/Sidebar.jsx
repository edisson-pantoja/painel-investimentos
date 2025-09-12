import React from "react";
import { Home, Wallet, TrendingUp, BarChart3, Settings } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="bg-gray-900 w-60 h-screen p-6 border-r border-gray-700 hidden md:flex flex-col">
      <nav className="space-y-4 text-gray-300">
        <a href="#" className="flex items-center space-x-2 hover:text-white">
          <Home size={20}/> <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-white">
          <Wallet size={20}/> <span>Carteira</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-white">
          <TrendingUp size={20}/> <span>Aportes</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-white">
          <BarChart3 size={20}/> <span>Projeções</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-white">
          <Settings size={20}/> <span>Configurações</span>
        </a>
      </nav>
    </aside>
  );
}
