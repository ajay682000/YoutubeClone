
const initialState = false


export const themeReducer = (state=initialState, action) => {
    if(action.type=='changetheme') {
        return action.payload
    }
    return state
}