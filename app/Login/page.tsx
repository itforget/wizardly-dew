export default function login() {
  return (
    <div className="flex place-content-center">
      <div className="flex flex-col items-center p-20 mt-[200px] border-2 border-black flex-wrap rounded-xl">
        <h1 className="text-3xl font-bold mb-10">LOGIN</h1>
        <input
          className="bg-transparent p-2 rounded-xl mb-10"
          type="text"
          placeholder="E-mail"
        />
        <input
          className="bg-transparent p-2 rounded-xl "
          type="password"
          placeholder="Senha"
        />
        <button className="flex text-red-500 underline hover:no-underline text-sm justify-end">
          Esqueci a senha
        </button>
        <button className="bg-teal-500 text-white p-2 rounded-xl mt-10">
          Entrar
        </button>
      </div>
    </div>
  );
}
