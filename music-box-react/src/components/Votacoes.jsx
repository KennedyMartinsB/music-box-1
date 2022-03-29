import React, { useState } from 'react';

function Votacao(props) {

    function votar() {
        setNumero(numero+1);
    }
    const [numero, setNumero] = useState(0)
    return(
        <>
            <h1>{props.titulo}</h1>
            <button onClick={votar}>Votar</button>
            <h1>Quantidade Votos: {numero}</h1>
        </>
    )
}

export default Votacao;