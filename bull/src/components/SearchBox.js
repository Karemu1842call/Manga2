import React,{useState,useEffect} from 'react';
import axios from 'axios';
function SearchBox(){
     
   const [query,setQuery]=useState('');
   const [animes, setAnimes] =useState([]);
   const [loadanime,setloadanime]=useState(false);

    useEffect(() => {
        const loadanime=async()=>{
            setloadanime(true);
            const response=await axios.get("https://my-json-server.typicode.com/Karemu1842call/project-json-server/results")
            setAnimes(response.data);
            setloadanime(false);
        }
        loadanime();
    },[],);
    return(
       <>
       <form className="form" onSubmit={loadanime}>
        <label className='label' htmlFor='query'>Anime name</label>
         <div id="search" className="bar">
             <input value={query} name="query" className="tafuta" placeholder='Enter anime name ie Naruto' onInput={(e) => setQuery(e.target.value)} ></input>
                <button type="submit" className='btn'>SEARCH...</button>
        </div>
       </form>
       <div className='card-list'  >
        {animes.filter((anime) =>anime.name.toLowerCase().includes(query)
        ).map(anime =>(
            <div className='card' key={anime.id}>
                <h1 key={anime.id}>{anime.name}</h1>
                <img className='card--image'
                src={anime.image}
                alt={anime.name + 'poster'}/>
                <h1 key={anime.id}>{anime.casts}</h1>
                <div className="card--content">
                    <h2 className="card--tittle">{anime.maincharacter}</h2>
                    </div>
                    </div>
        ))}
       </div>
       </>
       
    ) }
export default SearchBox;