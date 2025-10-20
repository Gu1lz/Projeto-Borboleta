import styles from "./Header.css";
import Logo from "../Assets/logo.jpeg";



const Header = () => {

  const links = [
    { href: "#comunicacao", label: "Comunicação Visual" },
    { href: "#copiadora", label: "Copiadora" },
    { href: "#impressao", label: "Impressão Digital" },
    { href: "sobre.html", label: "Sobre Nós" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header>
      <nav>
        <img src={Logo} id="logo" alt="Logo" />
        <ul className="menu-navegacao" id="menu"> 
            {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button id="botao-orcamento">Orçamento</button>
      </nav>
    </header>
  );
}

export default Header;
