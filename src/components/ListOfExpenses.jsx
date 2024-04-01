import { useEffect, useState } from "react"
import axios from "axios"

const ListOfExpenses = (props) => {
    
   
    const converDate = (date) => {
        return date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()
    }
    const converTime = (time) => {
        return time.getHours()+":"+ time.getMinutes()
    }

    return (
        <div className="container " style={{overflow: "auto", height:"95%"}}>
        {
            props.expenses.length > 0 && props.expenses.map((val) => {
                return (<div className="card mb-4 container" >
                    <div className="card-body row">
                        <div className="col">
                        <p className="card-title px-0 fw-medium">{val.name}</p>
                        <p>{val.category}</p>
                        <p>{converDate(new Date(val.dateTime))}</p>
                        <p>{converTime(new Date(val.dateTime))}</p>
                    </div>
                    <div className="col w_100" style={{float:"right", color:"green"}}>
                        
                        <p className="fw-medium" style={{float:"right"}}><span>&#8377;</span>{val.cost}</p>
                    </div>
l
                </div>
                </div>
            )})
        }</div>)
}


export default ListOfExpenses