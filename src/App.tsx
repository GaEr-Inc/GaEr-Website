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
        <Center className="border-b-2">
          <Link to={"/"}>
            <button className="p-5">Inicio</button>
          </Link>
          <Link to={"/proyectos"}>
            <button className="p-5" >Proyectos</button>
          </Link>
          <Link to={"/productos"}>
            <button className="p-5">Productos</button>
          </Link>
        </Center>
        <Routes>
          <Route path="/" element={<Start/>} />
          <Route path="/proyectos" element={<Projects/>} />
          <Route path="/productos" element={<Products/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
