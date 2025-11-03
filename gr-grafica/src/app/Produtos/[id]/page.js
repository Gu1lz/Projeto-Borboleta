import Image from "next/image";
import "./checkout.css";

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

    const objetoProduto = params.id
    const produto = Produtos[objetoProduto]

    return (<article className="pagina-checkout">
      <header className="cabecalho-checkout">
        <article className="logo">GR-graficas</article>
        <nav className="caminho">Home <span>›</span> Carrinho <span>›</span> Checkout</nav>
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

            <article className="acoes">
              <button type="submit" className="botao-principal">Finalizar Pedido</button>
            </article>
          </form>
        </section>

        <aside className="resumo-pedido">
          <article className="cartao-resumo">
            <h2>Resumo do Pedido</h2>
            <article className="item-resumo">
              <Image src={produto.imagem} alt={produto.alt} width={100} height={70} />
              <article>
                <strong>{produto.nome}</strong>
                <p>{produto.preco}</p>
              </article>
            </article>

            <article className="linha-resumo">
              <span>Subtotal</span>
              <span>R$ {produto.valor},00</span>
            </article>
            <article className="linha-resumo">
              <span>Frete</span>
              <span>Grátis</span>
            </article>

            <article className="total-resumo">
              <span>Total</span>
              <strong>R$ {produto.valor},00</strong>
            </article>
          </article>
        </aside>
      </main>
    </article>
  );
}