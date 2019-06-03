import { combineReducers } from 'redux';
import seachView from './reducers/searchView'
import { view } from './reducers/view'

const rootReducer = combineReducers( {
    view: view,
    seachView: seachView,
})

export default rootReducer;