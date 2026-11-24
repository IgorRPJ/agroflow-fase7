import { BarChart3 } from "lucide-react";
import { useMemo, useState } from "react";

const factors: Record<string, number> = { grãos: 0.35, frutas: 0.4, cana: 0.3, pecuaria: 0.32 };
const money = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function Calculator() {
  const [area, setArea] = useState("50");
  const [type, setType] = useState("grãos");
  const [cost, setCost] = useState("10000");
  const [waste, setWaste] = useState("18");
  const [submitted, setSubmitted] = useState(false);
  const result = useMemo(() => { const current = Number(cost) * Number(waste) / 100; const saving = current * (factors[type] || 0.35); return { current, reduced: current - saving, saving, annual: saving * 12 }; }, [cost, waste, type]);
  const valid = Number(area) > 0 && Number(cost) > 0 && Number(waste) >= 0 && Number(waste) <= 100;
  return <div className="calculator-card"><div className="form-grid"><label>Área cultivada (ha)<input type="number" min="1" value={area} onChange={event => setArea(event.target.value)} /></label><label>Tipo de produção<select value={type} onChange={event => setType(event.target.value)}><option value="grãos">Grãos</option><option value="frutas">Frutas</option><option value="cana">Cana-de-açúcar</option><option value="pecuaria">Pecuária</option></select></label><label>Custo mensal<input type="number" min="1" value={cost} onChange={event => setCost(event.target.value)} /></label><label>Desperdício estimado (%)<input type="number" min="0" max="100" value={waste} onChange={event => setWaste(event.target.value)} /></label></div><button className="button primary full" onClick={() => setSubmitted(true)}>Calcular economia <BarChart3 size={18} /></button>{submitted && valid ? <div className="result-panel"><div><span>Desperdício atual</span><strong>{money(result.current)}</strong></div><div><span>Com AgroFlow</span><strong>{money(result.reduced)}</strong></div><div className="result-highlight"><span>Economia mensal estimada</span><strong>{money(result.saving)}</strong><small>Economia anual: {money(result.annual)}</small></div></div> : submitted ? <p className="form-error">Confira os valores informados.</p> : <p className="form-helper">A simulação é uma projeção educativa baseada nos dados informados.</p>}</div>;
}
