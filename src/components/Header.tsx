import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import Brand from "./Brand";
import { navItems } from "../data/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Brand />
        <button className="menu-button" aria-label="Abrir menu" onClick={() => setOpen(value => !value)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {navItems.map(item => <Link key={item.href} href={item.href} className={location === item.href ? "active" : ""} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link href="/contato" className="nav-cta" onClick={() => setOpen(false)}>Fale conosco <ArrowRight size={16} /></Link>
        </nav>
      </div>
    </header>
  );
}
