import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid';
import Employee from '../Employee';
import { useNavigate } from 'react-router-dom';

function Add() {
 const [empName,setName] = useState('')
 const [empDesg,setDesg] = useState('')
 const [empSalary,setSalary] = useState(0)
 const navigate = useNavigate()
 const handleSubmit =(event)=>{
  // to prevent auto refresh
  event.preventDefault()
  
  //generate uuid 
  const ids=uuid()
  let uniqueId = ids.slice(0,8)
  let salary =Number(empSalary)

  Employee.push({
    empId:uniqueId,
    empName,
    empDesg,
    empSalary:salary
  })
  navigate('/')
 }


  return (
    <div className='my-2 p-2'>
      <h1 className='text-center text-dark my-3  '>Add New Employee Details</h1>
      <p style={{textAlign:'justify'}}><b>This is a dummy content:</b> &nbsp;An employee is an individual who works for an employer, such as a private company or a government agency, and does a specific job. While the term is common, you might wonder, 'what is an employee?' and why the distinction matters. Understanding what an employee is and how the process works to become one can be helpful when pursuing a job.
         To get the job and the employee status, an individual typically goes through an application and recruitment process, during which they present their skills and qualifications to a recruiter or employer. Upon receiving and signing an employment contract, the individual receives an employment status. The contract determines their responsibilities and employment entitlements </p>
        
        <div className='row' >
        <div className='col-4'> 
          <img className=' mt-5' src='https://www.deliveree.com/wp-content/uploads/2020/12/icon-staff@2x-min.png '></img>
        </div>
        <div className='col-8' >

         <Form className='border mt-3 p-5'>
     

      <Form.Group className="mb-3" controlId="formBasicName">    
        <Form.Control type="text" placeholder="Enter Employee Name"
        onChange={(event)=>setName(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDesg">    
        <Form.Control type="text" placeholder="Enter Employee Designation"
        onChange={(event)=>setDesg(event.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSalary">    
        <Form.Control type="text" placeholder="Enter Employee Salary" 
        onChange={(event)=>setSalary(event.target.value)}  />
      </Form.Group>

      <Button onClick={(event)=>handleSubmit(event)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    <div className='col-2'></div>
    </div>
    </div>
  )
}

export default Add