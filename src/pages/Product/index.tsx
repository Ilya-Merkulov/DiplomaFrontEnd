import { Button, TextField } from "@mui/material";
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
            if(!productId) return 
            const concreteProducts: Product = await getProductById(productId);
            console.log(productId)
            setProduct(concreteProducts);
        };

        fetchProducts().catch(console.error);
    }, [productId]);

    return (
        <div className={styles.main}>
            
        

            <div>  
                <p>{product?.name}</p>
            </div>
          
             
        </div>
       
    );
};

export default ProductPage;