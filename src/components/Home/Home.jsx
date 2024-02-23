import "./styles.css"
import { Card } from "../Card/Card"
import { CardList } from ".."
import { useState, useEffect } from "react"
const Home = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState({
      "search": "",
      "category": ""
    })
    const [filterdata, setFilterdata] = useState(data)

    function handlefilter(evt) {
      evt.preventDefault()
      setFilter(prevState => ({...prevState, [evt.target.name]: evt.target.value}))
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/db.json');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setData(result);
          // setFilterdata(result)

        } catch (error) {
          setError(error);
        }
      };
  
      fetchData();
    }, []); // The empty dependency array means this effect will run once when the component mounts
  
    useEffect(() => {
      if(data){
        // transforma os nomes em lower case
        const arraynamesLowercase = data.games.map(game => [game.title.toLowerCase(), game.genre])
        const pesquisaLowercase = filter.search.toLowerCase()
        
        // Procura no array transformado
        let encontrados = [] 
        arraynamesLowercase.map(([nome, genre], i) =>{
                      if(filter.category === "" || filter.category === "Todos"){
                        if(nome.includes(pesquisaLowercase)){
                          encontrados.push(data.games[i]) 
                         }
                      }else{
                        if(nome.includes(pesquisaLowercase) && genre.includes(filter.category)){
                         encontrados.push(data.games[i]) 
                        }
                      }
        });
        setFilterdata(encontrados)
      }

 

    }, [filter])

    // ["Shooter","MMOARPG","ARPG","Strategy","Action RPG","Battle Royale","MMORPG","Fighting","MOBA","Action Game","Card Game","Sports","Racing","MMO","Social"," MMORPG","Fantasy"]
    if (error) {
        return <div>Error: {error.message}</div>;
      }
    
      if (!data) {
        return <div>Loading...</div>;
      }
    
      // Render your component with the fetched data
      return (
        <>
            home
            <label htmlFor="search">
              <input placeholder="Pesquise seus jogos aqui" type="text" name="search" id="search" onChange={handlefilter} />
              <select name="category" id="category" onChange={handlefilter}>
                <option defaultChecked value="Todos">
                  Todos
                </option>
                <option value="Shooter">Shooter</option>
                <option value="MMOARPG\">MMOARPG        </option>
                <option value="ARPG\">ARPG        </option>
                <option value="Strategy">Strategy        </option>
                <option value="Action RPG">Action RPG</option>
                <option value="Battle Royale">Battle Royale        </option>
                <option value="MMORPG\">MMORPG        </option>
                <option value="Fighting">Fighting        </option>
                <option value="MOBA">MOBA        </option>
                <option value="Action Game">Action Game        </option>
                <option value="Card Game">Card Game        </option>
                <option value="Sports">Sports        </option>
                <option value="Racing">Racing        </option>
                <option value="MMO">MMO        </option>
                <option value="Social">Social        </option>
                <option value="MMORPG">MMORPG        </option>
                <option value="Fantasy">Fantasy        </option>
              </select>
            </label>

            <CardList 
              games={filterdata}
              numberOfCards={10}
            />

           {/* <Card 
                img={data.games[0].thumbnail} 
                title={data.games[0].title}
                p={data.games[0].short_description} 
                link={data.games[0].game_url}
            /> */}
        </>
      );
    
}



function extractgenre(array) {
  let res = []
  array.filter((e) => res.includes(e.genre) ? "" : res.push(e.genre))
  console.log(
    JSON.stringify(
      res.map((e)=> `
    <option value="${e}">
      ${e}
    </option>
    `) 
    ),
  )
}
// extractgenre(data.games)

export {Home}