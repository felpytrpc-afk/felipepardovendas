import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { linkWhatsapp, loja } from "@/data/loja";

const links = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center border-[3px] border-ink bg-primary font-display text-2xl shadow-brutal-sm">
            FP
          </span>
          <span className="font-display text-3xl leading-none">
            Felipe Pardo <span className="bg-pop px-1">Vendas</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="font-display text-2xl tracking-wide underline-offset-8 hover:underline data-[status=active]:text-primary data-[status=active]:underline"
            >
              {l.label}
            </Link>
          ))}
          <Button asChild variant="brutal" size="lg">
            <a href={linkWhatsapp()} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
        </nav>

        <button
          className="grid h-11 w-11 place-items-center border-[3px] border-ink bg-pop md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t-[3px] border-ink bg-pop md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="border-b-[3px] border-ink px-6 py-4 font-display text-3xl"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={linkWhatsapp()}
            target="_blank"
            rel="noreferrer"
            className="bg-primary px-6 py-4 font-display text-3xl"
          >
            Chamar no WhatsApp · {loja.whatsappExibicao}
          </a>
        </nav>
      )}
    </header>
  );
}
