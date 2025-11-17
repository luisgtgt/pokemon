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

async function buscar() {
    // añado el pokemon que busco desde el input
    let pokemon = document.getElementById("pokemon").value
    // pido a axios que me consulte la api
    let datos = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(datos)
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


