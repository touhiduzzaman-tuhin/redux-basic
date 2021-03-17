import React from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { addPatient, removePatient } from '../../redux/patient/patientAction';
import PatientDetails from '../PatientDetails/PatientDetails';

const Patient = (props) => {
    // console.log(props);
    const { patients, addPatient, removePatient } = props;
    const nameRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        addPatient(nameRef.current.value, patients.length + 1);
        nameRef.current.value = '';
    }
    return (
        <div className='container' align='center'>
            <h3 className='my-5'>Patient List</h3>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Enter Patient Name' className='form-control' ref={nameRef} />
            </form>

            <div className='row'>
                {
                    patients.length > 0 && patients.map(patient => <PatientDetails key={patient.id} patient={patient} removePatient={removePatient}></PatientDetails>)
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        patients: state.patients.patients
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPatient: (name, id) => dispatch(addPatient(name, id)),
        removePatient: (id) => dispatch(removePatient(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Patient);