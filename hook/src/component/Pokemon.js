import React,{useState,useEffect} from 'react'


const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

const[button,setButton]=useState(false);

 
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);
    const clickbutton=(e)=>{
        setButton(!button)
        // button?setButton(false):setButton(true)
    }
 
    return (
        <div>
           { button?
             pokemon.map((ditto, index)=>{
                return (<div key={index}>{ditto.name}</div>)
                
            }) :
            ''
        }
            <button onClick={clickbutton}>fetch</button>
        </div>
    );
}


export default Pokemon
