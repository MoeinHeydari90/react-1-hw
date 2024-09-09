"use client";

import { useState } from "react";

import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetWishListItem from "@/components/destination/PlanetWishlistItem";
import PlanetCard from "@/components/destination/PlanetCard";
import planetsData from "@/data/planetsData.json";

import styles from "@/components/destination/destination.module.css";

export const Destinations = () => {
    const [selectedPlanets, onAddPlanet] = useState([]);

    const onAddOrRemovePlanet = (name, index) => {
        console.log(`You selected the following planet: ${name}, with the index of ${index}`);
        const updatedPlanets = [...selectedPlanets];

        if (updatedPlanets.includes(name)) {
            // Planet already selected, remove it
            const filteredPlanets = updatedPlanets.filter((planet) => planet !== name);
            onAddPlanet(filteredPlanets);
        } else {
            // Planet not selected, add it
            updatedPlanets.push(name);
            onAddPlanet(updatedPlanets);
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
                    <b>List coming soon after lesson 3!</b>

                    {/* STOP! - this is for week 3!*/}
                    {/* TASK - React 1 week 3 */}
                    {/* Import the AddWishlistItem react component */}
                    {/* <AddWishlistItem /> */}
                    {/* TASK - React 1 week 3 */}
                    {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
                    {/* Implement the "REMOVE" function */}
                    {/* uncomment the following code snippet: */}

                    {/* <h3>Your current wishlist</h3>
                    <div className={styles.wishlistList}>
                        <PlanetWishListItem
                            name="europa"
                            onRemove={() => removeFromWishlist("europa")}
                            thumbnail="/destination/image-europa.png"
                        />
                        <PlanetWishListItem
                            name="europa"
                            onRemove={() => removeFromWishlist("europa")}
                            thumbnail="/destination/image-europa.png"
                        />
                    </div> */}
                </section>
                <section className="card">
                    <h2>Possible destinations</h2>
                    {planetsData.map((planet, index) => (
                        <PlanetCard
                            key={index}
                            name={planet.name}
                            description={planet.description}
                            thumbnail={planet.thumbnail}
                            isSelected={selectedPlanets.includes(planet.name)}
                            onAddOrRemovePlanet={() => onAddOrRemovePlanet(planet.name, index)}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Destinations;
