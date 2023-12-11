import React from "react";
import {IMAGE_URL} from "../../config/config";
import {Link} from "react-router-dom";

const MovieList = ({movies}) => {
    return (
        <div className={'row'}>
            {
                movies.map(movies =>
                    <div className={'col-3'}>
                        <div className="move-box" key={movies.id}>

                            <Link>
                                <img className={'movie-img'} src={`${IMAGE_URL}${movies.poster_path}`} alt=""/>
                            </Link>
                            <div className={'movie-box'}>
                                <Link className={'box-title'} to={`/moves/${movies.id}`}><h3>{movies.title}</h3></Link>
                                <p>{movies.release_date}</p>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}
export default MovieList