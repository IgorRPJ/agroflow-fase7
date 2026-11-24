import { MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";

export default function Contact() { return <div><PageHero eyebrow="Fale conosco" title="Vamos conversar sobre sua produção." text="Envie uma mensagem e conte um pouco sobre o desafio que você quer resolver." /><section className="section contact-section"><ContactForm /><aside className="contact-aside"><div><MessageCircle size={24} /><h3>Atendimento próximo</h3><p>Respondemos mensagens em até 24 horas úteis.</p></div><div><strong>E-mail</strong><span>contato@agroflow.com.br</span><strong>Telefone</strong><span>(11) 9 8765-4321</span><strong>Localização</strong><span>São Paulo, SP — Brasil</span></div></aside></section></div>; }
