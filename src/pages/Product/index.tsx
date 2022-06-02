import { Avatar, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import { Product } from "../../interfaces/product";
import { getProductById } from "../../api";



type ConcreteProduct = {
    productId: string
}


const ProductPage = () => {
    const { productId } = useParams<ConcreteProduct>();
    console.log(productId)
    const [product, setProduct] = useState<Product>()

    useEffect(() => {

        const fetchProducts = async () => {
            console.log(productId)
            if (!productId) return
            const concreteProducts: Product = await getProductById(productId);
            console.log(productId)
            setProduct(concreteProducts);
        };

        fetchProducts().catch(console.error);
    }, [productId]);

    return (
        <div className={styles.main}>
            <img
                src={
                    product?.image
                }
                alt={product?.name}
                className={styles.productImage}
            />
            {product ?
                <div className={styles.productInfo}>
                    <p className={styles.product_name}>{product.name}</p>
                    <p>{product.description}</p>
                    <p className={styles.price} >{product.price}</p>
                    <p>{product.label.name}</p>
                    <div className={styles.productInfoField}>
                        <TextField
                            required
                            // id="outlined-required"
                            label="кількість"
                            className={styles.field}
                            defaultValue="1"
                        />

                        <Button variant="text" style={{ color: "black" }} >Додати в кошик</Button>
                    </div>

                </div> :
                <p>Cant find product with this id</p>
            }
        </div>

    );
};
export default ProductPage;