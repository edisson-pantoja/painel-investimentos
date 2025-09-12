import React from "react";

export function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-700">
      <h1 className="text-xl font-bold text-white">Painel de Investimentos</h1>
      <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition">
        Login
      </button>
    </header>
  );
}
