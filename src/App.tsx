import { useState } from "react";
import logo from "./logo.svg";
import {
  AppShell,
  Button,
  Center,
  Header,
  UnstyledButton,
} from "@mantine/core";
import { Link, Route, Router, Routes } from "react-router-dom";
import Start from "./screens/Start";
import Projects from "./screens/Projects";
import Products from "./screens/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <nav className="fixed w-full flex flex-row items-center bg-violet-800 shadow-lg">
          <div className="basis-1/2">
            <Link to={"/"}>
              <span className="ml-20 self-center text-3xl font-semibold text-purple-200">
                GaEr Co.
              </span>
            </Link>
          </div>
          <div className=" mr-20 flex justify-end basis-1/2">
            <Link to={"/"}>
              <button className="p-5 font-medium hover:text-violet-300 text-purple-50">
                Inicio
              </button>
            </Link>
            <Link to={"/proyectos"}>
              <button className="p-5 font-medium hover:text-violet-300 text-purple-50">
                Proyectos
              </button>
            </Link>
            <Link to={"/productos"}>
              <button className="p-5 font-medium hover:text-violet-300 text-purple-50">
                Productos
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/productos" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
