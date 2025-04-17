import Header from "../components/Header.jsx";

import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

import CardDentro from "../components/CardDentro.jsx";
import ProximaViajem from "../components/ProximaViajem.jsx";

function Viajem2() {
  return (
    <>
      <Header />
      <Nav />

      <CardDentro
        descricao={
          <>
            O nosso Sonho tem uma especialidade que o torna único e saboroso. Ele é
            feito com ingredientes selecionados, como baunilha, açúcar de
            padeiro cristalizado e massa branca. Cada mordida
            revela sua textura macia e uma perfeita combinação de sabores e um aroma envolvente.
            <br></br>
            Além disso, nosso Sonho é produzido artesanalmente, garantindo
            qualidade e frescor em cada unidade. <br></br>
            Experimente essa delícia que vai conquistar seu paladar e preencher
            seu melhores sonhos!<br></br>
            🥐🥛🍦😉
          </>
        }
      />
      <ProximaViajem texto="Próximo" caminho="/detalhe3" />
      <Footer />
    </>
  );
}
export default Viajem2;
