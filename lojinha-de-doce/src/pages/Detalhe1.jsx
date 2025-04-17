
import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import CardDentro from "../components/CardDentro.jsx";
import ProximaViajem from "../components/ProximaViajem.jsx"
import Paodemel2 from "../assets/paodemel2.jpg"









function Viajem1() {
   

  return (
    <>
      <Header />
      <Nav/>

  <CardDentro nome={Paodemel2} 
  descricao= {
    <>
    <center>
       <h1>O NOSSO PÃO DE MEL !!!!</h1>
    O nosso Pão de Mel tem especialidades que o tornam único. Ele é feito com ingredientes selecionados, como mel puro, especiarias aromáticas e
    um toque de chocolate. Cada mordida revela uma combinação perfeita de sabores, com uma textura macia e um aroma envolvente.
    Além disso, nosso Pão de Mel é produzido artesanalmente, garantindo qualidade e frescor em cada unidade.
    Experimente essa delícia que vai conquistar seu paladar e aquecer seu coração!<br></br>
    🥐🍫🍯😉
    </center>
    </>
  } 
/>

<ProximaViajem texto="Próximo" caminho="/detalhe2" />
      <Footer/>
    </>
  );
}

export default Viajem1;
