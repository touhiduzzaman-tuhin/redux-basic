import { DECREMENT, INCREMENT } from "./counterType"

export const increment = () => {
    return {
        type : INCREMENT
    }
}

export const decrement = () => {
    return {
        type : DECREMENT
    }
}