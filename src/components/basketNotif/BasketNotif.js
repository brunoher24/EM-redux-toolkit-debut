import styles from "./BasketNotif.module.css";
import { IconContext } from "react-icons";
import { FaShoppingBasket } from 'react-icons/fa';
import { useSelector } from "react-redux";

import { selectBasket } from "../../features/basket/basketSlice";

const BasketNotif = () => {
    const basket = useSelector(selectBasket);

    return (
       <div className={styles.basketNotifCtnr}>
        <span>Mon panier</span>
        <IconContext.Provider value={{ className: styles.shoppingBasketIcon }}>
            <FaShoppingBasket />
        </IconContext.Provider>
        <div className={basket.length > 0 ? styles.notifCircleGreen : styles.notifCircleYellow}>
            {basket.length}
        </div>
           
       </div>
    );
}

export default BasketNotif;