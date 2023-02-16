import React, { useState } from "react"
import './ExpenseForm.css'
const ExpenseForm=({NewExpenseHandler})=>{
    const [title,setNewTitle]=useState('');
    const [amount,setNewAmount]=useState('');
    const [date,setNewDate]=useState('');
   const setTitleHandler=(e)=>{
     setNewTitle(e.target.value);
    }
    const setAmountHandler=(e)=>{
     setNewAmount(e.target.value);
    }    
    const setDateHandler=(e)=>{
     setNewDate(e.target.value);
    }

   const submitHandler=(e)=>{
    e.preventDefault();
    NewExpenseHandler(title,amount,date);
    console.log("Added")
    setNewAmount('');
    setNewDate('');
    setNewTitle("")

   }
    return(
        <div className="expense-form">
            <form onSubmit={submitHandler}>
           <div className="expense-form__input">
          <label>Title</label>
          <input type="text" value={title} onChange={setTitleHandler}/>     
          </div>       
           <div className="expense-form__input">
          <label>Amount</label>
          <input type="number" value={amount} step="1" onChange={setAmountHandler}/>     
          </div>            
         <div className="expense-form__input">
          <label>date</label>
          <input type="date" value={date} onChange={setDateHandler} />     
          </div>    
                   <button type="submit" className="expense-submit">Submit Expense</button>
            </form>
        </div>
    )
}
export default ExpenseForm