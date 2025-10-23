"use client";
import { useState } from "react";
import Destaque from "./Componentes/Destaque.js";
import Servicos from "./Componentes/Servicos.js";
import Sobre from "./Componentes/Sobre.js";
import Produtos from "./Componentes/Produtos.js";
import Footer from "./Componentes/Footer.js";
import MenuOrcamento from "./Componentes/MenuOrcamento.js";
import Header from "./Componentes/Header.js";
import Checkout from "./Componentes/Checkout.js"

export default function Home() {
  const [aberto, setAberto] = useState(false);

  const abrirMenu = () => setAberto(true);
  const fecharMenu = () => setAberto(false);
  
  const [checkoutAberto, setCheckoutAberto] = useState(false);
  const [carrinho, setCarrinho] = useState([]);

  const abrirCheckout = () => setCheckoutAberto(true);
  const fecharCheckout = () => setCheckoutAberto(false);

  const adicionarProduto = (produto) => {
    setCarrinho([...carrinho, produto]);
    setCheckoutAberto(true);
  };

  return (
    <>
      <Header abrirMenu={abrirMenu} />
      <MenuOrcamento aberto={aberto} fecharMenu={fecharMenu} />
      <Checkout 
        aberto={checkoutAberto}
        fecharMenu={fecharCheckout}
        produtos={carrinho}
        setProdutos={setCarrinho} 
      />
      <main>
        <Destaque />
        <Servicos abrirMenu={abrirMenu}/>
        <Produtos adicionarProduto={adicionarProduto} />
        <Sobre />
      </main>

      <Footer />
    </>
  );
}
