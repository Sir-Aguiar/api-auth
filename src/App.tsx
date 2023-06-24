import "./App.css";
import React from "react";
import glasses from "/wired-gradient-243-glasses-eye-blink.svg";
const App: React.FC = () => {
  return (
    <div className="app">
      <form className="login">
        <header className="text-center flex flex-col items-center gap-[50px]">
          <img
            src="https://thekenyandev.com/static/ba180df420dbaffd7405a0f65764feab/cover.png"
            alt="JWT icon"
            className="jwt-icon"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-[28px] font-bold">Bem-vindo de volta!</h1>
            <p className="text-[12px] font-semibold">Obtenha acesso à nossa API</p>
          </div>
        </header>
        <main className="form-main">
          <input type="text" placeholder="Nome de usuário" className="login-input border-gradient purple-gradient" />
          <div className=" flex relative">
            <input type="password" placeholder="Senha" className="login-input border-gradient purple-gradient" />
            <img src={glasses} alt="glasses" className="show-svg " />
          </div>
          <input type="submit" value="Entrar" className="login-button bg-jwt-blue mt-[30px]" />
          <span className="underline text-jwt-blue my-4 cursor-pointer">Registre-se aqui</span>
        </main>
      </form>
    </div>
  );
};

export default App;

