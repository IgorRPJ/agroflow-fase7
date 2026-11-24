import { Link } from "wouter";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div><Brand large /><p>Tecnologia agrícola para decisões melhores no campo.</p></div>
        <div><strong>Explorar</strong><Link href="/solucoes">Soluções</Link><Link href="/saude">Saúde do cultivo</Link><Link href="/sobre">Sobre o projeto</Link></div>
        <div><strong>Contato</strong><span>contato@agroflow.com.br</span><span>(11) 9 8765-4321</span><span>São Paulo, SP</span></div>
      </div>
      <div className="footer-bottom"><span>AgroFlow · Projeto Agrotech</span><span>© {new Date().getFullYear()}</span></div>
    </footer>
  );
}
