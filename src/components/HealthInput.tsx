import { useState } from "react";

export default function HealthInput() {
  const [crop, setCrop] = useState("Soja");
  const [moisture, setMoisture] = useState("48");
  const [leaves, setLeaves] = useState("saudaveis");
  const [checked, setChecked] = useState(false);
  const moistureValue = Number(moisture);
  const healthy = moistureValue >= 35 && moistureValue <= 70 && leaves === "saudaveis";
  return (
    <div className="health-card">
      <div className="form-grid">
        <label>Cultura<select value={crop} onChange={event => setCrop(event.target.value)}><option>Soja</option><option>Milho</option><option>Cana-de-açúcar</option><option>Café</option></select></label>
        <label>Umidade do solo (%)<input type="number" min="0" max="100" value={moisture} onChange={event => setMoisture(event.target.value)} /></label>
        <label>Estado das folhas<select value={leaves} onChange={event => setLeaves(event.target.value)}><option value="saudaveis">Saudáveis</option><option value="atencao">Com sinais de atenção</option><option value="critico">Com sinais críticos</option></select></label>
      </div>
      <button className="button primary full" onClick={() => setChecked(true)}>Avaliar cultivo</button>
      {checked && <div className={healthy ? "health-result healthy" : "health-result warning"}><strong>{healthy ? "Condição favorável" : "Atenção recomendada"}</strong><span>{healthy ? `${crop}: umidade e aparência dentro da faixa esperada.` : `${crop}: revise irrigação e faça uma inspeção presencial nas próximas horas.`}</span></div>}
      {!checked && <p className="form-helper">Use as informações mais recentes coletadas na propriedade.</p>}
    </div>
  );
}
