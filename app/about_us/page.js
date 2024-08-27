import styles from "./page.module.css";

// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files

const OurValues = () => {
    // TASK - React 1 week 1
    // Create the "Our Values" section
    // Use the descriptions provided in /app/about_us/README.md
    // Some inspiration ideas found in /data/inspiration_about_us
    return (
        <>
            <h3>Exploration</h3>
            <p>
                We are driven by a deep-seated desire to explore the unknown. We believe that the
                pursuit of discovery is at the heart of human nature, and we are committed to
                pushing the boundaries of what is possible.
            </p>

            <h3>Innovation</h3>
            <p>
                At Galactica, we prioritize cutting-edge technology and innovation. We are
                constantly evolving our spacecraft, safety protocols, and services to ensure that
                our travelers experience the most advanced and secure space journeys available.
            </p>

            <h3>Sustainability</h3>
            <p>
                We are committed to making space exploration sustainable for future generations. Our
                space missions are designed to minimize environmental impact, both on Earth and in
                space, and to foster a spirit of responsibility towards our universe.
            </p>

            <h3>Community</h3>
            <p>
                We believe in the power of collective exploration. Our journeys are not just about
                reaching new destinations; they are about building a community of space enthusiasts
                who share a passion for the stars.
            </p>
        </>
    );
};

const OurCrew = () => {
    // TASK - React 1 week 1
    // Create the "Our Crew section"
    // Use the descriptions provided in /app/about_us/README.md
    // Use the pictures from /public/crew
    // Some inspiration ideas found in /data/inspiration_about_us
    return <p> ADD OUR CREW HERE </p>;
};

const OurPartners = () => {
    // TASK - React 1 week 1
    // Create the "Our Crew section"
    // Use the descriptions provided in /app/about_us/README.md
    // Use the pictures from /public/crew
    // Some inspiration ideas found in /data/inspiration_about_us
    return <p> ADD OUR Partners HERE </p>;
};

export const Crew = () => {
    return (
        <div className="fullBGpicture">
            <main className="mainContent">
                <h1>About us</h1>
                <section className="card">
                    <h2>Our Values</h2>
                    <OurValues />
                </section>
                <section className="card">
                    <h2>The crew</h2>
                    <OurCrew />
                </section>

                {/* TASK - React 1 week 1 */}
                {/* Add in the "OurPartners" component here */}
            </main>
        </div>
    );
};

export default Crew;
