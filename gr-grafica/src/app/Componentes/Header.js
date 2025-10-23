"use client";
import Image from "next/image";
import styles from "./styles/Header.css";
import { useState } from "react";


const Header = ({ abrirMenu }) => {
  const logo = "/Assets/logo.jpeg";
  const links = [
    { href: "#comunicacao", label: "Comunicação Visual" },
    { href: "#copiadora", label: "Copiadora" },
    { href: "#impressao", label: "Impressão Digital" },
    { href: "/sobre", label: "Sobre Nós" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header>
      <nav>
        <Image src={logo} width={200} height={100} alt="logo.jpeg"></Image>

        <ul className="menu-navegacao" id="menu"> 
            {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button onClick={abrirMenu} id="botao-orcamento" >Orçamento</button>
      </nav>
    </header>
  );
}

export default Header;
