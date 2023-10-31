export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon-species/";
    
    if (req.method === "GET") {
        const {name} = req.query; 
        if (name) {
            const response = await fetch(url + name);
            try {
                const speciesData = await response.json();
                const evoResponse = await fetch(evoChainURL);
                const data = await evoResponse.json();
                
                const evoChainURL = speciesData.evolution_chain.url;
                const evolvesTo = data.chain.evolves_to;

                if (evolvesTo.length === 0) {
                    res.status(200).json({next_evolution_step : data.chain.species.name});
                } 
                else {
                    res.status(200).json({next_evolution_step : evolvesTo[0].species.name});
                }

            } 
            catch (e) {
                res.status(400).json({ error: "This Pokemon does not exist!" });
            }
        } 
    }
}
