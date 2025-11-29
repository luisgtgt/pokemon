const debilidades = {
    normal: ["fighting"],
    fire: ["water", "ground", "rock"],
    water: ["electric", "grass"],
    electric: ["ground"],
    grass: ["fire", "ice", "poison", "flying", "bug"],
    ice: ["fire", "fighting", "rock", "steel"],
    fighting: ["flying", "psychic", "fairy"],
    poison: ["ground", "psychic"],
    ground: ["water", "grass", "ice"],
    flying: ["rock", "electric", "ice"],
    psychic: ["bug", "ghost", "dark"],
    bug: ["fire", "flying", "rock"],
    rock: ["water", "grass", "fighting", "ground", "steel"],
    ghost: ["ghost", "dark"],
    dragon: ["ice", "dragon", "fairy"],
    dark: ["bug", "fairy", "fighting"],
    steel: ["fire", "fighting", "ground"],
    fairy: ["steel", "poison"]
};
//colores
const coloresPorTipo = {
  normal:    "#A8A77A",
  fire:      "#EE8130",
  water:     "#6390F0",
  electric:  "#F7D02C",
  grass:     "#7AC74C",
  ice:       "#96D9D6",
  fighting:  "#C22E28",
  poison:    "#A33EA1",
  ground:    "#E2BF65",
  flying:    "#A98FF3",
  psychic:   "#F95587",
  bug:       "#A6B91A",
  rock:      "#B6A136",
  ghost:     "#735797",
  dragon:    "#6F35FC",
  dark:      "#705746",
  steel:     "#B7B7CE",
  fairy:     "#D685AD"
};

//pokeball
const pokeballsPorTipo = {
  normal:   "./media/1ball.png",
  fire:     "./media/2ball.png",
  water:    "./media/3ball.png",
  electric: "./media/4ball.png",
  grass:    "./media/5ball.png",
  ice:      "./media/6ball.png",
  fighting: "./media/7ball.png",
  poison:   "./media/8ball.png",
  ground:   "./media/9ball.png",
  flying:   "./media/10ball.png",
  psychic:  "./media/11ball.png",
  bug:      "./media/12ball.png",
  rock:     "./media/13ball.png",
  ghost:    "./media/14ball.png",
  dragon:   "./media/15ball.png",
  dark:     "./media/16ball.png"
};


async function buscar() {
    document.querySelector(".columna1").style.display = "flex"
    document.querySelector(".datos").style.display = "flex"
    document.querySelector("body").style.display = "grid"
    document.querySelector("body").style.gridTemplateColumns = "40% 40% 20%";
    // añado el pokemon que busco desde el input
    let pokemon = document.getElementById("pokemon").value
    // pido a axios que me consulte la api
    let datos = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(datos)
    
    document.getElementById("nombre").textContent = (datos.data.name).toUpperCase()
    // aca lo que busco es sacar los tipos del pokemon y añadirlos como div independiente
    let tipos = document.getElementById("tipos")
    tipos.textContent = ""
    datos.data.types.forEach(cosa => {
        let nuevo = document.createElement("div");
        nuevo.textContent = cosa.type.name
        console.log(cosa.type.name)
        nuevo.classList.add("tipo");
        tipos.appendChild(nuevo)
    });

    //colocamos respectiva pokeball
    document.getElementById("pokeball").style.backgroundImage = `url(${pokeballsPorTipo[datos.data.types["0"]["type"]["name"]]})`

    // aca asigno el numero a el elemento numero de mi html
    let numero = document.getElementById("numero")
    document.getElementById("numero").textContent = datos.data.id
    // aca asigno a devilidades sus respectivas debilidades
    let deb = document.getElementById("debilidades")
    deb.textContent = ""
    datos.data.types.forEach(tipo => {
        debilidades[tipo.type.name].forEach(valor => {
            let nuevo = document.createElement("div");
            nuevo.textContent = valor;
            nuevo.classList.add("debilidad");
            deb.appendChild(nuevo)
        }

        )
    }
    )
    document.getElementById("imagen").src = datos.data.sprites.other["official-artwork"]["front_shiny"]
    // asignar color y rango
    let hp = document.getElementById("color-hp")
    hp.style.width = ((datos.data.stats["0"]["base_stat"])/(255/100))+"%"
    let attack = document.getElementById("color-attack")
    attack.style.width = ((datos.data.stats["1"]["base_stat"])/(255/100))+"%"
    let defense = document.getElementById("color-defense")
    defense.style.width = ((datos.data.stats["2"]["base_stat"])/(255/100))+"%"
    let spattack = document.getElementById("color-spattack")
    spattack.style.width = ((datos.data.stats["3"]["base_stat"])/(255/100))+"%"
    let spdefense = document.getElementById("color-spdefense")
    spdefense.style.width = ((datos.data.stats["4"]["base_stat"])/(255/100))+"%"
    let speed = document.getElementById("color-speed")
    speed.style.width = ((datos.data.stats["4"]["base_stat"])/(255/100))+"%"
    
}


