import { Button, TextField } from "@mui/material";
import styles from "./styles.module.scss";



const Products = () => {

    return (
        <div className={styles.main}>
            <p>Логінація</p>
            <div className={styles.fields}>
                <TextField
                    required
                    id="outlined-required"
                    label="Електорона пошта"
                    className={styles.field}
                />

                <TextField
                    required
                    id="outlined-password-input"
                    label="Пароль"
                    type="password"
                    autoComplete="current-password"
                    className={styles.field}
                />
                <Button variant="text" style={{ color: "black" }} >Підтвердити</Button>
            </div>

        </div>
    );
};

export default Products;