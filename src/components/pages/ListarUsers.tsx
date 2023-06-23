import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListarUsers() {
  const [users, setUsers] = useState([]);

  //Função de carregamento do componente
  //React Router DOM - https://www.youtube.com/watch?v=7b42lVMdEjE
  useEffect(() => {
    axios
      .get("http://localhost:3001/usuarios")
      .then((resposta) => {
        console.log(resposta.data); // Verifica a resposta recebida do servidor

        setUsers(resposta.data.dados);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div>
      <h1>Listagem de Usuários</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.nome}</td>
              <td>{user.saldo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarUsers;
