import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() { return <section className="page-hero"><span className="eyebrow">Página não encontrada</span><h1>Esse caminho não existe.</h1><p>Volte para a página inicial para continuar navegando.</p><Link href="/" className="button primary">Voltar ao início <ArrowRight size={18} /></Link></section>; }
