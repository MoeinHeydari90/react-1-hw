import styles from "./Footer.module.css";

export const SocialMediaItem = ({ url, title, icon }) => {
    return (
        <li>
            <a href={url} className={styles.socialMediaLink}>
                <img src={icon} alt={`${title} icon`} className={styles.socialMediaIcon} />
                {title}
            </a>
        </li>
    );
};
