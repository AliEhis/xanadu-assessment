import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrencies } from '../redux/apiCalls';
import { updateCurrency } from '../redux/reducers/eventsReducer';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currencies, currency } = useSelector((state) => state.events);

    const changeRoute = (location) => {
        navigate(`/${location}`)
    }

    const handleCurrencyChange = (e) => {
        const currency = e.target.value;
        dispatch(updateCurrency(currency));
    }

    useEffect(() => {
        (currencies.length === 0 || !currency) && getCurrencies(dispatch);
    }, [dispatch, currencies, currency])
    

    return (
        <div className='navbar container'>
            <div className="wrapper">
                <div className='left'>
                    <div className="form-group">
                        <select name="currency" onChange={handleCurrencyChange}>
                            {currencies && currencies.map((c, index) => (
                                <option key={index} selected={c['short-name'] === currency} value={c['short-name']}>{c['long-name']}</option>
                            ))}
                        </select>
                    </div>
                    <span className='language ml-1'>{currency}</span>
                </div>
                <div className='center'>
                    <h1 className='logo' onClick={() => changeRoute('')}>XANADU</h1>
                </div>
                <div className='right'>
                    <div className='menu-item' onClick={(e) => e.preventDefault()}>REGISTER</div>
                    <div className='menu-item' onClick={(e) => e.preventDefault()}>SIGN IN</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
