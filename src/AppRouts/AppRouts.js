import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Components/Heder/Heder";
import HomePage from "../Vives/HomePage/HomePage";
import SearchPage from "../Vives/SearchPage/SearchPage";

const AppRouts = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/movies/:id'} element={<HomePage />} />
                <Route path={'/search'} element={<SearchPage />} />
            </Routes>
        </>
    );
};

export default AppRouts;