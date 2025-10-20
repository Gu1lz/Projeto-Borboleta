import Header from "./Componentes/Header.js";
import Destaque from "./Componentes/Destaque.js";
import Servicos from "./Componentes/Servicos.js";
import Sobre from "./Componentes/Sobre.js";
import Produtos from "./Componentes/Produtos.js";
import Footer from "./Componentes/Footer.js";

export default function Home() {
  return (
    <>
    <Header />
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
