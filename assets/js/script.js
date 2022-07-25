
let page = 1


const container = document.getElementById('container');

const pokemonsNumber = (1154);

const fetchPokemons = async()=>{
  for (let i = 1; i <=pokemonsNumber; i++){
       await getPokemon(i);
  }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
}


const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const { id, name, sprites, types } = pokemon;
    const type = types[0].type.name;
    const pokemonInnerHTML = `
    <div class = "img-container">
        <img src="${sprites.front_default}" "alt=${name}"/>
    </div>
    <div class ="info">
        <span class="number">${id}</span>
        <h3 class="name">${name}</h3>
        <small class="Type">Type: <span>${type}</span></small>
    </div>
    `;
    pokemonEl.innerHTML = pokemonInnerHTML;
    container.appendChild(pokemonEl);
}

fetchPokemons();

function viewMore(){
    page++
    fetchPokemons();
}

window.addEventListener('scroll', function(){
    const{ scrollTop, scrollHeight, clientHeigth } = document.documentElement;

    if(scrollTop + clientHeigth >= scrollHeight){
        viewMore();
    }
})


