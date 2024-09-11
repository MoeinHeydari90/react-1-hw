"use client";

import { useState } from "react";
import styles from "./destination.module.css";

const AddWishlistItem = ({ onAddWishlistItem }) => {
    // Add a useState for the input handling
    const [wishlistName, setWishlistName] = useState(""); // State for the input text
    const [thumbnail, onThumbnailChange] = useState("/destination/image-europa.png"); // State for thumbnail

    const onAddItemPressed = () => {
        if (!wishlistName) {
            alert("Please add a name for the wishlist item.");
            return; // If the input is empty, we won't add it
        }

        // Call the onAddWishlistItem function and pass the name and thumbnail
        onAddWishlistItem(wishlistName, thumbnail);

        // Clear the input field after adding the item
        setWishlistName("");
        onThumbnailChange("/destination/image-europa.png"); // Reset the thumbnail to default
    };

    return (
        <div className={styles.addWishlistItem}>
            <p>Add custom planet to wishlist</p>
            <label htmlFor="customWishlist">Wishlist item name</label>
            <input
                id="customWishlist"
                type="text"
                value={wishlistName}
                onChange={(event) => setWishlistName(event.target.value)} // Update state on change
            />
            <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
            <select
                id="customWishlistThumbnail"
                value={thumbnail}
                onChange={(event) => onThumbnailChange(event.target.value)} // Update thumbnail state on select change
            >
                <option value="/destination/image-europa.png">EUROPA</option>
                <option value="/destination/image-mars.png">MARS</option>
                <option value="/destination/image-moon.png">MOON</option>
                <option value="/destination/image-titan.png">TITAN</option>
            </select>
            <button onClick={onAddItemPressed}>ADD CUSTOM</button>
        </div>
    );
};

export default AddWishlistItem;
