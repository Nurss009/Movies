import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Components/Heder/Heder";
import HomePage from "../Vives/HomePage/HomePage";
import MovePage from "../Vives/MovePage/MovePage";
import SearchPage from "../Vives/SearchPage/SearchPage";

const AppRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/movies/:id'} element={<MovePage />} />
                <Route path={'/search'} element={<SearchPage />} />
            </Routes>
        </>
    );
};

export default AppRoutes;



{/*path={'/search'} element={<SearchPage />}*/}