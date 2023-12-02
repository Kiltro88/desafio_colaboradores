// Validacion.jsx
const Validacion = (e, { nombre, correo, edad, cargo, telefono }) => {
  e.preventDefault();
  if (
    nombre === "" ||
    correo === "" ||
    edad === "" ||
    cargo === "" ||
    telefono === ""
  ) {
    return { error: true, mensaje: "Todos los campos son obligatorios" };
  }
  if (!edad || isNaN(edad) || edad <= 0 || !Number.isInteger(Number(edad))) {
    return { error: true, mensaje: "Edad debe ser un número entero positivo" };
  }
  if (!telefono || isNaN(telefono) || telefono.length !== 10) {
    return { error: true, mensaje: "Teléfono debe tener 10 dígitos" };
  }
  if (!/^[A-Za-z\s]+$/.test(cargo)) {
    return { error: true, mensaje: "Cargo debe contener solo letras" };
  }
  return { error: false, mensaje: "Todo OK" };
};

export default Validacion;
