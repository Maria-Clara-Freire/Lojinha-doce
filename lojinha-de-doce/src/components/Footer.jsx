import "./Footer.css";


function Footer() {
  return (
    <>
      <footer className="Footer">
 
        <div className="Bloco3">
          <div className="BlocoSobreNos">
            <p>
              <div class="footer_social">
                <a href="https://www.instagram.com" target="_blank">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <i className="bx bxl-twitter"></i>
                </a>
              </div>
            </p>
            <p>Quint`Doceria</p>
          </div>
          <div className="BlocoReclamacoes">
            <p>Numero para reclamações: 
            (19) 9891-24968/ 0800-9875 
            </p>
            <p>Numero para feedbacks e dúvidas:
            (19) 9891-24968/ 0800-9875 

            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
