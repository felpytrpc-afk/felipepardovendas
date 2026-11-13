import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { linkWhatsapp, mensagemProduto, type Produto } from "@/data/loja";

export function ProductCard({ produto }: { produto: Produto }) {
  return (
    <article className="brutal-box brutal-lift flex flex-col bg-card">
      <div className="relative aspect-square overflow-hidden border-b-[3px] border-ink bg-muted">
        <img
          src={produto.imagem}
          alt={produto.nome}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute left-3 top-3 border-[3px] border-ink bg-pop px-2 py-0.5 font-display text-lg">
          {produto.categoria}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-4xl">{produto.nome}</h3>
        <p className="text-muted-foreground">{produto.descricao}</p>
        <p className="text-sm font-semibold uppercase tracking-wider">Numeração: {produto.numeracao}</p>
        <Button asChild variant="brutalInk" size="lg" className="mt-auto w-full">
          <a href={linkWhatsapp(mensagemProduto(produto))} target="_blank" rel="noreferrer">
            <MessageCircle /> Quero esse
          </a>
        </Button>
      </div>
    </article>
  );
}
