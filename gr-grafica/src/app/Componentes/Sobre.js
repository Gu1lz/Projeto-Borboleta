import Style from "./styles/Sobre.css";

const Sobre = () => {
  return (
    <section id="sobreNos">
      <article id="conteudoSobre">
        <a id="linkSobre" href="sobre.html">Saiba mais sobre nossa história clicando aqui</a>
        <section style={{ width: "750px", height: "400px" }}>
      <iframe
        src="https://www.google.com/maps?q=GR+Soluções+Gráficas,+Av.+Prof.+Alfonso+Bovero,+308+-+Perdizes,+São+Paulo+-+SP,+01254-000&z=17&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '12px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
      </article>
    </section>
  );
}

export default Sobre;
