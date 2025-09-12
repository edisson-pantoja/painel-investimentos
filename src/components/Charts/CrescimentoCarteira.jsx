import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { mes: "Jan", valor: 1000 },
  { mes: "Fev", valor: 2000 },
  { mes: "Mar", valor: 3000 },
  { mes: "Abr", valor: 4000 },
  { mes: "Mai", valor: 5500 },
];

export function CrescimentoCarteira() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-white mb-4">Crescimento da Carteira</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="mes" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Line type="monotone" dataKey="valor" stroke="#10b981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
