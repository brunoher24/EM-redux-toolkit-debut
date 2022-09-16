import styles from "./ProductBasket.module.css";
import logo from "../../logo.svg"
import { useDispatch } from "react-redux";
import { addItem } from "../../features/basket/basketSlice";

const ProductBasket = ({product}) => {
    // const dispatch = useDispatch();
    // const productQuantityInc = () => {
    //     dispatch()
    // }

    return (
        <div className={styles.productBasketCard}>
            <img width="250" height="100"
            src={logo} alt="" />
            <div className={styles.textCenter}>
                <h3>{product.title}</h3>
                <p>{product.price} €</p>
                {/* <p className={styles.quantityCtnr}>
                    <button onClick={productQuantityInc}>+</button>
                    {product.quantity}
                    <button>-</button>
                </p> */}
            </div>
        </div>
    );
}

export default ProductBasket;