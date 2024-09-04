import OurValuesCard from "@/components/about_us/OurValuesCard";
import ourValuesData from "@/data/ourValuesData.json";

import styles from "../../components/about_us/OurValuesCard.module.css";

const OurValues = () => {
    return (
        <>
            <h2 className={styles.ourValuesCardTitle}>Our Values</h2>
            <div className={styles.ourValuesCard}>
                {ourValuesData.map((card, index) => (
                    <OurValuesCard key={index} title={card.title} text={card.text} />
                ))}
            </div>
        </>
    );
};

export default OurValues;
