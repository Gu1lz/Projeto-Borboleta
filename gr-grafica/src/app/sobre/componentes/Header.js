"use client";
import Image from "next/image";
import styles from "../../Componentes/styles/Header.css"
import Link from "next/link";


const Header = ({ abrirMenuSan }) => {
  const logo = "/Assets/logo.jpeg";
  const links = [
    { href: "#comunicacao", label: "Comunicação Visual" },
    { href: "#copiadora", label: "Copiadora" },
    { href: "#impressao", label: "Impressão Digital" },
    { href: "sobre.html", label: "Sobre Nós" },
    { href: "#contato", label: "Contato" },
  ];
  const voltarParaHome = () => {
    window.location.href = "/";
  };
  return (
    <header>
      <nav>
        <Image src={logo} width={200} height={100} alt="logo.jpeg"></Image>
        <button className="menu-san" onClick={abrirMenuSan}>☰</button>
        <ul className="menu-navegacao" id="menu"> 
            {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
         <button id="botao-orcamento" onClick={voltarParaHome}>
            Home
        </button>
      </nav>
    </header>
  );
}

export default Header;
