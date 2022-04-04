import React from "react";
import ItemMusica from "../components/ItemMusica";
import Menu from "../components/Menu";

function Musicas() {
    return (
        <>
            <Menu/>
            <div class="container">
                <div class="filter">
                    <button class="btn">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">
                    <ItemMusica />
                    <ItemMusica />
                    <ItemMusica />
                    <ItemMusica />
                    <ItemMusica />
                    <ItemMusica />
                </div>
            </div>
        </>
    );
}

export default Musicas;