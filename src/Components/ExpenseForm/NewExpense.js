import React from "react";
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense=({addExpenseHandler})=>{
  const newExpenseHandler=(newtitle,newamount,newdate)=>{
    const newExpenseItem={
      title:newtitle,
      amount:newamount,
      date:new Date(newdate),
      id:Math.random().toString(),
    }
    addExpenseHandler(newExpenseItem);
  }
    return(
      <div className="new-expense">
        <ExpenseForm NewExpenseHandler={newExpenseHandler}/>
      </div>
    );

}
export default NewExpense;