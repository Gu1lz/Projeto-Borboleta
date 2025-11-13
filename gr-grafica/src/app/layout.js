import "./globals.css";

export const metadata = {
  title: "GR Soluções Gráficas - 25 Anos de Experiência",
  description: "GR Soluções para todo público!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
