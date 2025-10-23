"use client";

import Image from "next/image";
import styles from "../../Componentes/styles/SobreDetalhado.css";

const SobreDetalhado = () => {
  return (
    <main>
      <section className="sobre-detalhado">
        <div className="container">
          <h2 className="titulo-secao">Nossa História</h2>
          <p>
            Fundada em 2000, a <strong>GR Soluções Gráficas</strong> nasceu com o objetivo de oferecer serviços gráficos 
            de qualidade superior, aliando tecnologia de ponta a um atendimento humano e personalizado. 
            Ao longo de 25 anos de atuação, nos consolidamos como referência no mercado de <em>comunicação visual</em>, 
            impressão digital e soluções gráficas para empresas de todos os portes.
          </p>
          
          <p>
            Nossa missão é ajudar negócios a se destacarem através de materiais impressos que transmitem 
            confiança, profissionalismo e impacto visual. Acreditamos que cada detalhe importa, por isso 
            cuidamos de cada projeto como se fosse único.
          </p>

          <h2 className="titulo-secao">Por que escolher a GR?</h2>
          <ul className="lista-sobre">
            <li>✔ 25 anos de experiência no setor gráfico</li>
            <li>✔ Atendimento personalizado para cada cliente</li>
            <li>✔ Equipamentos modernos e de alta performance</li>
            <li>✔ Compromisso com prazos e qualidade</li>
          </ul>

          <h2 className="titulo-secao">Nossa Estrutura</h2>
          <p>
            Contamos com um parque gráfico completo, pronto para atender desde pequenas tiragens até 
            grandes produções em escala. Nossa equipe é formada por profissionais especializados em 
            design, impressão e acabamento.
          </p>
        </div>
      </section>
    </main>)
};

export default SobreDetalhado;
