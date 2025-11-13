"use client";
import Image from "next/image";
import "./checkout.css";
import "./popUp.css";
import React, { useState, useEffect, use} from "react";


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
    const [valorPopUp, setPopUp] = useState(false);
    const [pagamentoSelecionado, setPagamentoSelecionado] = useState("");
    const [imagemPagamento, setImagemPagamento] = useState("");

    const adicionar = () => setQuantidade(quantidade + 1);

    const remover = () => {
      if (quantidade > 1) setQuantidade(quantidade - 1);
    };

    const total = produto.valor * quantidade;
    

    const voltarParaHome = () => {
      window.location.href = "/";
    };

    const extrairValores = (itens) => {
      itens.preventDefault();
      const valores = new FormData(itens.target);
      const obj = Object.fromEntries(valores.entries());
      
      console.log(obj);
      setPagamentoSelecionado(obj.pagamento);
      setPopUp(true);
    };

    useEffect(() => {
      const valor = objetoProduto;
          if (pagamentoSelecionado === "pix") {
          const url = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(valor)}`;
          fetch(url)
            .then(res => {
              if (res.ok) setImagemPagamento(url);
              else console.error("Erro ao gerar QR Code");
            })
            .catch(err => console.error(err));
        }

        if (pagamentoSelecionado === "boleto") {
          const url = `https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(valor)}&scale=4&includetext`;
          fetch(url)
            .then(res => {
              if (res.ok) setImagemPagamento(url);
              else console.error("Erro ao gerar código de barras");
            })
            .catch(err => console.error(err));
        }
      }, [valorPopUp]);

    

    const closePopup = () => setPopUp(false);

    return (
    <article className="pagina-checkout">
      <header className="cabecalho-checkout">
        <article className="logo">GR</article>
        <button id="voltar" onClick={voltarParaHome}>
            Home
        </button>
      </header>
      <main className="corpo-checkout">
        <section className="formulario-checkout">
          <h1>Finalizar Compra</h1>

          <form className="grade-formulario" id="form-checkout" onSubmit={extrairValores}>
            
            <fieldset required>
              <legend>Dados do Cliente</legend>
              <label>
                Nome
                <input type="text" placeholder="Digite seu nome" required/>
              </label>
              <label>
              Sobrenome
              <input type="text" placeholder="Digite seu sobrenome" required/>
              </label>
              <label>
                E-mail
                <input type="email" placeholder="exemplo@email.com" required/>
              </label>
              <label>
                Cpf
                <input type="text" placeholder="123456789" required/>
              </label>
            </fieldset>

            <fieldset>
              <legend>Endereço de Entrega</legend>
              <label>
                Rua / Avenida
                <input type="text" placeholder="Endereço" required/>
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
                <input type="radio" name="pagamento" value="boleto" required  /> Boleto Bancário
              </label>
              <label className="radio">
                <input type="radio" name="pagamento" value="pix" /> Pix
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
      {valorPopUp && (
        <article className="popup">
          <article className="popup-content">
            <h2>Pagamento - {pagamentoSelecionado}</h2>
            {imagemPagamento && <img src={imagemPagamento} alt={pagamentoSelecionado} />}
            <button onClick={closePopup}>Fechar</button>
          </article>
        </article>
      )}
    </article>
  );
}