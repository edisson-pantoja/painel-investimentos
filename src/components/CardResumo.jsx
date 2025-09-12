import React from "react";

export function CardResumo({ title, value, change, color }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-start space-y-2">
      <h2 className="text-sm text-gray-400">{title}</h2>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className={`text-sm ${change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
        {change}
      </p>
      <button className={`mt-2 px-3 py-1 rounded-lg text-sm bg-${color}-600 hover:bg-${color}-500 transition`}>
        Ver detalhes
      </button>
    </div>
  );
}
