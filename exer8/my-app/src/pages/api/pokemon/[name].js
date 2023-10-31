export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    if (req.method === "GET") {
        const {name} = req.query; 
        if (name) {
            const response = await fetch(url + name);
            try {
              const data = await response.json();
              const name = data.name;
              const img = data.sprites.front_default;
              const types = data.types.map(i => (i.type.name));
              res.status(200).json({name : name, types: types, sprite: img});
            } 
            catch (e) {
              res.status(400).json({ error: "Sorry, this pokemon does not exist!" });
            }
        } 
    } 
}
  