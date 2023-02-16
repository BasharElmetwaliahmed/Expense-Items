import React from 'react'
import ExpenseItem from './ExpenseItem';

const  ExpensesList=({expenses})=> {
    if(expenses.length===0){
        return(
             <h2 className='warning'>there's no Expenses</h2>
        )
    }
  return (
    <ul>
       { expenses.map((expense)=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} /> )}
    </ul>
  )
}

export default ExpensesList