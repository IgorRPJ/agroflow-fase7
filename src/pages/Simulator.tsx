import { Calculator as CalculatorIcon } from "lucide-react";
import Calculator from "../components/Calculator";
import PageHero from "../components/PageHero";

export default function Simulator() {
  return <div><PageHero eyebrow="Simulador" title="Projete o impacto das suas decisões." text="Compare desperdícios, custos e uma possível economia mensal a partir dos dados da sua operação." /><section className="calculator-section"><div className="calculator-intro"><CalculatorIcon size={34} /><span className="eyebrow">Funcionalidade interativa</span><h2>Simule sua economia agrícola.</h2><p>Preencha os dados básicos da operação e veja uma projeção simples da redução de desperdícios.</p><img src="/agroflow-dashboard-visual.webp" alt="Visualização de indicadores agrícolas" /></div><Calculator /></section></div>;
}
