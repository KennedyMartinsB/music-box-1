import React from "react";
import { Route, BrowserRouter,Routes } from "react-router-dom";
import Musicas from "./pages/Musicas";
import Add from "./pages/add";

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Musicas/>}/>
                <Route path="/adicionar" element={<Add/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas