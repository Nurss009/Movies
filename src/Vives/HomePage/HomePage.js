import {useEffect, useState} from "react";
import axios from "axios";
import MoveList from "../../MoveList/MoveList";
import Carousel from "../../Carousel/Carousel";
import {API_KEY, BASE_URL} from "../../config/config";
import React from "react";


const HomePage = () => {
    useEffect(() => {
        axios(`${BASE_URL}discover/movie?language=ru-RU&api_key=${API_KEY}`)
            .then(({data}) => setMovies(data.results))
    }, []);

    const [movise, setMovies ] = useState([])

    return (
   <>
       <Carousel movies={movise} />
       <div className={'container'}>
           <MoveList movies={movise}/>
       </div></>
    )
}

export default HomePage