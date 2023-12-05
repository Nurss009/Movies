import React from "react";
import Heder from "../Heder/Heder";

const Layout = ({children}) => {
    return (
        <div>
            <Heder/>
            {children}
        </div>
    )
}

export default Layout
