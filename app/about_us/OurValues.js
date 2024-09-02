import styles from "../../components/cards/OurValuesCard.module.css";

import ourValuesData from "@/data/ourValuesData";
import OurValuesCard from "@/components/cards/OurValuesCard";

const OurValues = () => {
    return (
        <>
            <h1 className={styles.ourValuesCardTitle}>Our Values</h1>
            <div className={styles.ourValuesCard}>
                {ourValuesData.map((card, index) => (
                    <OurValuesCard key={index} title={card.title} text={card.text} />
                ))}
            </div>
        </>
    );
};

export default OurValues;
