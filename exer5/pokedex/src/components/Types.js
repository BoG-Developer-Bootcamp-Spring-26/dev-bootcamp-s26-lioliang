function Types({pokemonTypes}) {
    const typeColors = {
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD"
    };
        return(
            <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", width:'100%'}}>
            <b>Types</b>
            <div style={{ display: "flex", gap:"5px" }} >
                {pokemonTypes.map((typeObj, index) => (
                    <p key={index} className="colorText" style={{backgroundColor: typeColors[typeObj.type.name]}}>{typeObj.type.name}</p>
                ))}
            </div>
            </div>
        )
    }

export default Types;