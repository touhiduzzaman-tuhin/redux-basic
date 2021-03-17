import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { buyPhone } from '../../redux/phone/phoneAction';

const Phone = (props) => {
    // console.log(props);
    const {phone, buyPhone} = props;
    return (
        <div className='container' align='center'>
            <h3 className='my-5'>Total {phone} Phone in Stock</h3>
            <Button variant='success' onClick={buyPhone}>
                Buy Phone
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        phone : state.phone.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyPhone : () => dispatch(buyPhone())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Phone);