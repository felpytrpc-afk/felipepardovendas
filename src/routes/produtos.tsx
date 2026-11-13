import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { categorias, produtos, type Categoria } from "@/data/loja";

type Busca = { categoria?: Categoria };

export const Route = createFileRoute("/produtos")({
  validateSearch: (search: Record<string, unknown>): Busca => {
    const c = search.categoria;
    return categorias.includes(c as Categoria) ? { categoria: c as Categoria } : {};
  },
  head: () => ({
    meta: [
      { title: "Produtos — Felipe Pardo Vendas" },
      { name: "description", content: "Vitrine de tênis, sapatos sociais, botas e femininos da Felipe Pardo Vendas." },
      { property: "og:title", content: "Produtos — Felipe Pardo Vendas" },
      { property: "og:description", content: "Confira a vitrine completa e peça o seu pelo WhatsApp." },
    ],
  }),
  component: Produtos,
});

function Produtos() {
  const { categoria } = Route.useSearch();
  const lista = categoria ? produtos.filter((p) => p.categoria === categoria) : produtos;

  const chip =
    "border-[3px] border-ink px-4 py-2 font-display text-2xl transition-colors hover:bg-pop data-[ativo=true]:bg-ink data-[ativo=true]:text-ink-foreground";

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
      <h1 className="text-7xl md:text-8xl">
        A <span className="text-primary">vitrine</span>
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Gostou de algum modelo? Toque em “Quero esse” e fale direto com a gente no WhatsApp.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/produtos" search={{}} data-ativo={!categoria} className={chip}>
          Todos
        </Link>
        {categorias.map((c) => (
          <Link key={c} to="/produtos" search={{ categoria: c }} data-ativo={categoria === c} className={chip}>
            {c}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((p) => (
          <ProductCard key={p.id} produto={p} />
        ))}
      </div>
    </section>
  );
}
