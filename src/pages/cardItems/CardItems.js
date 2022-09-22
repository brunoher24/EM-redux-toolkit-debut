import styles from "./CardItems.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { deleteOneItem, selectBasket, setProductsPrice, setTotalAmount, selectTotalAmount } from "../../features/basket/basketSlice";
import { useEffect, useState } from "react";
import { productService } from "../../app/services/product";
import ProductBasket from "../../components/productBasket/ProductBasket";


const CardItems = () => {
    const basket = useSelector(selectBasket);
    const totalAmount = useSelector(selectTotalAmount);

    const [basketWithInfos, setBasketWithInfos] = useState([]);

    const dispatch = useDispatch();
    
    const getSubTotal = i => {
        return Math.round(Number(basket[i].quantity) * Number(basket[i].price * 100)) / 100;
    }

    const onDeleteItem = (id, index) => { 
        dispatch(deleteOneItem(id));

        const basketWithInfos_ = [...basketWithInfos];
        basketWithInfos_.splice(index, 1);
        setBasketWithInfos(basketWithInfos_);
    }

    useEffect(() => {
        productService.fetchBasketItems(basket.map(item => parseInt(item.id))).then(products => {
            const productsWithPriceAndQuantity = products.map((product_, index) => {
                return {...product_, quantity: basket[index].quantity}
            });
            setBasketWithInfos(productsWithPriceAndQuantity);
            dispatch(setProductsPrice({products: productsWithPriceAndQuantity}));
            dispatch(setTotalAmount());
        });
    }, []);

    return (
        <div className={styles.CardItemCtnr}>
            {basketWithInfos && basketWithInfos.length > 0 ?
                <>
                    {basketWithInfos.map((product, i) => (
                        <div className={styles.listItem} key={product.id}>
                            <ProductBasket product={product}/>
                            <div className={styles.subTotalCtnr}>
                                <p className={styles.subTotal}>Sous-total : {getSubTotal(i)} €</p>   
                            </div>
                            <button className={styles.removeBtn} onClick={() => {onDeleteItem(product.id, i)}}>X</button> 
                        </div> )
                    )}
                    
                    <p className={styles.totalAmount}>Total : {totalAmount} €</p>
                </>
               
            : <h1>Votre panier est pour le moment vide !</h1>}            
        </div>
    )
};

export default CardItems;