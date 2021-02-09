import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../actions/frutas.action';

function Adicionar(){
    const [nome, setNome] = useState('')
    const [quantidade, setQuantidade] = useState(0)

    const dispatch = useDispatch();
    const adicionarFruta = event =>{
        event.preventDefault();
       
        const fruta ={
            id: new Date(),
            nome, 
            quantidade
        }
        dispatch(actions.adicionar(fruta))
    }
    return(
        <>
        <form onSubmit={adicionarFruta}> 
            <input type="text" 
            name={nome} placeholder="nome da fruta"
            required onChange={event => setNome(event.target.value)} />
       
            <input type="number" 
            name={quantidade} placeholder="quantidade"
            required onChange={event => setQuantidade(event.target.value)} />

            <button type="submit">Adicionar</button>
       
        </form>
        </>
    )
}

export default Adicionar