import style from "./Destaque.css";

const Destaque = () => {
    return (
         <section id="destaque">
            <article id="conteudo-destaque">
                <h2>Soluções Gráficas</h2>
                <p>Com 25 anos de experiência, oferecemos comunicação visual, serviços de copiadora e impressão digital de alta qualidade, ajudando a impulsionar seu negócio com soluções confiáveis e eficientes.</p>
                <article id="botoes-destaque">
                    <a href="#orcamento" id="botao-primario"></a>
                    <a href="#produtos" id="botao-secundario">Ver Produtos</a>
                </article>
            </article>
        </section>
    )
}

export default Destaque;