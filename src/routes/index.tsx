import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Ruler, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/site/Marquee";
import { ProductCard } from "@/components/site/ProductCard";
import { categorias, linkWhatsapp, produtos } from "@/data/loja";
import heroTenis from "@/assets/hero-tenis.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Felipe Pardo Vendas — Sapatos com atitude" },
      {
        name: "description",
        content: "Tênis, sociais, botas e femininos. Veja a vitrine da Felipe Pardo Vendas e compre pelo WhatsApp.",
      },
      { property: "og:title", content: "Felipe Pardo Vendas — Sapatos com atitude" },
      {
        property: "og:description",
        content: "Tênis, sociais, botas e femininos. Veja a vitrine e compre pelo WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const vantagens = [
  { icon: MessageCircle, titulo: "Atendimento direto", texto: "Fale com a gente no WhatsApp e tire todas as dúvidas." },
  { icon: Ruler, titulo: "Ajuda com a numeração", texto: "Te orientamos para acertar o tamanho de primeira." },
  { icon: ShieldCheck, titulo: "Qualidade garantida", texto: "Modelos escolhidos a dedo, com acabamento caprichado." },
  { icon: Truck, titulo: "Entrega combinada", texto: "Combine retirada ou entrega direto com o vendedor." },
];

function Index() {
  const destaques = produtos.filter((p) => p.destaque);
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:px-8 md:py-20">
        <div>
          <p className="inline-block border-[3px] border-ink bg-pop px-3 py-1 font-display text-xl shadow-brutal-sm">
            Nova coleção chegando
          </p>
          <h1 className="mt-6 text-7xl sm:text-8xl lg:text-[8.5rem]">
            Pisa
            <br />
            <span className="text-primary">forte.</span>
            <br />
            <span className="text-stroke">Pisa bonito.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Na Felipe Pardo Vendas você encontra tênis, sapatos sociais, botas e femininos. Escolheu? É só chamar no
            WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="brutal" size="xl">
              <Link to="/produtos">
                Ver produtos <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="brutalOutline" size="xl">
              <a href={linkWhatsapp()} target="_blank" rel="noreferrer">
                <MessageCircle /> Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-3 -top-3 z-10 rotate-6 border-[3px] border-ink bg-primary px-4 py-2 font-display text-3xl shadow-brutal">
            Destaque!
          </div>
          <img
            src={heroTenis}
            alt="Tênis laranja e preto em destaque"
            width={1536}
            height={1152}
            className="brutal-box w-full bg-pop object-cover"
          />
        </div>
      </section>

      <Marquee items={["Tênis", "Social", "Botas", "Femininos", "Atendimento no WhatsApp"]} />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-6xl md:text-7xl">
            Os mais <span className="bg-pop px-2">pedidos</span>
          </h2>
          <Link to="/produtos" className="font-display text-2xl underline underline-offset-8 hover:text-primary">
            Ver vitrine completa →
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {destaques.map((p) => (
            <ProductCard key={p.id} produto={p} />
          ))}
        </div>
      </section>

      <section className="border-y-[3px] border-ink bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <h2 className="text-6xl md:text-7xl">Escolha seu estilo</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {categorias.map((c) => (
              <Link
                key={c}
                to="/produtos"
                search={{ categoria: c }}
                className="brutal-box brutal-lift bg-background p-6 font-display text-4xl md:text-5xl"
              >
                {c}
                <ArrowRight className="mt-4 h-8 w-8" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="text-6xl md:text-7xl">Por que comprar aqui</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vantagens.map(({ icon: Icon, titulo, texto }) => (
            <div key={titulo} className="brutal-box bg-card p-6">
              <span className="grid h-14 w-14 place-items-center border-[3px] border-ink bg-pop">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-3xl">{titulo}</h3>
              <p className="mt-2 text-muted-foreground">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="brutal-box flex flex-col items-start gap-6 bg-pop p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <h2 className="text-5xl md:text-6xl">Achou o seu par? Chama no zap!</h2>
          <Button asChild variant="brutalInk" size="xl">
            <a href={linkWhatsapp()} target="_blank" rel="noreferrer">
              <MessageCircle /> Falar agora
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
