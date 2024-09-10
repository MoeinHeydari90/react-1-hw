import styles from "../nasa_collaboration/nasa_collaboration.module.css";

const RoverPhoto = ({ src, date, roverName }) => (
    <div className="rover-photo">
        <h3>{roverName}</h3>
        <p>Date: {date}</p>
        <img src={src} alt={`Photo by rover ${roverName}`} className={styles.nasaPicOfTheDayImg} />
    </div>
);

export default RoverPhoto;
