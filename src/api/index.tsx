
// import styles from "./styles.module.scss";

import { Product } from "../interfaces/product";
import { api } from "./confige";
import * as React from 'react';

export const getAllProducts = async (): Promise<Product[]> => {
    const url = `/shop/product/`;
    const response = await api.get(url);

    console.log(response)
  
    return response.data.results as Product[];
  };



  export const getProductById = async (id: string): Promise<Product> => {
    const url = `/shop/product/${id}/`;
    const response = await api.get(url);
  
    return response.data as Product;
  };


  export default function BadgeVisibility() {
    const [count, setCount] = React.useState(1);
    const [invisible, setInvisible] = React.useState(false);
  
  }