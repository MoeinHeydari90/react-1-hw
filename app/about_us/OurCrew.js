import OurCrewCard from "@/components/about_us/OurCrewCard";
import ourCrewData from "@/data/ourCrewData.json";

import styles from "@/components/about_us/OurCrewCard.module.css";

const OurCrew = () => {
    return (
        <>
            <h2 className={styles.ourCrewCardsTitle}>Our Crew</h2>

            <p className={styles.ourCrewDescription}>
                Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space
                explorers, engineers, and visionaries who are united by a common goal:{" "}
                <strong>
                    <em>to make space travel accessible and exciting for all.</em>
                </strong>
            </p>
            <div className={styles.ourCrewCards}>
                {ourCrewData.map((card, index) => (
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
