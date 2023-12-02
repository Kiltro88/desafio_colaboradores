// Buscador.jsx
import React, { useState } from "react";

const Buscador = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar colaborador"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default Buscador;
