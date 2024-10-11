import "../styles/utility.css"
import "../styles/header.css";
import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg"
import Button from "../components/Button";
import {useEffect, useState } from "react";
import HeroRectangleOne from "../assets/images/RectangleOne.png";
import HeroRectangleTwo from "../assets/images/RectangleTwo.png";
import "../styles/hero.css";
import "../styles/solution.css"
import Card from "../components/Card";

export default function Home() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
		const body = document.body;
		if (showMobileMenu) {
			body.style.overflow = "hidden";
			body.style.position = "fixed";
			body.style.width = "100%";
		} else {
			body.style.overflow = "auto";
			body.style.position = "static";
		}

		return () => {
			body.style.overflow = "auto";
			body.style.position = "static";
		};
	}, [showMobileMenu]);

    

 
return (
    
    
    <>
        <header className="container py-sm">
            <nav className="flex items-center justify-between">
                <img src={Logo} alt="Logo FOOF" width={220} height={80}/>
                <div className="desktop-only">
                    <ul className="flex gap-1">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#solution">Soluções</a>
                        </li>
                        <li>
                            <a href="#testimonials">Depoimentos</a>
                        </li>
                        <li>
                            <a href="#pricieng">Preços</a>
                        </li>
                        <li>
                            <a href="#contact">Contato</a>
                        </li>
                    </ul>
                </div>
                <div className="desktop-only">
                    <div className="flex items-center">
                        <a className="reverse-color ml-lg" href="">Login</a>
                        <Button text="Cadastre-se"/>
                    </div>
                </div>

                <div className="mobile-menu">
                    {showMobileMenu ?
                        <div className="mobile-menu-content">
                            <div className="container flex">
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#solution">Soluções</a>
                                    </li>
                                    <li>
                                        <a href="#testimonials">Depoimentos</a>
                                    </li>
                                    <li>
                                        <a href="#pricing">Preços</a>
                                    </li>
                                    <li>
                                        <a href="#contact">Contato</a>
                                    </li>
                                    <li>
                                        <a className="reverse-color" href="#">Login</a>
                                    </li>
                                </ul>
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                            </span>
                            </div>
                        </div>
                        :
                        <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                            <img src={Menu} alt="ícone menu" width={24} height={24} />
                        </span>
                    }
                </div>

            </nav>
        </header>

        <section id="hero">
            <span className="desktop-only">
                <img src={HeroRectangleTwo} alt="Retangulo pc" />
            </span>
            <img src={HeroRectangleOne} alt="Retangulo" />
                <div className="container content">
                    <span className="desktop-only"><p></p>
                    </span>
                    <h1>
                    Bem-vindo ao FOOF – Onde Cada Visita Faz a Diferença!
                    </h1>
                    <p>
                    Mergulhe em um universo de aventuras naturais com nossa impressionante coleção de animais e habitats. No FOOF, você não apenas observa a vida selvagem, mas participa ativamente da conservação e proteção dessas espécies maravilhosas.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se"/></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
        </section>

        <section id="solution">
            <div className="container content">
                <h2>
                    Programação de hoje!
                </h2>
                <p>
                    Liberte o seu sentimento de admiração por 160 plantas, animais e habitats únicos, de todo o mundo.
                </p>
                <div className="card-container even-columns">
                    <Card title="Festival Noturno" description="Descubra a vida noturna do zoológico com uma visita guiada, atividades interativas e um espetáculo de luzes!" />

                    <Card title="Encontro com Gigantes" description="Conheça de perto elefantes e girafas, participe de sessões de alimentação e aprenda sobre conservação!"/>

                    <Card title="Safari de Inverno" description="Vivencie um safári de inverno com passeios temáticos, fogueiras e chocolate quente para toda a família!"/>
                </div>

            </div>
        </section>

        <section id="testimonials">
            <header>
                <span>
                    <p className="desktop-only">
                        Conselho de quem conhece
                    </p>
                    <h2>
                        Cada visita importa!
                    </h2>
                </span>
                <p>
                    AAAAAAAAA
                </p>
            </header>
            <section className="carousel">
                <div className="carousel-content">
                    <div>
                        
                    </div>
                </div>
            </section>
        </section>
    </>
)
}
