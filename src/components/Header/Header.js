import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <li className={styles.lineItem}>
                    {/* <img src={logo} className={styles.logo} /> */}
                    The Jala Padam
                </li>
            </nav>
        </header>
    );
}

export default Header;
