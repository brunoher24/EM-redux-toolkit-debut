import styles from "./ProductBasket.module.css";
import logo from "../../logo.svg"
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../features/basket/basketSlice";

const ProductBasket = ({product}) => {
    const dispatch = useDispatch();
    
    const productQuantityInc = () => {
        dispatch(incrementQuantity(product.id));
    }
    const productQuantityDec = () => {
        dispatch(decrementQuantity(product.id));
    }


    return (
        <div className={styles.productBasketCard}>
            <img width="250" height="100"
            src={logo} alt="" />
             <p className={styles.quantityCtnr}>
                <button onClick={productQuantityInc}>+</button>
                {product.quantity}
                <button onClick={productQuantityDec}>-</button>
            </p>
            <div className={styles.textCenter}>
                <h3>{product.title}</h3>
                <p>{product.price} €</p>
            </div>
        </div>
    );
}

export default ProductBasket;