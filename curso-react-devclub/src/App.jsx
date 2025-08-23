import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  function CliqueiNoBotao(params) {
    alert("Botão clicado");
  }
  return (
    <div className=" flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🛒 Lista de Compras
        </h1>

        {/* Campo de entrada */}
        <div className="flex gap-2">
          <input type="text" placeholder="Digite um produto" className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <button onClick={CliqueiNoBotao} className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Adicionar
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default App;
