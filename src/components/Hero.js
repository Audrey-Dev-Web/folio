import React from "react";

export default function Hero() {
    return (
    <section id="heroSection" className="hero">
        <div className="hero__container">

            <div className="hero__presentation">
                <h1>Bonjour, Je suis
                <span className="name">Audrey Adélaïde</span> <br />
                J&rsquo;adore concevoir de superbes applications.</h1>

                <p className="hero__introduction"> 
                <span className="job">Développeuse Web </span> <br /> En formation avec OpenClassrooms, <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                Laborum, voluptas natus?
                </p>

                <div>
                <button className="hero__btn btn btn--grey">Télécharger mon CV</button>
                <button className="hero__btn btn">Me recruter</button>
            </div>
            </div>


            <div className="hero__logo hero--flex">
                    <img src="folio/img/AAlogo.svg" alt="Audrey Adélaïde | Développeuse web logo" />
                </div>
        </div>
    </section>
    );
}