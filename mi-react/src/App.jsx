import { useState } from "react";

function App() {
  const [nombres, setNombres] = useState([]);

  const mostrarNombre = () => {
    setNombres([...nombres, "Karol"]);
    console.log("Karol");
  };

  return (
    <div>
      <h1>Mi aplicación React</h1>

      <button onClick={mostrarNombre}>
        Mostrar mi nombre
      </button>

      {nombres.map((nombre, index) => (
        <h2 key={index}>{nombre}</h2>
      ))}
    </div>
  );
}

export default App;