import React from "react";
import ItemMusica from "../components/ItemMusica";
import Menu from "../components/Menu";

function Musicas() {
    return (
        <>
            <Menu />
            <div class="container">
                <div class="filter">
                    <button class="btn">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">
                    <ItemMusica
                        musica="A.D.H.L"
                        artista="Kendrick Lamar"
                        genero="Hip-Hop"
                        ano={2011}
                        id="1"
                    />

                    <ItemMusica
                        musica="Beat take 1"
                        artista="The neighbourhood"
                        genero="Rock"
                        ano={2018}
                        id="2"
                    />

                </div>
            </div>
        </>
    );
}

export default Musicas;