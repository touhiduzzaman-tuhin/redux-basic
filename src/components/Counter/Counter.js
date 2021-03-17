import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { decrement, increment } from '../../redux/counter/counterAction';

const Counter = (props) => {
    // console.log(props);
    const {counter, increment, decrement} = props;

    return (
        <div className='container' align='center'>
            <h3 className='my-5'>Result : {counter.value}</h3>
            <Button variant='success' onClick={increment}>
                Increment
            </Button>
            &nbsp; &nbsp;
            <Button variant='danger' onClick={decrement}>
                Decrement
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter : state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment : () => dispatch(increment()),
        decrement : () => dispatch(decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);