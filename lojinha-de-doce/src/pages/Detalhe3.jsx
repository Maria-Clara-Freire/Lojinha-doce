
import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import CardDentro from "../components/CardDentro.jsx";
import ProximaViajem from "../components/ProximaViajem.jsx"

function Viajem3() {
  

  return (
    <>
      <Header />
      <Nav/>
  

      <CardDentro 
 
  descricao= {
    <>
    As Maldivas são uma nação tropical no Oceano Índico composta por 26 atóis em formato de anel, 
    que são formados por mais de 1.000 ilhas de coral. 
    São 14 h 30 min para chegar (é necessário pegar barco)<br></br><br></br>
    PACOTE IMPERDÍVEL <br></br>
    Até 2 pessoas  <br></br>
    5 diárias <br></br>
    Incluso: Café da manhã, Almoço, Café da tarde, Janta, Área de lazer, Guia turístico por 5 horas diárias, Cancelamento gratuito. <br></br>
    Valor a vista:  R$8.493 <br></br>
    Ou até 3 x R$2.831 sem juros!!!<br></br>
    Disponível até: 07/06/2025
    </>
  } 
/>
 
<ProximaViajem texto="Próximo" caminho="/contato" />
      <Footer/>
    </>
  );
}
export default Viajem3;
