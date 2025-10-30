export default function Produto({ params }){
    const produtos = {
        cartaoVisita: {
        nome: "Cartões de Visita",
        valor: "200",
        preco: "Pack com 20 por R$ 200,00",
        imagem: "/Assets/VISITA.png",
        alt: "Cartão de Visita",
    },
        cartaoBanner: {
        nome: "Banners",
        valor: "55",
        preco: "A partir de R$ 55,00",
        imagem: "/Assets/BANNER.jpg",
        alt: "Banner",
    },
        cartaoFlyer: {
        nome: "Flyers",
        valor: "150",
        preco: "Pack com 20 por R$ 150,00",
        imagem: "/Assets/FLYER.png",
        alt: "Flyer",
    },
        cartaoAdesivo: {
        nome: "Adesivos",
        valor: "170",
        preco: "Pack com 20 por R$ 170,00",
        imagem: "/Assets/ADESSIVO.jpg",
        alt: "Adesivo",
    }
};

    const selecionado = produtos[params.id]

    return {
        <h1> selecionado.nome</h1>;

    };

}