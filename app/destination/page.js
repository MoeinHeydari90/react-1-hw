"use client";

import { useState } from "react";
import AddWishlistItem from "@/components/destination/AddWishlistItem";
import PlanetWishListItem from "@/components/destination/PlanetWishlistItem";
import PlanetCard from "@/components/destination/PlanetCard";
import planetsData from "@/data/planetsData.json";
import styles from "@/components/destination/destination.module.css";

export const Destinations = () => {
    const [selectedPlanets, onAddPlanet] = useState([]);

    const onAddOrRemovePlanet = (name, index) => {
        const updatedPlanets = [...selectedPlanets];

        if (updatedPlanets.some((planet) => planet.name === name)) {
            // Planet already selected, remove it
            const filteredPlanets = updatedPlanets.filter((planet) => planet.name !== name);
            onAddPlanet(filteredPlanets);
        } else {
            // Planet not selected, add it
            const planetData = planetsData.find((p) => p.name === name);
            updatedPlanets.push({ name: planetData.name, thumbnail: planetData.thumbnail });
            onAddPlanet(updatedPlanets);
        }
    };

    const removeFromWishlist = (name) => {
        const updatedPlanets = selectedPlanets.filter((planet) => planet.name !== name);
        onAddPlanet(updatedPlanets);
    };

    const addCustomWishlistItem = (name, thumbnail) => {
        if (!selectedPlanets.some((planet) => planet.name === name)) {
            onAddPlanet([...selectedPlanets, { name, thumbnail }]);
        }
    };

    return (
        <div className="fullBGpicture">
            <main className="mainContent">
                <h1>Travel destinations</h1>
                <section className="card">
                    <h2>Wishlist</h2>
                    <p>
                        {selectedPlanets.length === 0
                            ? "No planets in wishlist :("
                            : `You have ${selectedPlanets.length} in your wishlist`}
                    </p>

                    <AddWishlistItem onAddWishlistItem={addCustomWishlistItem} />

                    <h3>Your current wishlist</h3>
                    <div className={styles.wishlistList}>
                        {selectedPlanets.map((planet, index) => (
                            <PlanetWishListItem
                                key={index}
                                name={planet.name}
                                onRemove={() => removeFromWishlist(planet.name)}
                                thumbnail={planet.thumbnail || "/destination/image-placeholder.png"}
                            />
                        ))}
                    </div>
                </section>

                <section className="card">
                    <h2>Possible destinations</h2>
                    {planetsData.map((planet, index) => (
                        <PlanetCard
                            key={index}
                            name={planet.name}
                            description={planet.description}
                            thumbnail={planet.thumbnail}
                            isSelected={selectedPlanets.some((p) => p.name === planet.name)}
                            onAddOrRemovePlanet={() => onAddOrRemovePlanet(planet.name, index)}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Destinations;
