// import React from "react";
//
// const MovePage = () => {
//     return (
//         <div>
//             Move
//         </div>
//     )
// }
//
// export default MovePage

import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import MoveList from "../../Components/MoveList/MoveList";
import Layout from "../../Components/Layout/Layout";
import {API_KEY, BACKDROP_URL, BASE_URL} from "../../config/config";


const MoviePage = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        axios(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=ru-RU`)
            .then(({data}) => {
                setMovie(data)
                console.log(data)
            })
    }, []);

    return (
        <Layout>
            <section className={'moviePage'}>
                <div style={{
                    backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                }}>
                    <h1>{movie.title}</h1>
                </div>
                movie => (
                    <div key={movie.id}>
                        <img className={'backdrop'}  src={`${BACKDROP_URL + movie.backdrop_path}`} alt=""/>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <p>{movie.release_date}</p>
                    </div>
                ))
            </section>
        </Layout>
    )
}

export default MoviePage