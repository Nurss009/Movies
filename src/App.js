import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Vives/HomePage/HomePage";
import MovePage from "./Vives/MovePage/MovePage";
import Header from "./Components/Heder/Heder";
import AppRouts from "./AppRouts/AppRouts";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <AppRouts/>
            </BrowserRouter>
        </>
    )
}

export default App

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomePage from './Vives/HomePage/HomePage';
// import MovePage from './Vives/MovePage/MovePage';
// import SearchPage from './Vives/SearchPage/SearchPage';
// import Header from "./Components/Heder/Heder";
//
// const App = () => {
//     return (
//         <>
//             <BrowserRouter>
//                 <Header/>
//                 <Routes>
//                     <Route path={'/'} element={<HomePage />} />
//                     <Route path={'/move'} element={<MovePage />} />
//                     <Route path={'/search'} element={<SearchPage />} /> {/* Add this line for the /search route */}
//                 </Routes>
//             </BrowserRouter>
//         </>
//     );
// };
//
// export default App;