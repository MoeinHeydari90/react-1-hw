import Link from "next/link";
import classNames from "classnames";
import styles from "./Navbar.module.css";

export const NavItem = ({ index, title, link, isActive }) => {
    return (
        <li
            className={classNames(styles.navbarLinks, {
                [styles.isLinkActive]: isActive,
            })}
        >
            <Link href={link}>
                <b> 0{index + 1}</b> {title}
            </Link>
        </li>
    );
};
