import { animals } from "./Animals"

function Main() {
    const title = ""
    const animalFacts = title === "" ? "Click an animal for a fun fact" : title

    const images = [];
    for (const animal in animals) {
        images.push(
          <img 
          key={animal}
          className='animal'
          alt={animal}
          src={animals[animal].image}
          aria-label={animal}
          role='button'
          onClick={displayFact}
          />
          )
      };

    function displayFact(e) {
        const selectedAnimal = e.target.alt;
        const animalInfo = animals[selectedAnimal];
        const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
      
        const funFact = animalInfo.facts[optionIndex];
        document.getElementById('fact').innerHTML = funFact;
      }  

    return (
        <div>
       
        <h1 className="title">{animalFacts}</h1>
        
        <img className="background" src="https://i.imgur.com/uVVp0ob.jpg" alt="ocean"/>
        <p id="fact"></p>
        <div>{images}</div>
        
        

        </div>
    )
}

export default Main;