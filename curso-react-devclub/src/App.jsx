import { useState, useRef } from "react";
import { v4 } from "uuid";
import "./App.css";

function App() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  function CliqueiNoBotao() {
    setProdutos([{id: v4(), nome: inputRef.current.value}, ...produtos]);
    inputRef.current.value = ""
  }

  function deletarProduto(id) {
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  return (
    <div className=" flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🛒 Lista de Compras
        </h1>

        {/* Campo de entrada */}
        <div className="flex gap-2">
          <input type="text" ref={inputRef} placeholder="Digite um produto" className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <button onClick={CliqueiNoBotao} className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Adicionar
          </button>
        </div>

        {/* Lista de produtos */}
        {produtos.map((produto) => {
          return <div key={produto.id}  className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mt-2 mb-2 hover:shadow-lg transition">
            <p className="text-gray-800 font-medium">{produto.nome}</p>
            <button onClick={() => deletarProduto(produto.id)} className="text-red-500 hover:text-red-700 transition">❌</button>
          </div>;
        })}
      </div>
    </div>
  );
}

export default App;
