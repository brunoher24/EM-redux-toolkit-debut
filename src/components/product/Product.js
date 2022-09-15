import styles from "./Product.module.css";
import { Link } from "react-router-dom";

const Product = ({product}) => {
    return (
        <Link to={"/details-produit/" + product.id}>
            <div className={styles.productCard}>
                <h3>{product.title}</h3>
                <p>{product.price} €</p>
            </div>
        </Link>
    );
}

export default Product;