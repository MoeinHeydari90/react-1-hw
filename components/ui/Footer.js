"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SocialMediaItem } from "./SocialMediaItem";
import socialMediasData from "@/data/socialMediasData.json";

import styles from "./Footer.module.css";

export const Footer = () => {
    const path = usePathname().split("?")[0];
    return (
        <footer className={path !== "/" ? styles.footer : styles.hidden}>
            <div className={styles.footerDescription}>
                <h3>Galactica</h3>
                <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
                <p>&copy; 2024 Galactica. All rights reserved.</p>
            </div>

            <div className={styles.pages}>
                <h3>Pages</h3>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about_us">About Us</Link>
                    </li>
                    <li>
                        <Link href="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link href="/nasa_collaboration">NASA Collaboration</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.footerLinks}>
                <h3>Follow us</h3>
                <ul className={styles.footerList}>
                    {socialMediasData.map((media, index) => (
                        <SocialMediaItem
                            key={index}
                            url={media.url}
                            title={media.title}
                            icon={media.icon}
                        />
                    ))}
                </ul>
            </div>
        </footer>
    );
};
