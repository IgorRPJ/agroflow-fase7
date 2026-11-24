import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import SolutionCard from "../components/SolutionCard";
import { solutions } from "../data/siteData";

export default function Solutions() { return <div><PageHero eyebrow="Soluções AgroFlow" title="Uma visão mais inteligente da sua produção." text="Escolha as ferramentas que fazem sentido para o seu momento e avance com mais confiança." /><section className="section"><SectionTitle eyebrow="Ecossistema AgroFlow" title="Tudo conectado para você decidir melhor." text="Conheça as frentes que podem trabalhar juntas na sua operação." /><div className="solution-grid">{solutions.map(item => <SolutionCard key={item.title} {...item} />)}</div></section></div>; }
