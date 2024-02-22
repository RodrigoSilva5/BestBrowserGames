import "./styles.css"
import { Card } from "../Card/Card"
import { useState, useEffect } from "react"
const Home = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/db.json');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setData(result);

        } catch (error) {
          setError(error);
        }
      };
  
      fetchData();
    }, []); // The empty dependency array means this effect will run once when the component mounts
  
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
            <Card 
                img={data.games[0].thumbnail} 
                title={data.games[0].title}
                p={data.games[0].short_description} 
                link={data.games[0].game_url}
            />
        </>
      );
    
}

export {Home}