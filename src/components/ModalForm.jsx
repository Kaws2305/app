import "../styles/ModalForm.css";
import { useState, useRef } from "react";

export function Form({ onClose }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    tipo: "Rojos",
    acompañamiento: "Sencillos",
    descripcion: "",
  });

  const [modalVisible, setModalVisible] = useState(true);
  const [successMessage, setSuccessMessage] = useState(false);

  // Refs para cancelar timeouts si el usuario cierra el modal antes
  const openTimeout = useRef(null);
  const closeTimeout = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "telefono") {
      const cleaned = value.replace(/\D/g, "");
      if (cleaned.length <= 10) {
        setFormData({ ...formData, [name]: cleaned });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.telefono.length !== 10) {
      alert("El número telefónico debe tener exactamente 10 dígitos.");
      return;
    }

    const mensaje = `¡Hola! Quiero pedir chilaquiles:
- Nombre: ${formData.nombre}
- Apellido: ${formData.apellido}
- Teléfono: ${formData.telefono}
- Tipo: ${formData.tipo}
- Acompañamiento: ${formData.acompañamiento}
- Descripción: ${formData.descripcion}`;

    const telefonoDestino = "5560984063";
    const url = `https://wa.me/${telefonoDestino}?text=${encodeURIComponent(mensaje)}`;

    setSuccessMessage(true); // Mostrar mensaje

    // Abrir WhatsApp después de 3 segundos
    openTimeout.current = setTimeout(() => {
      window.open(url, "_blank");

      // Luego de abrir, cerrar modal y ocultar mensaje tras 1s
      closeTimeout.current = setTimeout(() => {
        setSuccessMessage(false);
        setModalVisible(false);
        if (onClose) onClose();
      }, 1000);
    }, 3000);
  };

  const handleCloseModal = () => {
    // Limpiar cualquier temporizador activo
    clearTimeout(openTimeout.current);
    clearTimeout(closeTimeout.current);

    setSuccessMessage(false);
    setModalVisible(false);
    if (onClose) onClose();
  };

  return (
    <>
      {modalVisible && (
        <section className="modal">
          <div className="modal__container">
            <div className="close__container">
              <p className="close" onClick={handleCloseModal}>
                X
              </p>
            </div>

            <div className="tittle__container">
              <h3 className="tittle">CHILAQUILES</h3>
            </div>

            {successMessage ? (
              <div className="success-message">✅ ¡Pedido enviado con éxito!</div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono (10 dígitos)"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  pattern="\d{10}"
                  maxLength="10"
                />

                <label>Tipo de chilaquiles:</label>
                <select name="tipo" value={formData.tipo} onChange={handleChange}>
                  <option value="Rojos">Rojos</option>
                  <option value="Verdes">Verdes</option>
                </select>

                <label>Acompañamiento:</label>
                <select
                  name="acompañamiento"
                  value={formData.acompañamiento}
                  onChange={handleChange}
                >
                  <option value="Sencillos">Sencillos</option>
                  <option value="Con huevo">Con huevo</option>
                  <option value="Con pollo">Con pollo</option>
                  <option value="Con bistec">Con bistec</option>
                  <option value="Con arrachera">Con arrachera</option>
                </select>

                <textarea
                  name="descripcion"
                  placeholder="Descripción (sin cebolla, extra queso, etc.)"
                  maxLength="150"
                  value={formData.descripcion}
                  onChange={handleChange}
                />

                <button type="submit">Enviar pedido</button>
              </form>
            )}
          </div>
        </section>
      )}
    </>
  );
}
