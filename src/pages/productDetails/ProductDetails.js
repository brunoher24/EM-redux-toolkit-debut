import styles from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productService } from "../../app/services/product";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/basket/basketSlice";
import images from "../../app/services/images";

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    let { id } = useParams();
    const dispatch = useDispatch();
    

    useEffect(()=> {
        productService.fetchById(id).then(data => {
            setProduct(data);
        })
    }, []);

    const addToBasket = e => {
        e.preventDefault();
        const basketData = {id, quantity};
        dispatch(addItem(basketData));
    }

    return (
        <div className={styles.ProductDetailsCtnr}>
            <h1>{product.title}</h1>
            <img className={styles.productImage} src={images[product.imageUrl]} alt="" />

            <form className={styles.addForm} onSubmit={addToBasket}>
                <p>
                <label htmlFor="product-quantity">Choisissez une quantité :</label><br/>
                <input onChange={e => { setQuantity(e.target.value)}} id="product-quantity" type="number" min="1" max="10"/>
                </p>
                <input type="submit" value="Ajouter au panier" />
            </form>
        </div>
    )
};

export default ProductDetails;