// Listado.jsx
import React from "react";

const Listado = ({ colaboradores }) => {
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="col-md-2">Nombre</th>
              <th className="col-md-2">Correo</th>
              <th className="col-md-1">Edad</th>
              <th className="col-md-3">Cargo</th>
              <th className="col-md-2">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {colaboradores.map((colaborador) => (
              <tr key={colaborador.nombre}>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listado;
