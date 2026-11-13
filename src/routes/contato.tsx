import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { linkWhatsapp, loja } from "@/data/loja";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Felipe Pardo Vendas" },
      { name: "description", content: "Fale com a Felipe Pardo Vendas pelo WhatsApp, Instagram ou visite a loja." },
      { property: "og:title", content: "Contato — Felipe Pardo Vendas" },
      { property: "og:description", content: "WhatsApp, Instagram, endereço e horário de atendimento." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const itens = [
    { icon: MessageCircle, titulo: "WhatsApp", valor: loja.whatsappExibicao, href: linkWhatsapp() },
    { icon: Instagram, titulo: "Instagram", valor: loja.instagram },
    { icon: MapPin, titulo: "Onde estamos", valor: loja.endereco },
    { icon: Clock, titulo: "Horário", valor: loja.horario },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
      <h1 className="text-7xl md:text-8xl">
        Bora <span className="text-primary">conversar</span>
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        O jeito mais rápido de comprar é pelo WhatsApp. Mande o modelo e a numeração que a gente responde rapidinho.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {itens.map(({ icon: Icon, titulo, valor, href }) => {
          const conteudo = (
            <>
              <span className="grid h-14 w-14 shrink-0 place-items-center border-[3px] border-ink bg-pop">
                <Icon className="h-7 w-7" />
              </span>
              <div>
                <p className="font-display text-2xl text-primary">{titulo}</p>
                <p className="text-xl font-semibold">{valor}</p>
              </div>
            </>
          );
          return href ? (
            <a
              key={titulo}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="brutal-box brutal-lift flex items-center gap-5 bg-card p-6"
            >
              {conteudo}
            </a>
          ) : (
            <div key={titulo} className="brutal-box flex items-center gap-5 bg-card p-6">
              {conteudo}
            </div>
          );
        })}
      </div>

      <div className="brutal-box mt-12 bg-primary p-8 md:p-12">
        <h2 className="text-5xl md:text-6xl">Pronto pra escolher seu par?</h2>
        <Button asChild variant="brutalInk" size="xl" className="mt-6">
          <a href={linkWhatsapp()} target="_blank" rel="noreferrer">
            <MessageCircle /> Chamar no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
