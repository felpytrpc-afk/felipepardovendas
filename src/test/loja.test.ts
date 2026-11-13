import { describe, expect, it } from "vitest";
import { linkWhatsapp, loja, mensagemProduto } from "@/data/loja";

describe("Pedido pelo WhatsApp", () => {
  it("abre a conversa com o número da loja", () => {
    expect(linkWhatsapp()).toMatch(new RegExp(`^https://wa.me/${loja.whatsapp}\\?text=`));
  });

  it("leva o nome do produto escolhido na mensagem", () => {
    const url = new URL(linkWhatsapp(mensagemProduto({ nome: "Oxford Preto" })));
    expect(url.searchParams.get("text")).toContain("Oxford Preto");
  });
});
