import axios from "axios";
import { useState } from "react";
import { User } from "../../models/user.model";

function CadastroUser() {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState("");

  function enviar() {
    //Enviar o produto para a API, através FETCH ou AXIOS
    let user: User = new User();
    user.nome = nome;
    user.saldo = Number.parseInt(saldo);

    axios
      .post("http://localhost:3001/usuarios", user )
      .then((resposta) => {
        //Executar algo quando a requisição for bem sucedida
        //Códigos HTTP na faixa do 200
        console.log(resposta.data.mensagem);
      })
      .catch((erro) => {
        //Executar algo quando a requisição for mal sucedida
        //Códigos HTTP na faixa do 400 e 500
        console.log(erro);
      });
  }

  return (
    <div>
      <h1> Cadastrar Usuário</h1>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          onChange={(event: any) => setNome(event.target.value)}
        />
      </div>
      <div>
        <label>Saldo:</label>
        <input
          type="text"
          onChange={(event: any) => setSaldo(event.target.value)}
        />
      </div>
      <div>
        <button onClick={enviar}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroUser;
