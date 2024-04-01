import FaceIcon from '@mui/icons-material/Face';
import ListOfExpenses from './ListOfExpenses';
import { useState, useEffect } from 'react';
import axios from 'axios';
const AddExpenses = () => {
    const [data, setData]= useState({name:"",dateTime:"",category:null, isCredit:null, cost:""})
    const [error, setError]= useState({name:"",dateTime:"",category:null, isCredit:null, cost:""})
    const [val, setVal]=useState([])
    const [isValid, setisValid ] = useState(true)
    const handleChange = (e) =>{
         console.log({...data, [e.target.name]:(e.target.value)})
         setData({...data, [e.target.name]:(e.target.value)})
        //  validation(e.target.name, e.target.value)

    }
    const validation = (key, value) => {
          switch (key) {
            case "name":
                if(value === ""){ 
                 setError({...error, [key]:"Please enter the name"})
                }
                else if(key.includes("@")&&key.includes(".")){
                    setError({...error, [key]:"Please enter the valid email"})
                }
                break;
            case "dateTime":  
                 value === "" && setError({...error, [key]:"Please set the date and time"})
                 break;
            case "category": 
                value === null && setError({...error, [key]:"Please select the category"})
                break;
            case "isCredit":
                value === null && setError({...error, [key]:"Please select the option"})
                break;
            case "cost":
                value === "" && setError({...error, [key]:"Please enter the value"})
                break;
          
            default:
                break;
          }
     console.log(error)
    }
    const [triggerGetData, settriggerGetData]= useState(false)
    useEffect(() => {
        axios.get("http://localhost:3001/expenses").then((response) => {
            console.log(response.data)
            setVal(response.data)
            // leng=response.data.length
            
        })
    },[triggerGetData])
    const onClick = () => {
        for(const key in data){
            console.log(key, data[key])
            validation(key, data[key])
        }
        if(!error.name && !error.dateTime && !error.category && !error.isCredit && !error.cost){
        axios({
            method: "POST",
            url: "http://localhost:3001/expenses",
            headers: {
              "Content-Type" : "application/json"
            },
            data: {
                "id": "expense_"+Date.now(),
                ...data,
            }
          }).then(()=>{
            settriggerGetData(!triggerGetData)
            setData({name:"",dateTime:"",category:"Select the Category", isCredit:null, cost:""})
          })
        }
      }   

    return (
        <>
            
            <div className="container ">
                <div className="row">
                <h2 className="p-2 col ">ADD EXPENSES</h2>
                <div className="p-2 col">
                    <FaceIcon style={{ color: "black", marginLeft: "auto", float:"right"}}></FaceIcon><br/>
                    <p style={{float:"right"}} >Ramya</p>
                </div>
                </div>
                <div className="row" style={{columnGap: "20px", }}>
                   <div className="box col rounded-4 " style={{padding:"30px"}}> 
                    <label for="Name"  >Name</label>
                    <input className=" w_90 d-block" type='text' id='Name' name="name" onChange={handleChange} value={data.name}></input><br/>
                    { error.name && <p>{error.name}</p>}
                    <label for="Date">Date&Time</label>
                    <input className=" w_90 d-block" type='datetime-local' name='dateTime' onChange={handleChange} id='Date' value={data.dateTime}></input><br/>
                    { error.dateTime && <p>{error.dateTime}</p>}
                    <label for="Category">Category</label>
                    <select className=" w_90 d-block"  id='Category' name='category' onChange={handleChange} style={{padding:"3px"}}>
                            <option value="Select the Category" disabled selected >Select the Category</option>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="Enterainment">Entertainment</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Education">Education</option>
                            <option value="Rent">Rent</option>
                    </select><br/>
                    { error.category && <p>{error.category}</p>}
                    <label for="isCredit">Is Credit</label>
                    <input type='radio' style={{marginLeft : "40px"}} onChange={handleChange} value="true" name="isCredit"></input>
                    <label for="Yes">Yes</label>
                    <input type='radio' style={{marginLeft : "40px"}} onChange={handleChange} value="false" name='isCredit'></input>
                    <label for="No">No</label><br/>
                    { error.isCredit && <p>{error.isCredit}</p>}
                    <label for="cost" className='mt-4'>Cost</label><br/>
                    <div className='input-group flex-nowrap w_90'>
                        <span className='input-group-text' id="rupees">&#8377;</span>
                        <input className='w_100' type='text' onChange={handleChange} name="cost" aria-describedby='rupees' value={data.cost}></input>
                    </div>
                    { error.cost && <p>{error.cost}</p>}
                    <button type='button' className='mt-5 btn btn-info' onClick={onClick} style={{float:"right",margin:"10%"}}>Save</button>
                   </div>
                   <div className="box col rounded-4" style={{padding:"30px"}}>
                    <ListOfExpenses expenses={val}></ListOfExpenses>
                       
                   </div>
                </div>

            </div>
            </>

            )
}
            export default AddExpenses;