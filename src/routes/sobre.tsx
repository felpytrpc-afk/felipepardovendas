import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { linkWhatsapp } from "@/data/loja";
import bota from "@/assets/bota.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a loja — Felipe Pardo Vendas" },
      { name: "description", content: "Conheça a Felipe Pardo Vendas, loja de sapatos com atendimento próximo pelo WhatsApp." },
      { property: "og:title", content: "Sobre a loja — Felipe Pardo Vendas" },
      { property: "og:description", content: "Conheça a história e o jeito de atender da Felipe Pardo Vendas." },
    ],
  }),
  component: Sobre,
});

const numeros = [
  { valor: "+500", rotulo: "clientes atendidos" },
  { valor: "4", rotulo: "estilos de calçado" },
  { valor: "100%", rotulo: "atendimento humano" },
];

function Sobre() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-12 md:grid-cols-2 md:items-center md:px-8 md:py-20">
        <div>
          <h1 className="text-7xl md:text-8xl">
            Sapato bom
            <br />é <span className="bg-pop px-2">conversa</span> boa.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A Felipe Pardo Vendas nasceu da paixão por calçados e por gente. Aqui, cada cliente é atendido de perto:
            a gente ajuda a escolher o modelo, acertar a numeração e combinar a entrega do jeito mais prático.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Trabalhamos com tênis, sapatos sociais, botas e modelos femininos — sempre buscando estilo, conforto e
            preço justo.
          </p>
          <Button asChild variant="brutal" size="xl" className="mt-8">
            <a href={linkWhatsapp()} target="_blank" rel="noreferrer">
              <MessageCircle /> Falar com o Felipe
            </a>
          </Button>
        </div>
        <img
          src={bota}
          alt="Bota de couro caramelo"
          loading="lazy"
          width={1024}
          height={1024}
          className="brutal-box w-full -rotate-2 object-cover"
        />
      </section>

      <section className="border-y-[3px] border-ink bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-3 md:px-8">
          {numeros.map((n) => (
            <div key={n.rotulo}>
              <p className="font-display text-8xl text-pop">{n.valor}</p>
              <p className="mt-1 text-xl uppercase tracking-wider">{n.rotulo}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
