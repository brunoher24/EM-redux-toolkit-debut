import styles from "./CardItems.module.css";
import { useSelector } from 'react-redux';
import { selectBasket } from "../../features/basket/basketSlice";
import { useEffect, useState } from "react";
import { productService } from "../../app/services/product";
import ProductBasket from "../../components/productBasket/ProductBasket";


const CardItems = () => {
    const basket = useSelector(selectBasket);
    const [basketProducts, setBasketProducts] = useState([]);

    useEffect(() => {
        productService.fetchBasketItems(basket.map(item => parseInt(item.id))).then(products => {
            setBasketProducts(products.map((product_, index) => {
                return {...product_, quantity: basket[index].quantity}
            }));
        });
    }, []);

    return (
        <div className={styles.CardItemCtnr}>
            <h1>Coucou vous êtes sur la page du panier !</h1>
            {basketProducts && basketProducts.map(product => (
                <div key={product.id}>
                    <ProductBasket product={product}/>
                </div>
            ))}

        </div>
    )
};

export default CardItems;