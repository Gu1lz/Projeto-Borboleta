


const MenuCompra = () => {
  return (
    <>
      <section id="menuCompra">
        <article>
          <button>✖</button>
          <h2>Solicitar Orçamento</h2>
          <form id="formOrcamento">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />

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
            <article id="mensagemSucesso"></article>
          </form>
        </article>
      </section>

      <section id="checkout">
        <article className="checkout-cartao">
          <button className="fechar">✖</button>
          <h2>Finalizar Compra</h2>

          <article id="itensCheckout"></article>
          <p id="subtotal">Subtotal: R$ 0,00</p>

          <form id="formCheckout">
            <label htmlFor="nomeCliente">Nome:</label>
            <input type="text" id="nomeCliente" name="nomeCliente" required />
            <br />

            <label htmlFor="end">Endereço:</label>
            <input type="text" id="end" name="end" required />
            <br />

            <label htmlFor="emailCliente">E-mail:</label>
            <input type="email" id="emailCliente" name="emailCliente" required />
            <br />

            <label htmlFor="pagamento">Forma de pagamento</label>
            <select id="pagamento" name="pagamento" required>
              <option value="">Selecione</option>
              <option value="cartao">Cartão de Crédito</option>
              <option value="pix">PIX</option>
              <option value="boleto">Boleto</option>
            </select>

            <button type="submit">Confirmar Compra</button>
            <article id="mensagemSucessoCheckout"></article>
          </form>
        </article>
      </section>
    </>
  );
}

export default MenuCompra;