import '../styles/Products.css';
import { ProductCard } from './ProductCard';
import chilaquilesVerdes from '../assets/product-chilaquiles-verdes.jpg';
import chilaquilesRojos from '../assets/product-chilaquiles-rojos.jpg';
import chilaquilesPollo from '../assets/chilaquiles-pollo.jpg';
import chilaquilesBistec from '../assets/chilaquiles-bistec.jpeg';
import chilaquilesHuevo from '../assets/chilaquiles-con-huevo.jpg';
import chilaquilesArrachera from '../assets/chilaquiles-arrachera.jpg';


// ✅ AGREGA esta línea ↓↓↓
export function Products({ onBuyClick }) {
  return (
    <section className="products">
      <div className="products__container">
        <div className="products__tittle-container">
          <h2 className="products__tittle">MENU</h2>
        </div>

        <div className="products__cards-container">
          <ProductCard
            image={chilaquilesVerdes}
            tittle="CHILAQUILES VERDES"
            text="Totopos bañados en salsa de tomate verde (300 g)."
            puntuacion="9.0"
            precio="$75.00 MXN"
            onBuyClick={onBuyClick}
          />
          <ProductCard
            image={chilaquilesRojos}
            tittle="CHILAQUILES ROJOS"
            text="Totopos bañados en salsa de jitomate rojo (300 g)."
            puntuacion="8.8"
            precio="$75.00 MXN"
            onBuyClick={onBuyClick}
          />
          <ProductCard
            image={chilaquilesHuevo}
            tittle="CHILAQUILES CON HUEVO"
            text="Totopos bañados con salsa a elegir, con Huevo (450 g)."
            puntuacion="8.1"
            precio="$80.00 MXN"
            onBuyClick={onBuyClick}
          />
          <ProductCard
            image={chilaquilesPollo}
            tittle="CHILAQUILES CON POLLO"
            text="Totopos bañados con salsa a elegir, con Pollo (450 g)."
            puntuacion="8.7"
            precio="$85.00 MXN"
            onBuyClick={onBuyClick}
          />
          <ProductCard
            image={chilaquilesBistec}
            tittle="CHILAQUILES CON BISTEC"
            text="Totopos bañados con salsa a elegir, con Bistec (450 g)."
            puntuacion="8.9"
            precio="$90.00 MXN"
            onBuyClick={onBuyClick}
          />
          <ProductCard
            image={chilaquilesArrachera}
            tittle="CHILAQUILES CON ARRACHERA"
            text="Totopos bañados con salsa a elegir, con Arrachera (450 g)."
            puntuacion="9.3"
            precio="$100.00 MXN"
            onBuyClick={onBuyClick}
          />
        </div>

        <div className="products__message-container">
          <p className="prodects__message">
            <strong className="strong__two">NOTA:</strong> Cada envío tiene un valor de $10.00 MXN, tarifa fija.
          </p>
        </div>
      </div>
    </section>
  );
}
