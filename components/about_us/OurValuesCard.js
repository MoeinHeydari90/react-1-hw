import styles from "./OurValuesCard.module.css";

export default function OurValuesCard({ title, text }) {
    return (
        <>
            <div className={styles.ourValuesItem}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </>
    );
}
