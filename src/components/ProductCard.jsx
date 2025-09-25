import "../styles/ProductCards.css";


export function ProductCard({ image, tittle, text, puntuacion, precio, onBuyClick }) {

  return (

    <div className="product__card">

      <div className="image_container">
        <img
        src={image}
        className="product__image"
        alt="product-image" />
      </div>

      <div className="product__card-info">

        <div className="product__tittle-container">
            <h3 className="product__card-tittle">{tittle}</h3>
        </div>

        <div className="product__text-container">
            <p className="product__text">{text}</p>
        </div>

        <div className="product__shop-container">
            <p className="product__price">{precio}</p>
            <p className="product__start-text"><i className='bx bxs-star star'></i>{puntuacion}</p>
            <button className="product__button" onClick={onBuyClick}>COMPRAR</button>
        </div>

      </div>

    </div>
  );
}
