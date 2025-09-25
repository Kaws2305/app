import "./App.css";
import { useState } from "react";
import { Main } from "./components/Main";
import { Products } from "./components/Products";
import { Form } from "./components/ModalForm";

export function App() {
  const [showModal, setShowModal] = useState(false);

  // Esta función se pasará a cada tarjeta para abrir el modal
  const handleBuyClick = () => {
    setShowModal(true);
  };

  return (
    <div className="app">
      {/* Solo mostrar el modal si showModal es true */}
      {showModal && <Form onClose={() => setShowModal(false)} />}

      <Main />
      {/* Pasamos handleBuyClick a Products */}
      <Products onBuyClick={handleBuyClick} />
    </div>
  );
}
