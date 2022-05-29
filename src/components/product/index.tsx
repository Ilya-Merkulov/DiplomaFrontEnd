import { Product } from "../../interfaces/product";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

interface Props {
    product: Product;
}

const ProductCard = (props: Props) => {
    const { product } = props;

    const navigate = useNavigate();

    return (
        <div className={styles.productBlock}
            onClick={() => {
                navigate(`/product/${product.id}`);
                // ${product.id}
            }}>
            <img
                src={
                    product.image
                }
                alt={product.name}
                className={styles.productImage}
            />

            <h1>{product.name}</h1>
            <p className={styles.price} >{product.price}</p>
            <p>{product.label.name}</p>
            <p>{product.description}</p>

        </div>

    );
};

export default ProductCard;