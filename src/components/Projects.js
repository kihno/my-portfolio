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

const Projects = () => {
    let projects = [
        {
          title: 'Battleship',
          description: 'A Battleship game built with Webpack and TDD.',
          image: Battleship,
          link: '',
          repo: '',
        },
        {
          title: 'Blog',
          description: 'A full-stack blog with a react front-end and express back-end, featuring AI generated conspiracy themed posts.',
          image: Blog,
          link: '',
          repo: '',
        },
        {
          title: 'Calculator',
          description: 'A simple calculator app built with vanilla javascript.',
          image: Calculator,
          link: '',
          repo: '',
        },
        {
          title: 'Inventory',
          description: 'A CRUD inventory management app built with express.',
          image: N64Store,
          link: '',
          repo: '',
        },
        {
          title: 'Library',
          description: 'A library app for keeping track of your reading list.',
          image: Library,
          link: '',
          repo: '',
        },
        {
          title: 'Memory-Game',
          description: 'A Star Wars themed memory card game built with React.',
          image: Memory,
          link: '',
          repo: '',
        },
        {
          title: 'Message Board',
          description: `A Simpson's themed message board app built with express.`,
          image: Stonecutters,
          link: '',
          repo: '',
        },
        {
          title: 'Restaurant',
          description: 'A single page restaurant website mock-up made with webpack.',
          image: Restaurant,
          link: '',
          repo: '',
        },
        {
          title: 'Roshambo',
          description: 'A Rock-Paper-Scissors game built with vanilla javascript.',
          image: Roshambo,
          link: '',
          repo: '',
        },
        {
          title: 'Shopping Cart',
          description: 'A storefront app that pulls products from an API and features a functioning shopping cart.',
          image: Cart,
          link: '',
          repo: '',
        },
        {
          title: 'Sketch App',
          description: 'A pixel drawing app based on the classic Etch-A-Sketch toy.',
          image: Etchasketch,
          link: '',
          repo: '',
        },
        {
          title: 'Taskmaster',
          description: 'A todo-list app built with a firebase back-end and Google sign-in authentication.',
          image: Taskmaster,
          link: '',
          repo: '',
        },
        {
          title: 'Tic-Tac-Toe',
          description: 'A Tic Tac Toe game built with vanilla javascript.',
          image: TicTacToe,
          link: '',
          repo: '',
        },
        {
          title: 'Weather API',
          description: 'A simple weather app that connects to Open Weather API.',
          image: Weather,
          link: '',
          repo: '',
        },
        {
          title: `Where's Waldo`,
          description: `A Where's Waldo puzzle app with firebase back-end.`,
          image: WheresWaldo,
          link: '',
          repo: '',
        },
      ];

    return (
        <main>
            <Navbar />
            <h1>Projects</h1>
            <section className='projectContainer'>
                {projects.map((project, index) => {
                    return <div className='project' key={index}>
                                <h3>{project.title}</h3>
                                <div className='content'>
                                    <p>{project.description}</p>
                                        <div className="buttons">
                                            <button>Live Site</button>
                                            <button>Repo</button>
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