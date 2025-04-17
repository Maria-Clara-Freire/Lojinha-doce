import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProximaViajem from "../components/ProximaViajem"; // Certifique-se de que o caminho está correto
import "../pages/Contato.css"

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState("");
  const [grauEscolar, setGrauEscolar] = useState("");
  const [comidaEscolhida, setComidaEscolhida] = useState("");

  const tratarDados = (e) => {
    e.preventDefault();

    if (nome && email && sexo && grauEscolar && comidaEscolhida) {
      const dados = {
        nome,
        email,
        sexo,
        grauEscolar,
        comidaEscolhida,
      };

      localStorage.setItem("contato", JSON.stringify(dados));

      alert(
        `Dados salvos com sucesso!\n\n` +
        `Nome: ${nome}\n` +
        `Email: ${email}\n` +
        `Sexo: ${sexo}\n` +
        `Grau Escolar: ${grauEscolar}\n` +
        `Comida Escolhida: ${comidaEscolhida}\n`+
        `Número de Telefone: ${telefone}`
      );
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <div className="divinha">
      <Header />
      <Nav />
      <h2>Contato</h2>
      <form onSubmit={tratarDados}>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Sexo:</label>
        <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>

        <label>Grau Escolar:</label>
        <select value={grauEscolar} onChange={(e) => setGrauEscolar(e.target.value)}>
          <option value="1-grau">1° Grau</option>
          <option value="2-grau">2° Grau</option>
          <option value="graduacao">Graduação</option>
          <option value="pos-graduacao">Pós-Graduação</option>
        </select>

        <label>Comida Escolhida:</label>
        <select value={comidaEscolhida} onChange={(e) => setComidaEscolhida(e.target.value)}>
          <option value="brigadeiro">Brigadeiro</option>
          <option value="pao-de-mel">Pão de mel</option>
          <option value="sonho">Sonho</option>
        </select>

        <label>Telefone:</label>
        <input
          type="telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <br></br>
        <br></br>


        <button type="submit">Enviar Informações</button>
      </form>

      <ProximaViajem texto="Próximo" caminho="/detalhe2" />
      <Footer />
    </div>
  );
}

export default Contato;
