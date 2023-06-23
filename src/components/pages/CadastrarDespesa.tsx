import axios from "axios";
import { useState } from "react";
import { Despesa } from "../../models/despesa.model";

function CadastroDespesa() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [userId, setUserId] = useState("");


  function enviar() {
    //Enviar o produto para a API, através FETCH ou AXIOS
    let despesa: Despesa = new Despesa();
    despesa.nome = nome;
    despesa.valor = Number.parseInt(valor);
    despesa.userId = Number.parseInt(userId);

    axios
      .post("http://localhost:3001/usuarios/:userId/despesas", despesa )
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
      <h1> Cadastrar Despesa</h1>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          onChange={(event: any) => setNome(event.target.value)}
        />
      </div>
      <div>
        <label>Valor:</label>
        <input
          type="text"
          onChange={(event: any) => setValor(event.target.value)}
        />
      </div>
      <div>
      <label>ID do usuário:</label>
        <input
          type="text"
          onChange={(event: any) => setUserId(event.target.value)}
        />
      </div>
      <div>
        <button onClick={enviar}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroDespesa;
