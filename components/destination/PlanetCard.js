import styles from "@/components/destination/destination.module.css";

const PlanetCard = ({ name, description, thumbnail, isSelected, onAddOrRemovePlanet }) => {
    return (
        <div className={`${styles.planetCard} ${isSelected ? styles.selected : ""}`}>
            <img className={styles.planetThumbnail} src={thumbnail} alt={name} />
            <div className={styles.planetDescription}>
                <h2>
                    {name.toUpperCase()} {isSelected ? "- SELECTED" : ""}
                </h2>
                <p>{description}</p>
            </div>
            <button className="roundButton" onClick={onAddOrRemovePlanet}>
                {isSelected ? "REMOVE" : "ADD PLANET"}
            </button>
        </div>
    );
};

export default PlanetCard;
