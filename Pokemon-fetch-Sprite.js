
async function fetchdata(){
    try{

        const pokemonname = document.getElementById("pokemonname").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
        
        if(!response.ok){
            throw new error("could not find the goddamn error");
        }
        const data = await response.json();
        const pokemonsprite = data.sprites.front_shiny;
        const imgelement = document.getElementById("pokemonsprite");

        imgelement.src = pokemonsprite;
        imgelement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}