import React , {useState,useEffect}from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from '../Employee';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const [empName,setName] = useState('')
  const [empDesg,setDesg] = useState('')
  const [empSalary,setSalary] = useState(0)
  const [empId,setId] = useState('')
  const navigate = useNavigate() 
  const handleUpdate =(event)=>{
    // to prevent auto refresh
    event.preventDefault()
    
//find index number of empId thats should updated
let  index= Employee.map((item)=>item.empId).indexOf(empId)
let emp=Employee[index]
emp.empId = empId
emp.empName = empName
emp.empDesg = empDesg
emp.empSalary = empSalary
navigate('/')
} 
 


useEffect(()=>{
   setName(localStorage.getItem("empName"))
   setDesg(localStorage.getItem("empDesg"))
   setSalary(localStorage.getItem("empSalary"))
   setId(localStorage.getItem("empId"))
},[])

  return (
    <div className='my-2 p-2'>
      <h1 className='text-center text-dark my-3  '>Update Employee Details</h1>
      <p style={{textAlign:'justify'}}><b>This is a dummy content:</b> &nbsp;An employee is an individual who works for an employer, such as a private company or a government agency, and does a specific job. While the term is common, you might wonder, 'what is an employee?' and why the distinction matters. Understanding what an employee is and how the process works to become one can be helpful when pursuing a job.
         To get the job and the employee status, an individual typically goes through an application and recruitment process, during which they present their skills and qualifications to a recruiter or employer. Upon receiving and signing an employment contract, the individual receives an employment status. The contract determines their responsibilities and employment entitlements </p>
        
        <div className='row' >
        <div className='col-4'> 
          <img className='mt-4 mx-3 my-5 ' style={{"width":"450px"}} src='https://webstockreview.net/images/employee-clipart-introduction-9.png'></img> 

        </div>

        <div className='col-8' >

         <Form className='border mt-3 p-5'>
     

      <Form.Group className="mb-3" controlId="formBasicName">    
        <Form.Control type="text" value={empName} placeholder="Enter Employee Name"
        onChange={(event)=>setName(event.target.value)}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDesg">    
        <Form.Control type="text" value={empDesg} placeholder="Enter Employee Designation"
                onChange={(event)=>setDesg(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSalary">    
        <Form.Control type="text" value={empSalary} placeholder="Enter Employee Salary" 
                onChange={(event)=>setSalary(event.target.value)}
        />
      </Form.Group>

      <Button onClick={(event)=>handleUpdate(event)} variant="primary" type="submit">
        Update
      </Button>
    </Form>
    </div>
    <div className='col-2'></div>
    </div>
    </div>
  
  )
}

export default Edit