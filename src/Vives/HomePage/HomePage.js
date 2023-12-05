import {useEffect, useState} from "react";
import axios from "axios";
import MoveList from "../../Components/MoveList/MoveList";
import Carousel from "../../Components/Carousel/Carousel";
import {API_KEY, BASE_URL} from "../../config/config";
import React from "react";
import Pagination from "../../Components/Pagination/Pagination";
import {useSearchParams} from "react-router-dom";



const HomePage = () => {
    const [pageParam, setPageParam] = useSearchParams('page')
    const [page, setPage] = useState(pageParam.get('page') || 1)
    useEffect(() => {
        axios(`${BASE_URL}discover/movie?language=ru-RU&api_key=${API_KEY}&page=${page}`)
            .then(({data}) => setMovies(data.results))
    }, [page]);

    const [movies, setMovies ] = useState([])

    const handleChange = (argPage) => {
        setPage(argPage)
        setPageParam({page: argPage})
    }

    return (
   <>
       <Carousel movies={movies} />
       <div className={'container'}>
           <MoveList movies={movies}/>
           <Pagination onClick={handleChange}/>
       </div></>
    )
}

export default HomePage
