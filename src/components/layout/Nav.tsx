import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/cadastrarUsuario">Cadastrar Usuario</Link>
        </li>
        <li>
          <Link to="/listarUsuarios">Listar Usuarios</Link>
        </li>
        <li>
          <Link to="/cadastrarDespesa">Cadastrar Despesas</Link>
        </li>
        <li>
        <Link to="/listarDespesas">Listar Despesas</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
