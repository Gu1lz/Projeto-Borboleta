import Style from "./styles/Produtos.css";

const Produtos = ({ adicionarProduto }) => {
  const produtos = [
  {
    id: "cartaoVisita",
    nome: "Cartões de Visita",
    valor: "200",
    preco: "Pack com 20 por R$ 200,00",
    imagem: "/Assets/VISITA.png",
    alt: "Cartão de Visita",
  },
  {
    id: "cartaoBanner",
    nome: "Banners",
    valor: "55",
    preco: "A partir de R$ 55,00",
    imagem: "/Assets/BANNER.jpg",
    alt: "Banner",
  },
  {
    id: "cartaoFlyer",
    nome: "Flyers",
    valor: "150",
    preco: "Pack com 20 por R$ 150,00",
    imagem: "/Assets/FLYER.png",
    alt: "Flyer",
  },
  {
    id: "cartaoAdesivo",
    nome: "Adesivos",
    valor: "170",
    preco: "Pack com 20 por R$ 170,00",
    imagem: "/Assets/ADESSIVO.jpg",
    alt: "Adesivo",
  },
];
  return (
    <section id="produtos">
      <h2 id="tituloProdutos">Produtos B2C</h2>
      <p id="subtituloProdutos">Escolha entre nossos principais produtos</p>

      <ul id="gradeProdutos">
        {produtos.map((produto) => (
          <li key={produto.id} id={produto.id} className="cartaoProduto" onClick={() => adicionarProduto(produto)}>
            <img className="imagemProduto" src={produto.imagem} alt={produto.alt} />
            <article className="infoProduto">
              <h4>{produto.nome}</h4>
              <p className="precoProduto">{produto.preco}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Produtos;
