import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {
    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators,dispatch)
    return (
        <div>
            <h3 className="my-2">Deposit/Withdraw</h3>
            <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(5))}} >Deposit</button>
            {/* <button className="btn btn-danger mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(5))}} >Withdraw</button> */}
            <button className="btn btn-danger mx-2" onClick={()=>{actions.withdrawMoney(5)}} >Withdraw</button>
        </div>
    );
}

export default Shop;
