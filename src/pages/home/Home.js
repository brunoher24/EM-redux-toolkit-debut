import styles from "./Home.module.css";
import { productService } from "../../app/services/product";
import { useEffect, useState } from "react";
import Product from "../../components/product/Product";

const Home = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        productService.fetchAll().then(data => {
            setProducts(data);
        });
    }, []);

    return (
        <div className={styles.homeCtnr}>
            <h1>Choisissez vos produits !</h1>
            <article className={styles.productsList}>
                {products && products.map(product => (
                    <Product key={product.id} product={product}/>
                ))}
            </article>
        </div>
    )
};

export default Home;