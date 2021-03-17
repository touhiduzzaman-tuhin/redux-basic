import { ADD_PATIENT, REMOVE_PATIENT } from "./patientType"

export const addPatient = (name, id) => {
    console.log(name, id);
    return {
        type : ADD_PATIENT,
        payload : {
            name, id
        }
    }
}

export const removePatient = (id) => {
    return {
        type : REMOVE_PATIENT,
        payload : id
    }
}