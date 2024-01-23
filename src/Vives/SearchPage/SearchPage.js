import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY, BACKDROP_URL, BASE_URL, IMAGE_URL} from "../../config/config";
import Layout from "../../Components/Layout/Layout";


const SearchPage = () => {
  const [search, setSearch]=useState('')
    const [searchResults,setSearchResults] = useState([]);


  const handleSearch =() => {
      axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&language=ru-RU&query=${search}`)
        .then(({ data }) => {
              setSearchResults(data.results);
          });
  }

  return(
        <div className={'container'}>
            <h2>Найти фильм</h2>
            <div className={'search-cont'}>
                <input className={'input'} placeholder={'Поиск'} type="text" onChange={(e)=> setSearch(e.target.value)}/>
                <button className={'SearhButton'} onClick={handleSearch}>Найти</button>
            </div>

            {
                searchResults.map((movie)=>(
                    <div key={movie.id} className={'row'}>
                        <div className="col-3">
                            <img className={'imgshka'} src={`${IMAGE_URL}${movie.poster_path}`} alt=""/>
                            <h3>{movie.title}</h3>
                            <p className={'data'}>{movie.release_date}</p>
                        </div>
                        <div className="col-6">
                            <h1>{movie.title}</h1>
                            <div className={'inner-box'}>
                                <h2>О Фильме</h2>
                                <span>{movie.overview}</span>
                                <Link to={`/moves/${movie.id}`}>
                                    <button className={'Vives'}>Смотреть фильм</button>
                                </Link>
                                {/*<p className={'rating'}>{movie.vote_average}</p>*/}
                                <p className={'popularity'}>{movie.popularity} оценки</p>
                            </div>
                        </div>
                        {/*<div className="col-3 ">*/}

                        {/*</div>*/}

                    </div>
                ))

            }

        </div>
    )
}
export default SearchPage