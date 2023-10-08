const btn = document.querySelector("button")
btn.addEventListener("click", getRandomPokemon)
const input = document.querySelector("input");

const typeSpan = document.getElementById("pokemonType")
const weightSpan = document.getElementById("pokemonWeight")
const heightSpan = document.getElementById("pokemonHeight")

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
     
      getRandomPokemon();
    }
  });

async function getRandomPokemon() {
  try {
    const pokeName = document.querySelector("input").value.toLowerCase()
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`); 
    const data = await response.json();

    const pokemonName = data.name;
    const pokemonImage = data.sprites.front_default;
    const pokeWeight = (data.weight * 0.1).toFixed(2);
    const pokeHeight = data.height * 10;
    const pokeType = data.types.map(type => type.type.name);

    const img = document.getElementById("pokemonImage");
    img.src = pokemonImage;

    typeSpan.innerHTML = pokeType;
    weightSpan.innerHTML = pokeWeight;
    heightSpan.innerHTML = pokeHeight;
    console.log('Nombre del Pokémon:', pokemonName);
    console.log('Imagen del Pokémon:', pokemonImage);
    console.log('Peso del pokemon:', pokeWeight);
    console.log('Tipo de pokemon:', pokeType);
    console.log('Altura del pokemon: ', pokeHeight);
  } catch (error) {
    console.error('Error al obtener datos del Pokémon:', error);
    alert("Sorry, we don´t have that pokemon in our data")
  }
}

