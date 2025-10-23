"use client";
import "./styles/Checkout.css";

import { useState } from "react";

const Checkout = ({ aberto, fecharMenu, produtos = [], setProdutos }) => {
  const [mensagem, setMensagem] = useState("");
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("");

const calcularTotal = () => {
  const total = produtos.reduce((acc, item) => acc + Number(item.valor), 0);
  return total.toFixed(2);
};


  const enviarCheckout = () => {
    setMensagem(`Obrigado, ${nome}! Compra finalizada com sucesso.`);
    setNome("");
    setEndereco("");
    setPagamento("");

    setTimeout(() => {
      setMensagem("");
      fecharMenu();
    }, 3000);
  };

  const removerItem = (indice) => {
    const novosItens = produtos.filter((_, i) => i !== indice);
    setProdutos(novosItens);
  };

  if (!aberto) return null;

  return (
    <section className="overlay" onClick={fecharMenu}>
      <article className="checkout-cartao" onClick={(e) => e.stopPropagation()}>
        <h2>Finalizar Compra</h2>

        <div id="itensCheckout">
          {produtos.length === 0 && <p>Carrinho vazio</p>}
          {produtos.map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>{item.nome} - R$ {item.valor}</span>
              <button type="button" onClick={() => removerItem(i)}>Remover</button>
            </div>
          ))}
        </div>

        <p id="subtotal">Subtotal: R$ {calcularTotal()}</p>

        <form>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </label>
          <label>
            E-mail:
            <input
              type="email"
              name="email"
              required
            />
          </label>
          <label>
            Endereço:
            <input
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </label>
          <label>
            Forma de Pagamento:
            <select
              value={pagamento}
              onChange={(e) => setPagamento(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="cartao">Cartão de Crédito</option>
              <option value="pix">PIX</option>
              <option value="boleto">Boleto</option>
            </select>
          </label>
          <button type="button" onClick={enviarCheckout}>Confirmar Compra</button>
        </form>

        {mensagem && <div className="mensagem">{mensagem}</div>}
      </article>
    </section>
  );
};

export default Checkout;
