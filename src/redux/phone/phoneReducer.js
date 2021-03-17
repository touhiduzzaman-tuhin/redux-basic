import { BUY_PHONE } from "./phoneType";

const initialState = {
    value : 50
}

export const phoneReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_PHONE:
            return {
                ...state,
                value : state.value - 1
            }
        
        default : 
            return state;
    }
}