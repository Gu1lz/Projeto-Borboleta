"use client"
import Header from "./componentes/Header.js";
import Footer from "../Componentes/Footer.js";
import Detalhes from "./componentes/Detalhes.js"
import { useState } from "react";

export default function Sobre() {

    const [aberto, setAberto] = useState(false);
  
    const abrirMenu = () => setAberto(true);
    const fecharMenu = () => setAberto(false);
  return (
    <>
      <Header abrirMenu={abrirMenu}/>
      <Detalhes />
      <Footer />
    </>
  );
}
