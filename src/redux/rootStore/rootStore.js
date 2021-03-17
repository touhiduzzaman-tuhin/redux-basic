import { combineReducers } from "redux";
import { counterReducer } from "../counter/counterReducer";
import { patientReducer } from "../patient/patientReducer";
import { phoneReducer } from "../phone/phoneReducer";

export const rootStore = combineReducers({
    counter : counterReducer,
    phone : phoneReducer,
    patients : patientReducer
})