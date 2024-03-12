import React, { useContext } from 'react';
import {useState} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState();
    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
            setCurrency(val)
    }
    

  return (
        <div className='alert alert-secondary'> Currency {
      <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
        <option value="$ Dollar">$ Dollar</option>
        <option value="£ Pound">£ Pound</option>
        <option value="€ Euro">€ Euro</option>
        <option value="₹ Ruppee">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;