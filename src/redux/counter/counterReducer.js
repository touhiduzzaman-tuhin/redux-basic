import { DECREMENT, INCREMENT } from "./counterType";

const initialState = {
    value : 10
}

export const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state, value : state.value + 1
            }

        case DECREMENT:
            return {
                ...state, value : state.value - 1
            }

        default :
            return state;
    }
}