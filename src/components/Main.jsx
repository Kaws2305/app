import "../styles/Main.css";
import logoImage from "../assets/image-logo.png";

export function Main() {
  return (
    <main className="main">

      <div className="main__container">

        <div className="logo__container">
          <img src={logoImage} className="logo" alt="logo" />
        </div>

        <div className="main__text-container">

          <p className="main__text">
            Bienvenido a la nueva era, <br></br>
            <strong>AL CHILE</strong> ya no pagues tarifas altas.
          </p>

        </div>

        <div className="main__button-container">
          <a href="#" className="main__button">ORDENA AQUI</a>
        </div>

      </div>

    </main>

  );

}
