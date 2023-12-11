import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Vives/HomePage/HomePage";
import MovePage from "./Vives/MovePage/MovePage";
import Header from "./Components/Heder/Heder";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/move'} element={<MovePage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App