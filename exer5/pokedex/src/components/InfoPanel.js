function InfoPanel({pokemon, panel}) {
    if (panel === "Info") {
         return(
        <div>
        <b>Info</b>
        <div className="panel">
        <div>
            <p>height: {pokemon.height / 10}m</p>
            <p>weight: {pokemon.weight / 10}kg</p>
            {pokemon.stats.map(stat=>(<p>{stat.stat.name} : {stat.base_stat}</p>))}
        </div>
        </div>
        </div>
        )
    } else {
        return(
        <div>
        <b>Moves</b>
        <div className="panel">

        <div>
            {pokemon.moves.map((move) => (
                    <p>{move.move.name}</p>
                ))}
        </div>
        </div>
        </div>
        )
    }
    
   
}

export default InfoPanel;