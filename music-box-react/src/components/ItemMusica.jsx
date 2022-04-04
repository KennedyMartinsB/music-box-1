import React from "react";

function ItemMusica() {
    return(
        <>
            <div className="card-music">
                <div className="icons">
                    <img src="../imagens/edit-icon.png" alt="" />
                    <img src="../imagens/delete-icon.png" alt="" />
                </div>
                <div className="info-music">
                    <p>
                        <strong className="card-title">música: </strong>
                        <input className="input-music-enable" type="text" value="Musica" />
                    </p>
                    <p>
                        <strong className="card-title">artista: </strong>
                        <input className="input-music-enable" type="text" value="Teste" />
                    </p>
                    <p>
                        <strong className="card-title">categoria: </strong>
                        <input className="input-music-enable" type="text" value="Teste" />
                    </p>
                    <p>
                        <strong className="card-title">ano: </strong>
                        <input className="input-music-enable" type="text" value="Teste" />
                    </p>
                    <button className="btn-salvar-disabled">Salvar</button>
                </div>
            </div>
        </>
    );    
}

export default ItemMusica;