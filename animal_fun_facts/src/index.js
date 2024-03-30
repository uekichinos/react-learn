import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById('root');
const root = createRoot(container);

const title = '';
const showBackground = true;
const background = <img src='/images/ocean.jpg' class='background' alt='ocean'/>;

function displayFact(e) {
  const animal = e.target.alt;
  const index = Math.floor(Math.random() * animals[animal].facts.length);
  const funFact = animals[animal].facts[index];
  document.getElementById('fact').innerHTML = funFact;
}

const image = [];
for (const animal in animals) {
   image.push(
    <img
    onClick={displayFact}
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
    />
   )
};

const animalFacts = (
  <div>
    <h1>{title || "Click an animal for a fun fact"}</h1>
    {showBackground && background}
    <p id='fact'></p>
    <div className='animals'>{image}</div>
  </div>
);

root.render(animalFacts);
