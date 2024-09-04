"use client";
import styles from "./OurPartnersCard.module.css";

export default function OurPartnersCard({ name, logo, url }) {
    const handleClick = () => {
        window.open(url, "_blank");
    };

    return (
        <>
            <div onClick={handleClick} className={styles.ourPartnersItem}>
                <img className={styles.ourPartnersItemImage} alt={name} src={logo} />
            </div>
        </>
    );
}
