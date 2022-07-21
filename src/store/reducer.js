import * as actionTypes from './actionTypes'
const defaultState = {
    list: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            state.list.push(action.newTodo)
            return {
                list: [...state.list]
            }
            break
        case actionTypes.DEL_TODO:
            const newList = state.list.filter(item => item.id !== action.id)
            return {
                list: newList
            }
            break
        case actionTypes.UPDATE_TODO:
            const obj = state.list.find(item => item.id === action.id)
            obj.isCompleted = !action.isCompleted
            return {
                list: [...state.list]
            }
            break
        case actionTypes.GET_TODO:
            const list = action.list
            return {
                list: [...list]
            }
        default:
            return state
    }
    return state

}
export default reducer