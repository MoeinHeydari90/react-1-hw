import styles from "../../components/cards/OurPartnersCard.module.css";
import OurPartnersData from "@/data/ourPartnersData";
import OurPartnersCard from "@/components/cards/OurPartnersCard";

const OurPartners = () => {
    return (
        <>
            <h1 className={styles.ourPartnersTitle}>Our Partners</h1>
            <p className={styles.ourPartnersText}>
                We collaborate with some of the most respected names in the space and technology
                industries to make every journey extraordinary.
            </p>
            <div className={styles.ourPartnersCards}>
                {OurPartnersData.map((card, index) => (
                    <OurPartnersCard key={index} name={card.name} logo={card.logo} url={card.url} />
                ))}
            </div>
        </>
    );
};
export default OurPartners;
