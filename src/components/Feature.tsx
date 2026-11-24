import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Feature({ icon: Icon, title, text, href }: { icon: LucideIcon; title: string; text: string; href: string }) {
  return <article className="feature-card"><Icon size={28} /><h3>{title}</h3><p>{text}</p><Link href={href}>Saiba mais <ChevronRight size={16} /></Link></article>;
}
