"use client";
import Image from "next/image";
import { DragHandleIcon, Search2Icon } from "@chakra-ui/icons";

export default function Nav() {
  return (
    <header className="bg-teal-700 p-8 rounded-b-3xl fixed top-0 w-full">
      <nav className="flex flex-row justify-between">
        <a className="flex items-center" href="/">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
        <ul className="flex flex-row gap-4">
          <li className="flex items-center">
            <Search2Icon className="mr-2" />
            <input
              className="bg-transparent border-0 border-transparent placeholder:text-slate-400 text-md font-extrabold"
              type="text"
              placeholder="Pesquisar"
            />
          </li>
          <li className="font-extrabold text-slate-800 text-xl  ">
            <a className="flex items-center" href="">
              <DragHandleIcon />
              CATEGORIAS
            </a>
          </li>
          <li className="font-extrabold text-slate-800 text-xl">
            <a href="/Login">LOGIN</a>
          </li>
          <li className="font-extrabold text-slate-800 text-xl">
            <a href="/Cadastro">CADASTRO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
