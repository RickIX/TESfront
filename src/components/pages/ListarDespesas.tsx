import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListarDespesas() {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/despesas")
      .then((resposta) => {
        console.log(resposta.data);

        setDespesas(resposta.data.dados);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  // return (
  //   <div>
  //     <h1>Listagem de Despesas</h1>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>ID</th>
  //           <th>Nome</th>
  //           <th>Valor</th>
  //           <th>ID do Usuário</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {despesas && despesas.length > 0 ? (
  //           despesas.map((despesa: any) => (
  //             <tr key={despesa.id}>
  //               <td>{despesa.id}</td>
  //               <td>{despesa.nome}</td>
  //               <td>{despesa.valor}</td>
  //               <td>{despesa.userId}</td>
  //             </tr>
  //           ))
  //         ) : (
  //           <tr>
  //             <td colSpan={4}>Nenhuma despesa encontrada</td>
  //           </tr>
  //         )}
  //       </tbody>
  //     </table>
  //   </div>
  // );

  return (
    <div>
      <h1>Listagem de Despesas</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>ID do Usuário</th>
          </tr>
        </thead>
        <tbody>
          {despesas.map((despesa: any) => (
            <tr>
              <td>{despesa.id}</td>
              <td>{despesa.nome}</td>
              <td>{despesa.valor}</td>
              <td>{despesa.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarDespesas;
