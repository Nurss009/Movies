import React from "react";
import {IMAGE_URL} from "../config/config";

const MoveList = ({movies}) => {
    return (
        <>
          <div className="row">
              {
                  movies.map(movie =>
                      <div className={'col-4'}>
                          <div className="move-box">
                              <img className={'movie-img'} src={`${IMAGE_URL}${movie.poster_path}`} alt=""/>
                              <h3>{movies.title}</h3>
                              <p>{movies.release.date}</p>
                          </div>
                      </div>
                  )
              }
          </div>
            </>
    )
}

export default MoveList