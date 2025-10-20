"use client";
import { useState } from "react";

const Funcs = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [checkoutAberto, setCheckoutAberto] = useState(false);
  const [subtotal, setSubtotal] = useState([]);
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [nome, setNome] = useState("");

  const abrirOrca = () => setMenuAberto(true);
  const fecharOrca = () => setMenuAberto(false);

  const abrirCheckout = () => setCheckoutAberto(true);
  const fecharCheckout = () => setCheckoutAberto(false);

  const menuSan = () => {};

  const enviarOrcamento = (e) => {
    e.preventDefault();
    setMensagemSucesso(
      `Obrigado, ${nome}! Seu orçamento foi enviado com sucesso. Em breve, um de nossos atendentes entrará em contato.`
    );

    setNome("");
    setTimeout(() => {
      fecharOrca();
      setMensagemSucesso("");
    }, 3000);
  };

  const adicionarAoCheckout = (nomeItem, preco) => {
    setSubtotal([...subtotal, { nome: nomeItem, preco }]);
    abrirCheckout();
  };

  const removerDoCheckout = (indice) => {
    const novoSubtotal = [];
    for (let i = 0; i < subtotal.length; i++) {
      if (i !== indice) {
        novoSubtotal.push(subtotal[i]);
      }
    }
    setSubtotal(novoSubtotal);
  };

  let total = 0;
  for (let i = 0; i < subtotal.length; i++) {
    if (subtotal[i] != null) {
      total += subtotal[i].preco;
    }
  }

  return {
    menuAberto,
    checkoutAberto,
    subtotal,
    mensagemSucesso,
    nome,
    abrirOrca,
    fecharOrca,
    abrirCheckout,
    fecharCheckout,
    menuSan,
    enviarOrcamento,
    adicionarAoCheckout,
    removerDoCheckout,
    total,
    setNome
  };
}

export default Funcs;