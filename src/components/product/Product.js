import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import images from "../../app/services/images";
const Product = ({product}) => {
    return (
        <Link to={"/details-produit/" + product.id}>
            <div className={styles.productCard}>
                <img width="250" height="100"
                src={images[product.imageUrl]} alt="" />
                <div className={styles.textCenter}>
                    <h3>{product.title}</h3>
                    <p>{product.price} €</p>
                </div>
            </div>
        </Link>
    );
}

export default Product;