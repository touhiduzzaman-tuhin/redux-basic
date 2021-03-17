import React from 'react';
import { Button } from 'react-bootstrap';
import './PatientDetails.css';

const PatientDetails = (props) => {
    // console.log(props);
    const { patient, removePatient } = props;
    const { name, id } = patient;
    return (
        <div className='col-md-4'>
            <div className='patient-area'>
                <h3>Name : {name}</h3>
                <Button variant='danger' onClick={() => removePatient(id)}>
                    Remove Patient
                </Button>
            </div>
        </div>
    );
};

export default PatientDetails;