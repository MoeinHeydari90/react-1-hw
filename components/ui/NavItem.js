import Link from "next/link";
import classNames from "classnames";
import styles from "./Navbar.module.css";

export const NavItem = ({ title, link, isActive }) => {
    return (
        <li
            className={classNames(styles.navbarLinks, {
                [styles.isLinkActive]: isActive,
            })}
        >
            <Link href={link}>
                <b>{title.slice(0, 2)}</b> {title.slice(3)}
            </Link>
        </li>
    );
};
