import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Vives/HomePage/HomePage";
import MovePage from "./Vives/MovePage/MovePage";



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/move'} element={<MovePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App