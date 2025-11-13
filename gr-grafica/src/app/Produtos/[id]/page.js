"use client";
import Image from "next/image";
import "./checkout.css";
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

    const adicionar = () => setQuantidade(quantidade + 1);

    const remover = () => {
      if (quantidade > 1) setQuantidade(quantidade - 1);
    };

    const total = produto.valor * quantidade;

    const [dadosPagamento, setDadosPagamento] = useState(null);
    const [uniqueKey, setUniqueKey] = useState(null);
    
    const mercadoPago = () => {
      const mp = new window.MercadoPago("TEST-6952800602414772-111123-db09b23090b792a4fd7bf6cdee306422-305558686");  
    };

    const voltarParaHome = () => {
    window.location.href = "/";
  };

  const gerarPagamento = (infos) => {
    const valores = infos.target;
    const obj = Object.fromEntries(new FormData(valores).entries());
    const key = `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
    setUniqueKey(key);
    
    const data = {
      transaction_amount: Number(obj.transactionAmount),
      description: obj.description,
      payment_method_id: "pix",
      payer: {
        email: obj.email,
        first_name: obj.payerFirstName,
        last_name: obj.payerLastName,
        identification: { type: "CPF", number: obj.cpf },
      },
      address: {
        zip_code: "555555555",
        street_name: "555555555",
        street_number: "555555555",
        neighborhood: "555555555",
        city: "555555555",
        federal_unit: "555555555",
      },
    };
    setDadosPagamento(data);
  }

  useEffect(() => {
    if (dadosPagamento && uniqueKey) {
      fetch("https://api.mercadopago.com/v1/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer TEST-6952800602414772-111123-db09b23090b792a4fd7bf6cdee306422-305558686",
          "X-Idempotency-Key": uniqueKey,
        },
        body: JSON.stringify(dadosPagamento),
      })
        .then((res) => res.json())
        .then((result) => console.log(result))
        .catch((err) => console.error(err));
    }
  }, [dadosPagamento, uniqueKey]);

    return (
    <article className="pagina-checkout">
      <header className="cabecalho-checkout">
        <article className="logo">GR</article>
        <button id="voltar" onClick={voltarParaHome}>
            Home
        </button>
      </header>
      <script src="https://sdk.mercadopago.com/js/v2" onLoad={mercadoPago}></script>
      <main className="corpo-checkout">
        <section className="formulario-checkout">
          <h1>Finalizar Compra</h1>

          <form className="grade-formulario" id="form-checkout" action={gerarPagamento}>
            
            <fieldset>
              <legend>Dados do Cliente</legend>
              <label>
                Nome
                <input id="form-checkout__payerFirstName" name="payerFirstName" type="text" placeholder="Digite seu nome completo" />
              </label>
              <label>
              Sobrenome
              <input
                id="form-checkout__payerLastName"
                name="payerLastName"
                type="text"
                placeholder="Digite seu sobrenome"
              />
              </label>
              <label>
                E-mail
                <input id="form-checkout__email" name="email"type="email" placeholder="exemplo@email.com" />
              </label>
              <label>
                Cpf
                <input id="form-checkout_cpf" name="cpf"type="text" placeholder="123456789" />
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
            <input type="hidden" name="transactionAmount" id="transactionAmount" value={produto.valor * quantidade}/>
            <input type="hidden" name="description" id="description" value={produto.nome}/>
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