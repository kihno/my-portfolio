import React from "react";
import Navbar from './Navbar';
import Battleship from  '../images/thumbnails/battleship.png';
import Blog from  '../images/thumbnails/blog.png';
import Calculator from  '../images/thumbnails/calculator.png';
import Etchasketch from  '../images/thumbnails/etchasketch.png';
import Library from  '../images/thumbnails/library.png';
import Memory from  '../images/thumbnails/memory-game.png';
import N64Store from  '../images/thumbnails/n64-store.png';
import Restaurant from  '../images/thumbnails/restaurant.png';
import Roshambo from  '../images/thumbnails/roshambo.png';
import Cart from  '../images/thumbnails/shopping-cart.png';
import Taskmaster from  '../images/thumbnails/taskmaster.png';
import TicTacToe from  '../images/thumbnails/tic-tac-toe.png';
import Weather from  '../images/thumbnails/weather.png';
import WheresWaldo from  '../images/thumbnails/wheres-waldo.png';
import Stonecutters from  '../images/thumbnails/stonecutters.png';
import '../styles/Projects.css';
import '../styles/button.css';

const Projects = () => {
    let projects = [
        {
          title: 'Battleship',
          description: 'A Battleship game built with Webpack and TDD.',
          image: Battleship,
          link: 'https://kihno.github.io/battleship/',
          repo: 'https://github.com/kihno/battleship',
        },
        {
          title: 'Blog',
          description: 'A full-stack blog with a react front-end and express back-end, featuring AI generated conspiracy themed posts.',
          image: Blog,
          link: 'https://blog-frontend-alm2.onrender.com/',
          repo: 'https://github.com/kihno/blog',
        },
        {
          title: 'Calculator',
          description: 'A simple calculator app built with vanilla javascript.',
          image: Calculator,
          link: 'https://kihno.github.io/calculator/',
          repo: 'https://github.com/kihno/calculator',
        },
        {
          title: 'Inventory',
          description: 'A CRUD inventory management app built with express.',
          image: N64Store,
          link: 'https://n64-store.onrender.com/catalog',
          repo: 'https://github.com/kihno/inventory',
        },
        {
          title: 'Library',
          description: 'A library CRUD app for keeping track of your reading list.',
          image: Library,
          link: 'https://kihno.github.io/library-app/',
          repo: 'https://github.com/kihno/library-app',
        },
        {
          title: 'Memory-Game',
          description: 'A Star Wars themed memory card game built with React.',
          image: Memory,
          link: 'https://kihno.github.io/memory-game/',
          repo: 'https://github.com/kihno/memory-game',
        },
        {
          title: 'Message Board',
          description: `A Simpson's themed message board app built with express.`,
          image: Stonecutters,
          link: 'https://stonecutters.onrender.com/stonecutters',
          repo: 'https://github.com/kihno/stonecutters',
        },
        {
          title: 'Restaurant',
          description: 'A single page restaurant website mock-up made with webpack.',
          image: Restaurant,
          link: 'https://kihno.github.io/restaurant-page/',
          repo: 'https://github.com/kihno/restaurant-page',
        },
        {
          title: 'Roshambo',
          description: 'A Rock-Paper-Scissors game built with vanilla javascript.',
          image: Roshambo,
          link: 'https://kihno.github.io/rock-paper-scissors/',
          repo: 'https://github.com/kihno/rock-paper-scissors',
        },
        {
          title: 'Shopping Cart',
          description: 'A storefront app that pulls products from an API and features a functioning shopping cart.',
          image: Cart,
          link: 'https://kihno.github.io/shopping-cart/',
          repo: 'https://github.com/kihno/shopping-cart',
        },
        {
          title: 'Sketch App',
          description: 'A pixel drawing app based on the classic Etch-A-Sketch toy.',
          image: Etchasketch,
          link: 'https://kihno.github.io/etch-a-sketch/',
          repo: 'https://github.com/kihno/etch-a-sketch',
        },
        {
          title: 'Taskmaster',
          description: 'A todo-list app built with a firebase back-end and Google sign-in authentication.',
          image: Taskmaster,
          link: 'https://kihno.github.io/todo-app/',
          repo: 'https://github.com/kihno/todo-app',
        },
        {
          title: 'Tic-Tac-Toe',
          description: 'A Tic Tac Toe game built with vanilla javascript.',
          image: TicTacToe,
          link: 'https://kihno.github.io/tic-tac-toe/',
          repo: 'https://github.com/kihno/tic-tac-toe',
        },
        {
          title: 'Weather API',
          description: 'A simple weather app that connects to Open Weather API.',
          image: Weather,
          link: 'https://kihno.github.io/weather-app/',
          repo: 'https://github.com/kihno/weather-app',
        },
        {
          title: `Where's Waldo`,
          description: `A Where's Waldo puzzle app with firebase back-end.`,
          image: WheresWaldo,
          link: 'https://kihno.github.io/wheres-waldo/',
          repo: 'https://github.com/kihno/wheres-waldo',
        },
      ];

    return (
        <main>
            <Navbar />
            <section className='projectContainer'>
                {projects.map((project, index) => {
                    return <div className='project' key={index}>
                                <h3>{project.title}</h3>
                                <div className='content'>
                                    <p>{project.description}</p>
                                        <div className="buttons">
                                            <a target='_blank' rel='noopener noreferrer' href={project.link} className='button'>Live Site</a>
                                            <a target='_blank' rel='noopener noreferrer' href={project.repo} className='button'>Repo</a>
                                        </div>
                                </div>
                                <img src={project.image} alt={project.title}></img>
                            </div>
                })}

            </section>
        </main>
    )
}

export default Projects;