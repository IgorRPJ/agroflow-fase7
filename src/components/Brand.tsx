import { Link } from "wouter";

export default function Brand({ large = false }: { large?: boolean }) {
  return (
    <Link href="/" className={large ? "brand footer-brand" : "brand"}>
      <span className="brand-mark"><img src="/agroflow-mark.webp" alt="" /></span>
      <span>Agro<span>Flow</span></span>
    </Link>
  );
}
