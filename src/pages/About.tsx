import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Text from '../components/Text';
import '../sass/pages/_about.scss';
import '../sass/base/_base.scss';
import '../sass/base/_font.scss';

const About = () => {

    return (
        <div className="container">
            <Header />
            <main className='main-about'>
                <section className='about'>
                    <Text
                        title="À Propos de Joker : Le Memory Game"
                        comment='Bienvenue sur Joker, votre destination ultime pour des défis de memory game passionnants et amusants !
                        Notre application de jeu en ligne est conçue pour offrir une expérience divertissante et stimulante à tous les amateurs de jeux.'
                    />

                    <Text
                        title='Notre Mission'
                        comment="Chez Joker, notre mission est de fournir un divertissement de qualité qui stimule l'esprit, encourage la compétition amicale
                        et crée des souvenirs inoubliables. Nous croyons fermement au pouvoir du jeu pour rassembler les gens, stimuler la cognition et favoriser le plaisir."
                    />

                    <Text
                        title='Notre Équipe'
                        comment="Chez Joker, notre équipe est composée de passionnés de jeux dévoués à offrir la meilleure expérience de jeu possible. De la conception et du développement
                        à l'assistance clientèle, chaque membre de notre équipe s'efforce de rendre Joker aussi amusant et engageant que possible pour nos utilisateurs."
                    />

                    <div className="middle-text">
                        <h2>Ce que nous offrons</h2>
                        <ul>
                            <li>
                                <strong>Des Jeux de Mémoire Stimulants : </strong>
                                Plongez dans une variété de niveaux de difficulté et de thèmes pour mettre à l'épreuve votre mémoire et votre concentration.
                            </li>
                            <li>
                                <strong>Des Graphismes Époustouflants : </strong>
                                Profitez de graphismes haut de gamme et d'une interface utilisateur conviviale qui rendent l'expérience de jeu encore plus immersive.
                            </li>
                            <li>
                                <strong>Des Fonctionnalités Sociales : </strong>
                                Défiez vos amis, suivez votre progression et partagez vos scores sur les réseaux sociaux pour une expérience de jeu encore plus enrichissante.
                            </li>
                            <li>
                                <strong>Une Communauté Accueillante : </strong>
                                Rejoignez une communauté de joueurs passionnés et partagez vos astuces, vos stratégies et votre amour pour les jeux de mémoire.
                            </li>
                        </ul>
                    </div>
                    <Text
                        title='Contactez-Nous'
                        comment="Nous adorons avoir des nouvelles de nos joueurs ! Si vous avez des questions, des commentaires ou des suggestions, n'hésitez pas à nous contacter à tout moment. 
                        Vous pouvez nous joindre par e-mail à contact@jokermemorygame.com ou via nos réseaux sociaux.
                        Merci d'avoir choisi Joker pour tous vos besoins en matière de jeu de mémoire en ligne. Préparez-vous à défier votre esprit et à vous amuser avec nous !"
                    />
                    <div className="presentation">
                        <p><strong>Sir Lesta</strong> & <strong>Sir Cartel</strong></p>
                        <p>Ingénieur & Développeur web</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default About;