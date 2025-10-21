"use client";
import { useState } from "react";
import "./styles/MenuOrcamento.css";

export default function MenuOrcamento({ aberto, fecharMenu }) {
  const [mensagem, setMensagem] = useState("");
  const [nome, setNome] = useState("");

  const enviarOrcamento = (e) => {
    e.preventDefault();
    setMensagem(`Obrigado, ${nome}! Seu orçamento foi enviado com sucesso.`);
    setNome("");
    e.target.reset();
    setTimeout(() => {
      setMensagem("");
      fecharMenu();
    }, 3000);
  };

  if (!aberto) return null;

  return (
    <section className="overlay" onClick={fecharMenu}>
      <article className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="fechar" onClick={fecharMenu}>✖</button>
        <h2>Solicitar Orçamento</h2>
        <form onSubmit={enviarOrcamento}>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Empresa:
            <input type="text" name="empresa" required />
          </label>
          <label>
            Serviço desejado:
            <select name="servico" required>
              <option value="">Selecione</option>
              <option value="comunicacao">Comunicação Visual</option>
              <option value="copiadora">Copiadora</option>
              <option value="impressao">Impressão Digital</option>
            </select>
          </label>
          <label>
            Mensagem:
            <textarea name="mensagem" rows={6} required />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {mensagem && <div className="mensagem">{mensagem}</div>}
      </article>
    </section>
  );
}
