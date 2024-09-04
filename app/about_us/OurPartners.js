import OurPartnersCard from "@/components/about_us/OurPartnersCard";
import ourPartnersData from "@/data/ourPartnersData.json";

import styles from "../../components/about_us/OurPartnersCard.module.css";

const OurPartners = () => {
    return (
        <>
            <h2 className={styles.ourPartnersTitle}>Our Partners</h2>
            <p className={styles.ourPartnersText}>
                We collaborate with some of the most respected names in the space and technology
                industries to make every journey extraordinary.
            </p>
            <div className={styles.ourPartnersCards}>
                {ourPartnersData.map((card, index) => (
                    <OurPartnersCard key={index} name={card.name} logo={card.logo} url={card.url} />
                ))}
            </div>
        </>
    );
};
export default OurPartners;
