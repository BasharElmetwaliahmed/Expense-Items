
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem=(props)=>{

   const [title,setTitle] =useState(props.title)

    return(
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-description">
            <h2 className="expense-title">{title}</h2>
            <div className="expense-price">{props.amount}$
        </div>

            </div>
        </div>
    )
}

export default ExpenseItem;