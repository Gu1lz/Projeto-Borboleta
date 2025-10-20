import style from "./Footer.css";

const Footer = () => {

  return (
  <footer id="contato">
      <div className="footer-container">

        <aside className="footer-section">
          <div className="social-icons">
            <a href="#" className="icone-social">f</a>
            <a href="#" className="icone-social">@</a>
            <a href="#" className="icone-social">in</a>
          </div>
          <p>25 anos oferecendo soluções gráficas de qualidade superior.</p>
        </aside>

        <nav className="footer-section">
          <h3>Serviços</h3>
          <ul>
            <li><a href="#comunicacao">Comunicação Visual</a></li>
            <li><a href="#copiadora">Copiadora</a></li>
            <li><a href="#impressao">Impressão Digital</a></li>
            <li><a href="#">Design Gráfico</a></li>
          </ul>
        </nav>

        <nav className="footer-section">
          <h3>Empresa</h3>
          <ul>
            <li><a href="sobre.html">Sobre Nós</a></li>
            <li><a href="#">Nossa História</a></li>
            <li><a href="#">Trabalhe Conosco</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>

        <address className="footer-section">
          <h3>Contato</h3>
          <ul>
            <li>📞 (11) 94727-0679</li>
            <li>✉️ contato@grsolucoesgraficas.com.br</li>
            <li>📍 São Paulo, SP</li>
          </ul>
        </address>

      </div>

      <div className="footer-bottom">
        <p>2025 GR Soluções Gráficas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;