import { combineReducers } from 'redux'
import todos from './NamaToDoReducer'
import visibilityFilter from './FilterReducer'
export default combineReducers({
 todos,
 visibilityFilter
})
