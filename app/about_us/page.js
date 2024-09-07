import OurMission from "./OurMission";
import OurValues from "./OurValues";
import OurCrew from "./OurCrew";
import OurPartners from "./OurPartners";

import styles from "./page.module.css";

export const Crew = () => {
    return (
        <div className="fullBGpicture">
            <main className="mainContent">
                <section className="card">
                    <OurMission />
                </section>
                <section className="card">
                    <OurValues />
                </section>
                <section className="card">
                    <OurCrew />
                </section>
                <section className="card">
                    <OurPartners />
                </section>
            </main>
        </div>
    );
};

export default Crew;
