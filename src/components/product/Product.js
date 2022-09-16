import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import logo from "../../logo.svg"

const Product = ({product}) => {
    return (
        <Link to={"/details-produit/" + product.id}>
            <div className={styles.productCard}>
                <img width="250" height="100"
                src={logo} alt="" />
                <div className={styles.textCenter}>
                    <h3>{product.title}</h3>
                    <p>{product.price} €</p>
                </div>
            </div>
        </Link>
    );
}

export default Product;