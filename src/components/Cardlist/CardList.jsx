import "./styles.css"
import { Card } from "../index"

const CardList = ({games, numberOfCards}) => {
    if (!games) {
        return <div>Loading...</div>;
    }
    
    return(
        <>
            {          
              games.map((game, numberOfCards, ar) => {
                if(numberOfCards < 5){
                 return(
                   <Card
                      key={game.id}
                      img={game.thumbnail} 
                      title={game.title}
                      p={game.short_description} 
                      link={game.game_url}                    
                    />
                 ) 
                }
              })
            } 
        </>
    )
}

export { CardList}