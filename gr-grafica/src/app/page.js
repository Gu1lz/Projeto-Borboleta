"use client";
import { useState } from "react";
import Destaque from "./Componentes/Destaque.js";
import Servicos from "./Componentes/Servicos.js";
import Sobre from "./Componentes/Sobre.js";
import Produtos from "./Componentes/Produtos.js";
import Footer from "./Componentes/Footer.js";
import MenuOrcamento from "./Componentes/MenuOrcamento.js";
import Header from "./Componentes/Header.js";

export default function Home() {
  const [aberto, setAberto] = useState(false);

  const abrirMenu = () => setAberto(true);
  const fecharMenu = () => setAberto(false);

  return (
    <>
      <Header abrirMenu={abrirMenu} />
      <MenuOrcamento aberto={aberto} fecharMenu={fecharMenu} />

      <main>
        <Destaque />
        <Servicos />
        <Produtos />
        <Sobre />
      </main>

      <Footer />
    </>
  );
}
