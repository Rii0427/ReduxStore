import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index'

const Shop = () => {
  const amount = useSelector(state => state.amount);
  const dispatch = useDispatch();
  const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch);
  return (
    <div>
        <h2>Deposit/Withdraw money</h2>
        {/* <button className='btn btn-primary mx-2' onClick={() => dispatch(actionCreators.withdrawMoney(100))}>-</button>
        Update balance
        <button className='btn btn-primary mx-2' onClick={() => dispatch(actionCreators.depositMoney(100))}>+</button> */}
        <button className='btn btn-primary mx-2' onClick={() => withdrawMoney(100)}>-</button>
        Update balance: {amount}
        <button className='btn btn-primary mx-2' onClick={() => depositMoney(100)}>+</button>
    </div>
  )
}

export default Shop