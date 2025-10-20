'use client';
import React from "react";
import "./styles/MenuCompra.css";
import useCheckout from "./Funcs.js";

const MenuCompra = () => {
  const {
    menuAberto,
    checkoutAberto,
    fecharOrca,
    fecharCheckout,
    enviarOrcamento,
    mensagemSucesso,
    nome,
    setNome,
    subtotal,
    total
  } = useCheckout();

  return (
    <>
      {menuAberto && (
        <section id="menuCompra">
          <article>
            <button onClick={fecharOrca}>✖</button>
            <h2>Solicitar Orçamento</h2>
            <form id="formOrcamento" onSubmit={enviarOrcamento}>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="end">Empresa:</label>
              <input type="text" id="end" name="end" required />
              <label htmlFor="servico">Serviço desejado:</label>
              <select id="servico" name="servico" required>
                <option value="">Selecione</option>
                <option value="comunicacao">Comunicação Visual</option>
                <option value="copiadora">Copiadora</option>
                <option value="impressao">Impressão Digital</option>
              </select>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
              <button type="submit">Enviar</button>
            </form>
            {mensagemSucesso && (
              <article id="mensagemSucesso">{mensagemSucesso}</article>
            )}
          </article>
        </section>
      )}

      {checkoutAberto && (
        <section id="checkout">
          <article className="checkout-cartao">
            <button className="fechar" onClick={fecharCheckout}>✖</button>
            <h2>Finalizar Compra</h2>
            <div id="itensCheckout">
              {subtotal.length > 0 ? (
                subtotal.map((item, index) => (
                  <p key={index}>
                    {item.nome}: R$ {item.preco.toFixed(2)}{" "}
                    <button onClick={() => removerDoCheckout(index)}>Remover</button>
                  </p>
                ))
              ) : (
                <p>Nenhum item adicionado</p>
              )}
            </div>
            <p id="subtotal">Subtotal: R$ {total.toFixed(2)}</p>
            <form id="formCheckout">
              <label htmlFor="nomeCliente">Nome:</label>
              <input type="text" id="nomeCliente" name="nomeCliente" required />
              <label htmlFor="end">Endereço:</label>
              <input type="text" id="end" name="end" required />
              <label htmlFor="emailCliente">E-mail:</label>
              <input type="email" id="emailCliente" name="emailCliente" required />
              <label htmlFor="pagamento">Forma de pagamento:</label>
              <select id="pagamento" name="pagamento" required>
                <option value="">Selecione</option>
                <option value="cartao">Cartão de Crédito</option>
                <option value="pix">PIX</option>
                <option value="boleto">Boleto</option>
              </select>
              <button type="submit">Confirmar Compra</button>
            </form>
          </article>
        </section>
      )}
    </>
  );
};

export default MenuCompra;
