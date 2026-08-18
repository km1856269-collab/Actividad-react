import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");

  const mostrarNombre = () => {
    console.log("Karol Quinayas");
    setNombre("Karol Quinayas");
  };

  return (
    <div>
      <h1>Mi aplicación React con TypeScript</h1>

      <button onClick={mostrarNombre}>
        Mostrar mi nombre
      </button>

      {nombre && <p>Hola, {nombre}</p>}
    </div>
  );
}

export default App;