"use client";
import React, { useState } from "react";
import axios from "axios";

export default function Cadastro() {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrarUsuario() {
    const novoUsuario = {
      nome: nome,
      email: email,
      senha: senha,
    };
    if (!nome || !email || !senha) {
      alert("Preencha todos os campos");
      return;
    }
    axios
      .post(
        "https://3000-itforget-database-dv58a4uvgt4.ws-us107.gitpod.io/livros",
        novoUsuario,
      )
      .then((response) => {
        console.log("Usuário cadastrado com sucesso:", response.data);
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário:", error);
      });

    setUsuarios([...usuarios, novoUsuario]);

    setNome("");
    setEmail("");
    setSenha("");

    console.log("Usuários cadastrados:", usuarios);
  }

  return (
    <div className="flex place-content-center">
      <div className="flex flex-col items-center p-20 mt-[200px] border-2 border-black flex-wrap rounded-xl">
        <h1 className="text-3xl font-bold mb-10">CADASTRO</h1>
        <input
          className="bg-transparent p-2 rounded-xl mb-10"
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-transparent p-2 rounded-xl mb-10"
          type="text"
          placeholder="Nome de Usuário"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          className="bg-transparent p-2 rounded-xl"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button
          onClick={cadastrarUsuario}
          className="bg-teal-500 text-white p-2 rounded-xl mt-10"
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}
