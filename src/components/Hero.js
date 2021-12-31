import React from "react";

export default function Hero() {
    return (
    <section id="heroSection" className="hero">
        <div className="hero__container">

            <div>
                <h1>Bonjour, Je suis <br />
                <span>Audrey Adélaïde</span> <br />
                J&rsquo;adore concevoir de superbes applications incroyable.</h1>

                <p className="a definir...">
                <strong>Développeuse Web</strong> en formation, <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                Laborum, voluptas natus?
                </p>
            </div>

            <div>
                <button>CV</button>
                <button>Me recruter</button>
            </div>
        </div>
    </section>
    );
}