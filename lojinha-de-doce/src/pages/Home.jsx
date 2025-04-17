import "./Home.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Cards from "../components/Cards";
import Footer from "../components/Footer"
import Sonho from "../assets/sonho.jpg"
import Pdemel from "../assets/paodemel.jpg"
import Bri from "../assets/bri.jpg"
function Home() {


  return (
    <>
      <Header />
      <Nav />

      <main className="main">
        <div className="conteiner">
          <Cards
            img={Pdemel}
            alt="Imagem"
            titulo="PÃO DE MEL"
            descricao="CONHEÇA NOSSO PÃO DE MEL."
            valor="R$5,00 a unidade!"
            link="/detalhe1"
          />
          <Cards
            img={Sonho}
            alt="Imagem"
            titulo="SONHO"
            descricao="CONHEÇA NOSSO SONHO."
            valor="R$14,99 a unidade!"
            link="/detalhe2"
          />
          <Cards
            img={Bri}
            alt="Imagem"
            titulo="BRIGADEIRO"
            descricao="CONHEÇA NOSSO BRIGADEIRO."
            valor="R$3,00  a unidade!"
            link="/detalhe3"

          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;
