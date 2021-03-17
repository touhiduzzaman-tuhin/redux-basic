import { ADD_PATIENT, REMOVE_PATIENT } from "./patientType";

const initialState = {
    patients : []
}

export const patientReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PATIENT:
            const newPatient = {
                name : action.payload.name,
                id : action.payload.id
            }
            const allPatient = [...state.patients, newPatient]
            return { patients : allPatient }

        case REMOVE_PATIENT:
            const id = action.payload;
            const remainingPatients = state.patients.filter(patient => patient.id !== id)
            return { patients : remainingPatients}

        default :
            return state;
    }
}