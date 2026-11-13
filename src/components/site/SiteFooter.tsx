import { Link } from "@tanstack/react-router";
import { linkWhatsapp, loja } from "@/data/loja";

export function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-5xl leading-none">
            Felipe Pardo <span className="text-pop">Vendas</span>
          </p>
          <p className="mt-4 max-w-xs text-ink-foreground/70">
            Sapatos para todos os passos. Escolha, chame no WhatsApp e garanta o seu.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-display text-2xl text-primary">Navegue</p>
          <Link to="/produtos" className="hover:text-pop">Produtos</Link>
          <Link to="/sobre" className="hover:text-pop">Sobre a loja</Link>
          <Link to="/contato" className="hover:text-pop">Contato</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-display text-2xl text-primary">Fale com a gente</p>
          <a href={linkWhatsapp()} target="_blank" rel="noreferrer" className="hover:text-pop">
            WhatsApp {loja.whatsappExibicao}
          </a>
          <span>{loja.instagram}</span>
          <span>{loja.endereco}</span>
          <span>{loja.horario}</span>
        </div>
      </div>
      <div className="border-t border-ink-foreground/20 px-4 py-5 text-center text-sm text-ink-foreground/60">
        © {new Date().getFullYear()} {loja.nome}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
