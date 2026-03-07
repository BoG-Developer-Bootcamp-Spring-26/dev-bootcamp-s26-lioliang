function StatsPanel({pokemon}) {
    

    return(
        <div>
        <h1>Info Panel</h1>
        <div>
            <p>height: {pokemon.height / 10}m</p>
            <p>weight: {pokemon.weight / 10}kg</p>
            {pokemon.stats.map(stat=>(<p>{stat.stat.name} : {stat.base_stat}</p>))}
        </div>
        </div>
    )
}

export default StatsPanel;