import React, { useState } from 'react'
import './ExpensesFitler.css'
function ExpensesFilter({onChangeFilterYear}) {
    const [filterYear,setFilterYear]=useState(2022)
   const onChangeFilterHandler=(e)=>{
    setFilterYear(e.target.value)
    onChangeFilterYear(filterYear)
   }
  return (
    <div className='filter-expense'>
        <h2>Fitler By Year</h2>
          <select  onChange={onChangeFilterHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>

    </div>
  )
}

export default ExpensesFilter