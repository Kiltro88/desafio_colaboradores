import React, { useState } from "react";
import Validacion from "./Validacion";

const Formulario = ({ onValidationResult }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResult = Validacion(e, {
      nombre,
      correo,
      edad,
      cargo,
      telefono,
    });
    onValidationResult({
      ...validationResult,
      data: { nombre, correo, edad, cargo, telefono },
    });
  };

  return (
    <div className="container-fluid mt-5">
      <div className="card p-4">
        <h3 className="text-center">Agregar Colaborador</h3>
        <form className="formulario" onSubmit={handleSubmit}>
          <div className="form-group m-3">
            <input
              placeholder="Nombre del Colaborador"
              type="text"
              name="nombre"
              className="form-control"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>
          <div className="form-group m-3">
            <input
              placeholder="Correo del Colaborador"
              type="correo"
              name="correo"
              className="form-control"
              onChange={(e) => setCorreo(e.target.value)}
              value={correo}
            />
          </div>
          <div className="form-group m-3">
            <input
              placeholder="Edad del Colpaborador"
              type="text"
              name="Edad"
              className="form-control"
              onChange={(e) => setEdad(e.target.value)}
              value={edad}
            />
          </div>
          <div className="form-group m-3">
            <input
              placeholder="Cargo del Colaborador"
              type="string"
              name="Cargo"
              className="form-control"
              onChange={(e) => setCargo(e.target.value)}
              value={cargo}
            />
          </div>
          <div className="form-group m-3">
            <input
              placeholder="Telefono del Colaborador"
              type="text"
              name="Telefono"
              className="form-control"
              onChange={(e) => setTelefono(e.target.value)}
              value={telefono}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
