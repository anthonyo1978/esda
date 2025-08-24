import { Roboto_Condensed } from "next/font/google";
import Header from "./components/header"; 
import Footer from "./components/footer";
import "../globals.css";
import "../custom.css";

const roboto = Roboto_Condensed({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${roboto.className} antialiased`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}