 //Contem todos os estados de todos os reducers

 import {createStore} from 'redux'

 import {reducers} from '../reducers/index'
 
 const store = createStore(reducers);

 export {store}