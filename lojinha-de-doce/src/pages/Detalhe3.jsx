
import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import CardDentro from "../components/CardDentro.jsx";
import ProximaViajem from "../components/ProximaViajem.jsx"
import brigadeiro2 from "../assets/brigadeiro2.jpg"

function Viajem3() {
  

  return (
    <>
      <Header />
      <Nav/>
  

      <CardDentro  nome={brigadeiro2} 
 
  descricao= {
    <>
   <center>
       <h1>O NOSSO BRIGADEIRO !!!!</h1>
       Experimente o sabor irresistível do nosso brigadeiro!<br/>
          Feito com amor e ingredientes de alta qualidade. Nossa receita tradicional garante um brigadeiro cremoso, doce e delicioso. <br/>
          Ele vai transportar você para um mundo de sabores nostálgicos.Textura cremosa e suave Sabor doce e intenso, feito com amor e cuidado. Perfeito para qualquer ocasião!<br></br>
    🍫🍩😉
    </center>
    </>
  } 
/>
 
<ProximaViajem texto="Próximo" caminho="/contato" />
      <Footer/>
    </>
  );
}
export default Viajem3;
