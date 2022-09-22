import styles from "./ProductBasket.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../features/basket/basketSlice";
import images from "../../app/services/images";

const ProductBasket = ({product}) => {
    const [productBasket, setProductBasket] = useState({...product});
    const dispatch = useDispatch();

    
    const productQuantityInc = () => {
        if(productBasket.quantity >= 10) { return; }
        dispatch(incrementQuantity(product.id));
        setProductBasket({...productBasket, quantity: parseInt(productBasket.quantity)+1});
    }
    const productQuantityDec = () => {
        if(productBasket.quantity <= 1) { return; }
        dispatch(decrementQuantity(product.id));
        setProductBasket({...productBasket, quantity: parseInt(productBasket.quantity)-1});
    }

    return (
        <div className={styles.productBasketCard}>
            <img width="250" height="100"
            src={images[product.imageUrl]} alt="" />
             <p className={styles.quantityCtnr}>
                <button className={styles.quantityBtn} onClick={productQuantityDec}>-</button>
                {productBasket.quantity}
                <button className={styles.quantityBtn} onClick={productQuantityInc}>+</button>
            </p>
            <div className={`${styles.textCenter} ${styles.priceAndTitle}`}>
                <h3>{productBasket.title}</h3>
                <p>{productBasket.price} €</p>
            </div>
        </div>
    );
}

export default ProductBasket;