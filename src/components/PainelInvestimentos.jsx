import { useState } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Dados simulados
const dadosCarteira = [
  { mes: 'Jan', valor: 5000 },
  { mes: 'Fev', valor: 5200 },
  { mes: 'Mar', valor: 5450 },
  { mes: 'Abr', valor: 5700 },
];

const sugestoesIA = [
  {
    id: 1,
    acao: 'ITSA4',
    tipo: 'Compra',
    motivo: 'Empresa com bons fundamentos e dividend yield acima da média do setor bancário.',
  },
  {
    id: 2,
    acao: 'PETR4',
    tipo: 'Venda',
    motivo: 'Alta recente já precificou os lucros. Risco político elevado no curto prazo.',
  },
];

export function PainelInvestimentos() {
  const [carteira, setCarteira] = useState(dadosCarteira);
  const [sugestoes, setSugestoes] = useState(sugestoesIA);
  const [aprovadas, setAprovadas] = useState([]);

  const aprovarSugestao = (id) => {
    const sugestao = sugestoes.find((s) => s.id === id);
    setAprovadas([...aprovadas, sugestao]);
    setSugestoes(sugestoes.filter((s) => s.id !== id));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Painel da Liberdade Financeira</h1>

      <Card className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Evolução da Carteira</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={carteira}>
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="valor" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Sugestões da IA</h2>
        {sugestoes.map((sug) => (
          <div
            key={sug.id}
            className="mb-4 p-3 border rounded-lg bg-gray-50"
          >
            <p>
              <strong>{sug.tipo}</strong>{' '}
              <span className="text-green-700">{sug.acao}</span>
            </p>
            <p className="text-sm text-gray-600">{sug.motivo}</p>
            <Button onClick={() => aprovarSugestao(sug.id)} className="mt-2">
              Aprovar
            </Button>
          </div>
        ))}
      </Card>

      {aprovadas.length > 0 && (
        <Card>
          <h2 className="text-xl font-semibold mb-2">Movimentos Aprovados</h2>
          {aprovadas.map((mov) => (
            <p key={mov.id}>✅ {mov.tipo} {mov.acao}</p>
          ))}
        </Card>
      )}
    </div>
  );
}
