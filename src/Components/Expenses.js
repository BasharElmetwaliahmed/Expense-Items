import React, { useState } from 'react'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import ExpensesList from './ExpensesList';
import ExpenseChart from './Chart/ExpenseChart';

const Expenses=({expenses})=> {

    const [filteredYear,setFilteredYear]=useState(2022);
    const onChangeFilterYear=(year)=>{
         setFilteredYear(year)
    }
     const filteredExpenses=expenses.filter(expense=>expense.date.getFullYear()==filteredYear)

  return (
    <div>
        <ExpensesFilter onChangeFilterYear={onChangeFilterYear}/>
            {<ExpenseChart expenses={filteredExpenses}/>}
             {<ExpensesList  expenses={filteredExpenses}/>}

    </div>
  )
}

export default Expenses