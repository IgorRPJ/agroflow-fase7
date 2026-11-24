import { ArrowRight, Check } from "lucide-react";
import { FormEvent, useState } from "react";

type FormData = { name: string; email: string; subject: string; message: string };
const emptyForm: FormData = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [sent, setSent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const update = (key: keyof FormData, value: string) => {
    setSent(false);
    setForm(current => ({ ...current, [key]: value }));
  };
  const nameValid = form.name.trim().split(/\s+/).length >= 2;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const messageValid = form.message.trim().length >= 10;
  const valid = nameValid && emailValid && Boolean(form.subject) && messageValid;
  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    if (!valid) return;
    setSent(true);
    setSubmitted(false);
    setForm(emptyForm);
  };
  const error = (show: boolean, text: string) => show ? <span className="field-error">{text}</span> : null;

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <h2>Envie sua mensagem</h2>
      {sent && <div className="success-message" role="status"><Check size={18} /> Mensagem enviada com sucesso. Entraremos em contato em breve.</div>}
      <label>Nome completo
        <input value={form.name} onChange={event => update("name", event.target.value)} placeholder="Seu nome e sobrenome" aria-invalid={submitted && !nameValid} />
        {error(submitted && !nameValid, "Informe seu nome e sobrenome.")}
      </label>
      <label>E-mail
        <input type="email" value={form.email} onChange={event => update("email", event.target.value)} placeholder="seu@email.com" aria-invalid={submitted && !emailValid} />
        {error(submitted && !emailValid, "Informe um e-mail válido.")}
      </label>
      <label>Assunto
        <select value={form.subject} onChange={event => update("subject", event.target.value)} aria-invalid={submitted && !form.subject}>
          <option value="">Selecione um assunto</option>
          <option value="Demonstração do produto">Demonstração do produto</option>
          <option value="Suporte técnico">Suporte técnico</option>
          <option value="Parceria comercial">Parceria comercial</option>
          <option value="Dúvidas gerais">Dúvidas gerais</option>
        </select>
        {error(submitted && !form.subject, "Selecione um assunto.")}
      </label>
      <label>Mensagem
        <textarea rows={5} maxLength={500} value={form.message} onChange={event => update("message", event.target.value)} placeholder="Descreva como podemos ajudar..." aria-invalid={submitted && !messageValid} />
        <small>{form.message.length}/500 caracteres</small>
        {error(submitted && !messageValid, "Escreva uma mensagem com pelo menos 10 caracteres.")}
      </label>
      <button className="button primary full" type="submit">Enviar mensagem <ArrowRight size={18} /></button>
      {submitted && !valid && <p className="form-helper">Revise os campos destacados antes de enviar.</p>}
    </form>
  );
}
