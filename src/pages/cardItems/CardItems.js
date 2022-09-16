import styles from "./CardItems.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { deleteOneItem, selectBasket } from "../../features/basket/basketSlice";
import { useEffect, useState } from "react";
import { productService } from "../../app/services/product";
import ProductBasket from "../../components/productBasket/ProductBasket";


const CardItems = () => {
    const basket = useSelector(selectBasket);
    const dispatch = useDispatch();
    
    const [basketProducts, setBasketProducts] = useState([]);

    useEffect(() => {
        console.log("useEffect chargé !", basket);
        productService.fetchBasketItems(basket.map(item => parseInt(item.id))).then(products => {
            console.log(products)
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
                    <button onClick={() => { dispatch(deleteOneItem)}}></button>
                </div>
            ))}

        </div>
    )
};

export default CardItems;