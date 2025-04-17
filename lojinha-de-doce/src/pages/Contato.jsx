
import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import CardDentro from "../components/CardDentro.jsx";
import ProximaViajem from "../components/ProximaViajem.jsx"

function Viajem4() {
  

  return (
    <>
      <Header />
      <Nav/>
      

      <CardDentro 

  descricao= {
      <>
      País da América do Norte com uma natureza exuberante, cidades vibrantes e uma grande diversidade cultural.<br></br><br></br>
      PACOTE IMPERDIVÉL<br></br>
      Hóspedes: até 2 pessoas; <br></br> 
      Diárias: 10 (dez);<br></br>
      Incluso: Café da manhã, Almoço, Café da tarde, Janta, Área de lazer, Guia turístico por 5 horas diárias, Cancelamento gratuito;<br></br>
      Valor a vista: R$10.000,00, Ou até 12x R$834,00 sem juros!!! <br></br>
      Disponível até: 07/06/2025
      </>
  }
/>

<ProximaViajem texto="Próximo" caminho="/" />
      <Footer/>
    </>
  );
}
export default Viajem4;
