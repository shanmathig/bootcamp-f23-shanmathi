export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    if (req.method === "POST") {
      const { pokemon1, pokemon2 } = req.body;
      if (!pokemon1 || !pokemon2) {
        res.status(400).json({ error: "Both 'pokemon1' and 'pokemon2' must be provided in the request body." });
        return;
      }
  
      try {
        let winner;

        const response1 = await fetch(url + pokemon1);
        const response2 = await fetch(url + pokemon2);  
        const pokemon1Data = await response1.json();
        const pokemon2Data = await response2.json();
  
        console.log("Fetched Pokemon data successfully");
  
        const poke1Stat = pokemon1Data.stats[0].base_stat;
        const poke2Stat = pokemon2Data.stats[0].base_stat;
        
        if (poke1Stat === poke2Stat) {
          winner = "TIED";
        } else if (poke1Stat > poke2Stat) {
          winner = pokemon1;
        } else {
          winner = pokemon2;
        }
          
        console.log("Determined the winner");
  
        res.status(200).json({ winner });
      } 
      catch (error) {
        res.status(500).json({ error: "An unexpected error occurred while processing the request." });
      }
    } 
  }
  