import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/pages/Error";
import CadastroUser from "./components/pages/CadastroUser";
import ListarUsers from "./components/pages/ListarUsers";
import CadastroDespesa from "./components/pages/CadastrarDespesa";
import ListarDespesas from "./components/pages/ListarDespesas";

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <CadastroUser />,
      },
      {
        path: "/cadastrarUsuario",
        element: <CadastroUser />,
      },
      {
        path: "/listarUsuarios",
        element: <ListarUsers />,
      },
      {
        path: "/cadastrarDespesa",
        element: <CadastroDespesa />,
      },
      {
        path: "/listarDespesas",
        element: <ListarDespesas />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
