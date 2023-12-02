// App.jsx
import React, { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./assets/BaseColaboradores";

function App() {
  const [validationResult, setValidationResult] = useState(null);
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [searchQuery, setSearchQuery] = useState("");

  const handleValidationResult = (result) => {
    setValidationResult(result);
    if (!result.error) {
      setColaboradores([...colaboradores, result.data]);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredColaboradores = colaboradores.filter(
    (colaborador) =>
      colaborador.nombre.includes(searchQuery) ||
      colaborador.correo.includes(searchQuery) ||
      colaborador.cargo.includes(searchQuery) ||
      String(colaborador.edad).includes(searchQuery) ||
      String(colaborador.telefono).includes(searchQuery)
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2>Lista de Colaboradores</h2>
          <Buscador onSearch={handleSearch} />
          <Listado colaboradores={filteredColaboradores} />
        </div>
        <div className="col-md-4">
          <Formulario onValidationResult={handleValidationResult} />
          {validationResult && (
            <Alert
              message={validationResult.mensaje}
              error={validationResult.error}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
