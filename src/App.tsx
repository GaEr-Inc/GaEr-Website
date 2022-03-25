import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  AppShell,
  Button,
  Center,
  Header,
  UnstyledButton,
} from "@mantine/core";
import { Link, Route, Router, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header height={60}>
        <Center>
          <Link to={"/"}>
            <UnstyledButton p={10}>Inicio</UnstyledButton>
          </Link>
          <Link to={"/proyectos"}>
            <UnstyledButton p={10}>Proyectos</UnstyledButton>
          </Link>
          <Link to={"/productos"}>
            <UnstyledButton p={10}>Productos</UnstyledButton>
          </Link>
        </Center>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/proyectos" element={<h1>Proyectos</h1>} />
          <Route path="/productos" element={<h1>Productos</h1>} />
        </Routes>
      </Header>
    </div>
  );
}

export default App;
