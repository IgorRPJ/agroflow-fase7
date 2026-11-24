import { Activity, CheckCircle2, Droplets, Leaf } from "lucide-react";
import { Link } from "wouter";
import HealthInput from "../components/HealthInput";
import PageHero from "../components/PageHero";

export default function Health() {
  return <div><PageHero eyebrow="Saúde do cultivo" title="Acompanhe os sinais da sua lavoura." text="Registre as condições atuais e receba uma leitura inicial para orientar a próxima inspeção." /><section className="section health-layout"><div><div className="health-intro"><span className="eyebrow">Painel de acompanhamento</span><h2>Informação simples para agir cedo.</h2><p>Use umidade e aparência das folhas como ponto de partida para organizar o cuidado do cultivo.</p></div><div className="health-cards"><article><Droplets size={24} /><strong>48%</strong><span>Umidade média</span></article><article><Leaf size={24} /><strong>Estável</strong><span>Desenvolvimento</span></article><article><Activity size={24} /><strong>24/7</strong><span>Monitoramento</span></article></div></div><HealthInput /></section><section className="section section-light"><div className="health-guide"><CheckCircle2 size={28} /><div><span className="eyebrow">Próximo passo</span><h2>Combine o painel com uma simulação de economia.</h2><p>Depois de entender o estado atual da operação, compare cenários para planejar melhorias.</p></div><Link href="/simulador" className="button primary">Abrir simulador</Link></div></section></div>;
}
