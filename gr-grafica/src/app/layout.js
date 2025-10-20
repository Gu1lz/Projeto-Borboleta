import "./globals.css";

export const metadata = {
  title: "GR Soluções Gráficas - 25 Anos de Experiência"
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
