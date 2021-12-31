import React from "react";

export default function Header() {
    return (
    <header id="headerSection" className="header">
        <div className="header__container">
            <img className="header__logo" src="./img/AAlogo.svg" />
            <h1>Audrey Adélaïde</h1>
        </div>
        <nav className="header__navbar">

        <input id='hamburger' className="navmobil" type='checkbox' />
                <label htmlFor='hamburger' className="navmobil navmobil__icon">
                    <i className="fas fa-bars"></i>
                    <i className="fas fa-times"></i>
                </label>

            <ul className="navlinks">
                <li><a href="index.html"><i className="fas fa-house-user" alt="retour à l'accueil"></i></a></li>
                <li><a href="#about">A propos</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    );
}
