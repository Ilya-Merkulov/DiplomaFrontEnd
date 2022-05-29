import { AppBar, ButtonBase, TextField, Toolbar, InputBase } from "@mui/material";
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <AppBar
            position="static"
            style={{ backgroundColor: "#36AE7C", boxShadow: "none" }}
        >
            <Toolbar className={styles.navbar}>
                <div className={styles.leftnavbar}>
                    <Link className={styles.link}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Головна
                    </Link>
                    <div>
                        <InputBase
                            style={{ color: "white" }}
                            placeholder="пошук"
                        // InputProps={{
                        //     className: styles.searchField
                        // }}
                        />
                    </div>
                </div>

                <div className={styles.rightnavbar}>
                    <Link className={styles.link}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Увійти
                    </Link>
                    <Link className={styles.link}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            navigate("/registration");
                        }}
                    >
                        Зареєструватися
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;