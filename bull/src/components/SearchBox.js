import React,{useState} from 'react';
function SearchBox(){
     
   const [query,setQuery]=useState('');
   const [animes, setAnimes] =useState([])

    const searchAnime= async (e)=>{
        e.preventDefault();
        const url ='https://my-json-server.typicode.com/Karemu1842call/project-json-server/results';
    
        
        try {
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
            setAnimes(data)
        }catch(err){
            console.log(err)
        }
    }
    return(
       <>
       <form className="form" onSubmit={searchAnime}>
        <label className='label' htmlFor='query'>Anime name</label>
         <div id="search" className="bar">
             <input value={query} name="query" className="tafuta" placeholder='Enter anime name ie Naruto' onInput={(e) => setQuery(e.target.value)} ></input>
                <button type="submit" className='btn'>SEARCH...</button>
        </div>
       </form>
       <div className='card-list'  >
        {animes.map(anime =>(
            <div className='card' key={anime.id}>
                <h1>{anime.name}</h1>
                <h2>{anime.maincharacter}</h2>
                <img className='card--image'
                src={anime.image}
                alt={anime.name + 'poster'}/>
                <div className="card--content">
                    <h2 className="card--tittle">{anime.maincharacter}</h2>
                    </div>
                    </div>
        ))}
       </div>
       </>
       
    ) }
export default SearchBox;