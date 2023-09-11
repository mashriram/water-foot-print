import styles from "./Header.module.css";
import logo from "./../../images/header-logo.png"; // with import

function Header() {
    return (
        <header>
            <nav>
                <li className={styles.lineItem}>
                    <img src={logo} className={styles.logo} />
                </li>
            </nav>
        </header>
    );
}

export default Header;
