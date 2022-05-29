import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../api";
import ProductCard from "../../components/product";
import { Product } from "../../interfaces/product";
import styles from "./styles.module.scss";


const Products = () => {
    const [products, setProducts] = useState<Product[]>();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const allProducts: Product[] = await getAllProducts();
            console.log("products", allProducts);
            setProducts(allProducts);

            allProducts.map((product) => { console.log(product) })
        };

        fetchProducts().catch(console.error);
    }, []);

    return (
        <div>
            {/* <Button
                onClick={() => {
                    navigate("/categories/add-category");
                }}
            >
                Додати
            </Button> */}

            {products ?
                <div  className={styles.products}>
                    {products.map((product) => <ProductCard product={product} />)}
                </div> :
                <p>No tags</p>
            }
        </div>
    );
};

export default Products;