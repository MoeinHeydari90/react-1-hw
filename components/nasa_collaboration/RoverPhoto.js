import styles from "../nasa_collaboration/nasa_collaboration.module.css";

const RoverPhoto = ({ src, date, roverName }) => (
    <div className={styles.roverPhoto}>
        <h3>Rover: {roverName}</h3>
        <p>Date: {date}</p>
        <img src={src} alt={`Photo by rover ${roverName}`} />
    </div>
);

export default RoverPhoto;
