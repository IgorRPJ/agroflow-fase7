import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

export default function SolutionCard({ icon: Icon, title, description, features, price }: { icon: LucideIcon; title: string; description: string; features: string[]; price: string }) {
  return <article className="solution-card"><div className="solution-icon"><Icon size={25} /></div><h3>{title}</h3><p>{description}</p><ul>{features.map(feature => <li key={feature}><Check size={15} />{feature}</li>)}</ul><strong>{price}</strong></article>;
}
