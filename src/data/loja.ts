import heroTenis from "@/assets/hero-tenis.jpg";
import sapatoSocial from "@/assets/sapato-social.jpg";
import bota from "@/assets/bota.jpg";
import salto from "@/assets/salto.jpg";
import tenisBranco from "@/assets/tenis-branco.jpg";
import sandalia from "@/assets/sandalia.jpg";

// Contact details below are placeholders until the store owner provides the real ones.
export const loja = {
  nome: "Felipe Pardo Vendas",
  whatsapp: "5592999999999",
  whatsappExibicao: "(92) 99999-9999",
  instagram: "@felipepardovendas",
  endereco: "Manaus — AM",
  horario: "Seg a Sáb · 9h às 18h",
};

export type Categoria = "Tênis" | "Social" | "Botas" | "Femininos";

export const categorias: Categoria[] = ["Tênis", "Social", "Botas", "Femininos"];

export interface Produto {
  id: string;
  nome: string;
  categoria: Categoria;
  descricao: string;
  numeracao: string;
  imagem: string;
  destaque?: boolean;
}

export const produtos: Produto[] = [
  {
    id: "runner-blaze",
    nome: "Runner Blaze",
    categoria: "Tênis",
    descricao: "Tênis esportivo com amortecimento a ar e cabedal em tela respirável.",
    numeracao: "37 ao 44",
    imagem: heroTenis,
    destaque: true,
  },
  {
    id: "classic-white",
    nome: "Classic White",
    categoria: "Tênis",
    descricao: "Tênis casual de couro branco. Combina com tudo, do jeans ao social.",
    numeracao: "34 ao 44",
    imagem: tenisBranco,
    destaque: true,
  },
  {
    id: "oxford-preto",
    nome: "Oxford Preto",
    categoria: "Social",
    descricao: "Sapato social em couro legítimo, solado firme para o dia todo.",
    numeracao: "38 ao 44",
    imagem: sapatoSocial,
    destaque: true,
  },
  {
    id: "bota-coturno",
    nome: "Bota Coturno Caramelo",
    categoria: "Botas",
    descricao: "Bota de couro com cadarço e solado tratorado. Estilo e resistência.",
    numeracao: "37 ao 44",
    imagem: bota,
  },
  {
    id: "scarpin-vermelho",
    nome: "Scarpin Vermelho",
    categoria: "Femininos",
    descricao: "Scarpin de salto fino e bico fino. Para causar em qualquer ocasião.",
    numeracao: "33 ao 39",
    imagem: salto,
    destaque: true,
  },
  {
    id: "sandalia-caramelo",
    nome: "Sandália Caramelo",
    categoria: "Femininos",
    descricao: "Sandália rasteira com fivela, leve e confortável para o calor.",
    numeracao: "33 ao 39",
    imagem: sandalia,
  },
];

export function linkWhatsapp(mensagem?: string) {
  const texto = mensagem ?? `Olá! Vim pelo site da ${loja.nome} e quero saber mais sobre os sapatos.`;
  return `https://wa.me/${loja.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export function mensagemProduto(produto: Pick<Produto, "nome">) {
  return `Olá! Tenho interesse no ${produto.nome}. Tem disponível no meu número?`;
}
