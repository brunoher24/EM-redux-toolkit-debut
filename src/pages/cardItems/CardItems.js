import styles from "./CardItems.module.css";
import { useSelector } from 'react-redux';
import { selectBasket } from "../../features/basket/basketSlice";


const CardItems = () => {
    const basket = useSelector(selectBasket);

    return (
        <div className={styles.CardItemCtnr}>
            <h1>Coucou vous êtes sur la page du panier !</h1>
            {basket && basket.map(product => (
                <p key={product.id}>id : {product.id}, quantité: {product.quantity}</p>
            ))}

        </div>
    )
};

export default CardItems;