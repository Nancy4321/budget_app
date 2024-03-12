import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            // Budget component
                            <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                            // Remaining component
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                        }        

                        {
                            // ExpenseTotal component
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }
                        {
                            <div className='col-3'>
                                <Currency />
                            </div> 
                        }        
                    </div>
                    <div className='row mt-3'>
                        {
                            // ExpenseList component
                            <div className='col-sm'>
                                <ExpenseList />
                            </div>
                        }         
                    </div>
                    <div className='row mt-3'>
                        <h2>Change allocation</h2>
                        <div className='col-9'>
                            <AllocationForm />
                        </div>
                    </div>
            </div>
        </AppProvider>
    );
};
export default App;
