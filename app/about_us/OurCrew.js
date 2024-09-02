import styles from "../../components/cards/OurCrewCard.module.css";

import OurCrewData from "@/data/ourCrewData";
import OurCrewCard from "@/components/cards/OurCrewCard";

const OurCrew = () => {
    return (
        <>
            <h1 className={styles.ourCrewCardsTitle}>Our Crew</h1>

            <p className={styles.ourCrewDescription}>
                Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space
                explorers, engineers, and visionaries who are united by a common goal:{" "}
                <strong>
                    <em>to make space travel accessible and exciting for all.</em>
                </strong>
            </p>
            <div className={styles.ourCrewCards}>
                {OurCrewData.map((card, index) => (
                    <OurCrewCard
                        key={index}
                        image={card.image}
                        position={card.position}
                        name={card.name}
                        description={card.description}
                    />
                ))}
            </div>
        </>
    );
};
export default OurCrew;
