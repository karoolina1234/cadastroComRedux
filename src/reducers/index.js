import {reducers as frutaReducer} from './fruta.reducer'
import {combineReducers} from 'redux'
const reducers = combineReducers({
    frutaReducer
})

export {reducers}


/*Caso haja mais de um reducer
é importante usar a função CombineReducers
que junta todos em um só, no exemplo atual só existe 
um unico reducer porem caso houvesse mais 
a função seria bastante util  */