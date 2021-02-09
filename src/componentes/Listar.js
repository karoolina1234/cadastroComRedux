import React from 'react';
import Adicionar from './Adicionar';
import Fruta from './Fruta';
import { useSelector } from 'react-redux'

 
function Listar(){
    //Seleciona dentro do state frutaReducers o state de frutas
     const frutas = useSelector(state =>state.frutaReducer.frutas)
    return(
        <>
        <h1>Lista</h1>
        <Adicionar/>
        {frutas.map(fruta=>(
                <Fruta key={fruta.id} fruta={fruta}/>
        ))}
        </>
    )
}

export default Listar;