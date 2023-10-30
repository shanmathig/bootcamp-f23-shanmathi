export default async function handler(req, res){
    const url = "https://pokeapi.co/api/v2/pokemon/";
    if (req.method === "POST"){
        const{pokemon1} = req.body;
        const{pokemon2} = req.body;
        if (pokemon1 && pokemon2){
            const resp1 = await fetch(url+pokemon1);
            const resp2 = await fetch(url+pokemon2);
            try{
                const poke1Stat = (await resp1.json()).stats[0].base_stat;
                const poke2Stat = (await resp2.json()).stats[0].base_stat;
                const poke = (
                    poke1Stat === poke2Stat ? "TIED": poke1Stat>poke2Stat ? pokemon1 : pokemon2
                )
                res.status(200).jsonn({winner: poke});


            }
            catch(e){
                res.status(400).json({error : "poke doesnt exist"});
            }
        }
    }
}