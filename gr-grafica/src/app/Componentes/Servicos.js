import styles from "./Servicos.css";

const Servicos = () => {
  return (
    <section id="servicos">
      <h2 id="tituloSecao">Nossas Principais Soluções Para Empresas B2B</h2>
      <article id="gradeServicos">
        <article id="comunicacao" className="cartaoServico">
          <span className="iconeServico">📢</span>
          <h3>Comunicação Visual</h3>
          <p>Banners, placas, adesivos e sinalização completa para sua empresa.</p>
          <a href="#">Saiba mais →</a>
        </article>

        <article id="copiadora" className="cartaoServico">
          <span className="iconeServico">📋</span>
          <h3>Copiadora</h3>
          <p>Serviços de cópia rápida e eficiente para documentos e materiais.</p>
          <a href="#">Saiba mais →</a>
        </article>

        <article id="impressao" className="cartaoServico">
          <span className="iconeServico">🖨️</span>
          <h3>Impressão Digital</h3>
          <p>Impressão de alta qualidade em diversos formatos e materiais.</p>
          <a href="#">Saiba mais →</a>
        </article>
      </article>
    </section>
  );
}

export default Servicos;