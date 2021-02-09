import { actions } from "../actions/frutas.action"
import {actionsTypes} from '../constantes/frutas'
//Reducer sempre vai retornar o state e assim envia ele pro story

const INITIAL_STATE ={
    frutas :[
        {id:5, nome:'abacate', quantidade:3},
        {id:6, nome:'morango', quantidade:9}
    ]
}
const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionsTypes.ADICIONAR_FRUTA:
            /*Retorna o array frutas
            pegando tudo que tem no state frutas
            e adicionadando o action payload */
            return {frutas: [...state.frutas, {...action.payload}]}
        case actionsTypes.REMOVER_FRUTA:
            return{frutas:state.frutas.filter(item => item.id !== action.payload.id)}
        default:
            return state;
        }
}

export {reducers}