"use client";
import Image from "next/image";
import "./checkout.css";
import React, { useState, use} from "react";

export default function Produtos({ params }) {
    const Produtos = {
    cartaoVisita: {
        id: "cartaoVisita",
        nome: "Cartões de Visita",
        valor: "200",
        preco: "Pack com 20 por R$ 200,00",
        imagem: "/Assets/VISITA.png",
        alt: "Cartão de Visita",
    },
    cartaoBanner: {
        id: "cartaoBanner",
        nome: "Banners",
        valor: "55",
        preco: "A partir de R$ 55,00",
        imagem: "/Assets/BANNER.jpg",
        alt: "Banner",
    },
    cartaoFlyer: {
        id: "cartaoFlyer",
        nome: "Flyers",
        valor: "150",
        preco: "Pack com 20 por R$ 150,00",
        imagem: "/Assets/FLYER.png",
        alt: "Flyer",
    },
    cartaoAdesivo: {
        id: "cartaoAdesivo",
        nome: "Adesivos",
        valor: "170",
        preco: "Pack com 20 por R$ 170,00",
        imagem: "/Assets/ADESSIVO.jpg",
        alt: "Adesivo",
    },
    };
    const paramsCerto = React.use(params);
    const objetoProduto = paramsCerto.id;

    const produto = Produtos[objetoProduto];

    const [quantidade, setQuantidade] = useState(1);

    const adicionar = () => setQuantidade(quantidade + 1);

    const remover = () => {
      if (quantidade > 1) setQuantidade(quantidade - 1);
    };

    const total = produto.valor * quantidade;

    const voltarParaHome = () => {
    window.location.href = "/";
  };

    return (<article className="pagina-checkout">
      <header className="cabecalho-checkout">
        <article className="logo">GR</article>
        <button id="voltar" onClick={voltarParaHome}>
            Home
        </button>
      </header>

      <main className="corpo-checkout">
        <section className="formulario-checkout">
          <h1>Finalizar Compra</h1>

          <form className="grade-formulario">
            
            <fieldset>
              <legend>Dados do Cliente</legend>
              <label>
                Nome Completo
                <input type="text" placeholder="Digite seu nome completo" />
              </label>
              <label>
                E-mail
                <input type="email" placeholder="exemplo@email.com" />
              </label>
              <label>
                Telefone
                <input type="text" placeholder="(00) 00000-0000" />
              </label>
            </fieldset>

            <fieldset>
              <legend>Endereço de Entrega</legend>
              <label>
                Rua / Avenida
                <input type="text" placeholder="Endereço" />
              </label>
              <article className="linha">
                <label>
                  Cidade
                  <input type="text" placeholder="Cidade" />
                </label>
                <label>
                  Estado
                  <input type="text" placeholder="UF" />
                </label>
                <label>
                  CEP
                  <input type="text" placeholder="00000-000" />
                </label>
              </article>
            </fieldset>

            <fieldset>
              <legend>Forma de Pagamento</legend>
              <label className="radio">
                <input type="radio" name="pagamento" /> Cartão de Crédito
              </label>
              <label className="radio">
                <input type="radio" name="pagamento" /> Boleto Bancário
              </label>
              <label className="radio">
                <input type="radio" name="pagamento" /> Pix
              </label>
            </fieldset>

           <article className="item-resumo">
            <Image
              src={produto.imagem}
              alt={produto.alt}
              width={100}
              height={70}
            />

            <article className="info-item">
              <strong>{produto.nome}</strong>
              <p>{produto.preco}</p>
            </article>

            <article className="controle-quantidade">
              <button type="button" onClick={remover}>−</button>
              <span>{quantidade}</span>
              <button type="button" onClick={adicionar}>+</button>
            </article>
          </article>

          <article className="linha-resumo">
            <span>Subtotal</span>
            <span>R$ {produto.valor * quantidade},00</span>
          </article>

          <article className="linha-resumo">
            <span>Frete</span>
            <span>Grátis</span>
          </article>

          <article className="total-resumo">
            <span>Total</span>
            <strong>R$ {produto.valor * quantidade},00</strong>
          </article>

            <article className="acoes">
              <button type="submit" className="botao-principal">Finalizar Pedido</button>
            </article>
          </form>
        </section>
      </main>
    </article>
  );
}