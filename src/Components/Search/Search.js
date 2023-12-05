// import React from "react";
// import './Search.css'
//
// const Search = () => {
//
//
//     return (
//         <>
//             <input type="text"/>
//             <button>OK</button>
//         </>
//     )
// }
//
// export default Search


//
// import React from "react";
// import { IMAGE_URL } from "../../config/config";
//
// const MovieList = ({ movies }) => {
//     return (
//         <div className="row">
//             {movies.map((movie, index) => (
//                 <div className="col-4" key={index}>
//                     <div className="move-box">
//                         <img className="movie-img" src={`${IMAGE_URL}${movie.poster_path}`} alt="" />
//                         <h3>{movie.title}</h3>
//                         <p>{movie.release_date}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };
//
// export default MovieList;