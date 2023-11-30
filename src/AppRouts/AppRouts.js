import React from "react";
import {Route, Routes} from "react-router-dom";
import MovePage from "../Vives/MovePage/MovePage";
import HomePage from "../Vives/HomePage/HomePage";

const AppRouts = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'move'} element={<MovePage/>}/>
        </Routes>
    )
}

export default AppRouts;