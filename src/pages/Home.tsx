import "../styles/utility.css"
import "../styles/header.css";
import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg"
import Check from "../assets/check.svg";
import Button from "../components/Button";
import Card from "../components/Card";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import {FormEvent, useEffect, useState } from "react";
import HeroRectangleOne from "../assets/images/RectangleOne.png";
import HeroRectangleTwo from "../assets/images/RectangleTwo.png";
import RyanGosling from "..//assets/images/RyanGosling.jpg";
import Tangerina from "../assets/images/Tangerina.jpg";
import BradPitt from "../assets/images/BradPitt.jpg"
import AnaDeArmas from "../assets/images/AnaArmas.jpg"
import "../styles/hero.css";
import "../styles/solution.css"
import "../styles/pricing.css"
import ContactForm from "../components/Contact";


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
                        <Button func={() => console.log("teste")}text="Cadastre-se"/>
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
                        <span><Button func={() => console.log("teste")} text="Cadastre-se"/></span>
                        <span className="desktop-only">
                            <Button func={() => console.log("teste")} text="Veja mais" secondary />
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
                    Está com duvida se o nosso zoológico realmente tem todas essas atrações? Veja o conselho de quem já nos visitou e aprovou!
                </p>
            </header>
            <section className="carousel">
                <div className="carousel-content">
                  
                        <TestimonialCard
                        comentary="Visitar o Foozoo foi incrível para nossa família! As crianças adoraram os animais e as atrações interativas. O dia todo foi divertido, e a área de alimentação tem ótimas opções. Voltaremos com certeza!"
                        urlProfileImage={RyanGosling}
                        starNumber={5}
                        nameCostumer="Ryan Gosling"
                        ocupationCostumer="Motorista"    
                        />
                        
                        <TestimonialCard
                        comentary="Eu amei o Foozoo! Cada parte é cheia de vida e as apresentações são emocionantes e educativas. O cuidado com os animais é admirável. Um lugar mágico para aprender e se divertir!"
                        urlProfileImage={Tangerina}
                        starNumber={4}
                        nameCostumer="Aaron Taylor"
                        ocupationCostumer="Advogado"
                        />

                        <TestimonialCard
                        comentary="O Foozoo é perfeito para quem busca aventura! As trilhas e experiências com os animais são fantásticas. A adrenalina do arvorismo foi o ponto alto do dia. Recomendo para todos!"
                        urlProfileImage={BradPitt}
                        starNumber={5}
                        nameCostumer="Brad Pitt"
                        ocupationCostumer="Vendedor de sabonetes"    
                        />

                        <TestimonialCard
                        comentary="Como amante da natureza, o Foozoo foi uma grande aula sobre conservação. As iniciativas de preservação são inspiradoras e as palestras educativas são muito informativas. Parabéns à equipe!"
                        urlProfileImage={AnaDeArmas}
                        starNumber={5}
                        nameCostumer="Ana de Armas"
                        ocupationCostumer="Policial"    
                        />
                        
                </div>
                <div className="carousel-content">

                        <TestimonialCard
                        comentary="Visitar o Foozoo foi incrível para nossa família! As crianças adoraram os animais e as atrações interativas. O dia todo foi divertido, e a área de alimentação tem ótimas opções. Voltaremos com certeza!"
                        urlProfileImage={RyanGosling}
                        starNumber={5}
                        nameCostumer="Ryan Gosling"
                        ocupationCostumer="Motorista"    
                        />
                        
                        <TestimonialCard
                        comentary="Eu amei o Foozoo! Cada parte é cheia de vida e as apresentações são emocionantes e educativas. O cuidado com os animais é admirável. Um lugar mágico para aprender e se divertir!"
                        urlProfileImage={Tangerina}
                        starNumber={4}
                        nameCostumer="Aaron Taylor"
                        ocupationCostumer="Advogado"
                        />

                        <TestimonialCard
                        comentary="O Foozoo é perfeito para quem busca aventura! As trilhas e experiências com os animais são fantásticas. A adrenalina do arvorismo foi o ponto alto do dia. Recomendo para todos!"
                        urlProfileImage={BradPitt}
                        starNumber={5}
                        nameCostumer="Brad Pitt"
                        ocupationCostumer="Vendedor de sabonetes"    
                        />

                        <TestimonialCard
                        comentary="Como amante da natureza, o Foozoo foi uma grande aula sobre conservação. As iniciativas de preservação são inspiradoras e as palestras educativas são muito informativas. Parabéns à equipe!"
                        urlProfileImage={AnaDeArmas}
                        starNumber={5}
                        nameCostumer="Ana de Armas"
                        ocupationCostumer="Policial"    
                        />

                </div>
                
            </section>
        </section>

        <section id="pricing" className="container">
            <header>
                <p className="desktop-only">Ingressos e preços</p>    
                <h2>Nossos Ingressos</h2>
            </header>

            <section className="even-columns gap 1.5">
                <div className="pricing-card">
                    <span className="ticket">
                        <h3>Básico - Entrada Geral</h3>
                        <p>Plano ideal para quem quer uma visita simples e rápida, com acesso às atrações principais do zoológico.</p>

                    </span><h2>R$ 50,00</h2> <Button func={() => console.log("compro")} text="Comprar agora" secondary key="basic"/>
                    <span className="hr"/>
                    <ul className="features">
                        <li>
                            <img src={Check} alt="check" />
                            <p>Até 5 Pessoas por grupo</p>
                        </li>
                        <li>
                            <img src={Check} alt="check" />
                            <p>Acesso às principais áreas e shows do zoológico.</p>
                        </li>
                    </ul>
                </div>

                <div className="pricing-card premium">
                    <span className="bonus"><p>O MAIS ESCOLHIDO</p></span>
                    <span className="ticket">
                        <h3>VIP - Experiência Exclusiva</h3>
                        <p>Para quem busca uma experiência única e personalizada, com exclusividade e atendimento VIP.</p>
                    </span>
                    <span className="price">
                        <h2>R$ 250,00</h2>
                        <p>/ pessoa</p>
                    </span>
                    <Button func={() => console.log("compro")} text="Comprar agora" key="premium"/>
                    <span className="hr"/>
                    <ul className="features">
                        <li>
                        <img src={Check} alt="check" width={24} height={24}/>
                        <p>Até 2 Pessoas</p>
                        </li>
                        <li>
                        <img src={Check} alt="check" width={24} height={24}/>
                        <p>Acesso exclusivo a bastidores, tour guiado, alimentação gourmet e fotografia profissional.</p>
                        </li>
                        <li>
                        <img src={Check} alt="check" width={24} height={24}/>
                        <p>Encontro particular com um biólogo ou especialista para tour guiado.</p>
                        </li>
                    </ul>
                </div>
                
                <div className="pricing-card">
                    <span className="ticket">
                        <h3>Família - Aventura Completa</h3>
                        <p> Perfeito para famílias, com atividades interativas para crianças e um dia cheio de diversão e aprendizado.</p>

                    </span><h2>R$ 120,00</h2> <Button func={() => console.log("compro")} text="Comprar agora" secondary key="basic"/>
                    <span className="hr"/>
                    <ul className="features">
                        <li>
                            <img src={Check} alt="check" />
                            <p>Até 4 pessoas(2 adultos + 2 crianças) </p>
                        </li>
                        <li>
                            <img src={Check} alt="check" />
                            <p>Acesso completo, atividades educativas e 1 voucher para alimentação.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </section>   

        <section id="contact">
        <ContactForm/>
        </section>
        <Footer show={true}/>
    </>
)
}
