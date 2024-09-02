import styles from "./OurCrewCard.module.css";

export default function OurCrewCard({ image, position, name, description }) {
    return (
        <div className={styles.ourCrewItem}>
            <div className={styles.ourCrewItemContainer}>
                <img className={styles.ourCrewItemImage} src={image} alt={name} />
                <div className={styles.ourCrewItemDescription}>
                    <p>{description}</p>
                </div>
            </div>
            <h3 className={styles.ourCrewItemName}>{name}</h3>
            <h4 className={styles.ourCrewItemPosition}>{position}</h4>
        </div>
    );
}
