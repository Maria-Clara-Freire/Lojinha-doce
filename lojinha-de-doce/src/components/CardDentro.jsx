import "./CardDentro.css";
import Estrelas from "../components/Estrelas";



function CardDentro(props) {
    return (
        <>
            <article className="article">
                <div className="BlocoMaior">
                    <center>
                    <img src={props.nome} alt="" />
                    </center>
                        <div className="Descricao">
                            <p>{props.descricao}</p>
                        </div>
                        <div className="column">
                        
                            
                        </div>
                        
                          
                        </div>

                        
                   
                    

                    <div className="BlocoDataFavorit">

                      
                    </div>
                   
              
            </article>

           
        </>
    );
}

export default CardDentro;