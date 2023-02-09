import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Employee from '../Employee';
import { useNavigate,Link } from 'react-router-dom';

function Home() {
const navigate = useNavigate();

  const handleDelete = (empId)=>{
    console.log(empId);
    let index = Employee.map((item)=>item.empId).indexOf(empId)
    Employee.splice(index,1)
    console.log(Employee);
    navigate('/')
  }
  const handleEdit = (empId,empName,empDesg,empSalary)=>{
    localStorage.setItem("empId",empId)
    localStorage.setItem("empName",empName)
    localStorage.setItem("empDesg",empDesg)
    localStorage.setItem("empSalary",empSalary)
  }

  return (
    <>
      <h1 className='text-center text-dark my-5 mx-5'>List Of Employees
      &nbsp;
      &nbsp;
      
      <Link to={'/add'}><Button variant="warning"><i class="fa-solid fa-user-plus"></i>&nbsp; &nbsp; Add</Button></Link >
      </h1>
      <p style={{textAlign:'justify'}}><b>This is a dummy content:</b> &nbsp;An employee is an individual who works for an employer, such as a private company or a government agency, and does a specific job. While the term is common, you might wonder, 'what is an employee?' and why the distinction matters. Understanding what an employee is and how the process works to become one can be helpful when pursuing a job.
         To get the job and the employee status, an individual typically goes through an application and recruitment process, during which they present their skills and qualifications to a recruiter or employer. Upon receiving and signing an employment contract, the individual receives an employment status. The contract determines their responsibilities and employment entitlements </p>

    <div style={{margin:"3rem"}}>
    
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        
          <th>Employee Name</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          Employee && Employee.length>0 ?
          Employee.map((item)=>(

        
          <tr>
         
          <td>{item.empName} </td>
          <td>{item.empDesg}</td>
          <td>{item.empSalary}</td>
          <td>
<Link to={'/edit'}>
              <Button onClick={()=>handleEdit(item.empId,item.empName,item.empDesg,item.empSalary)}  variant="success" ><i class="fa-solid fa-pencil"></i></Button>

</Link>              &nbsp;
            &nbsp;
          

            <Button onClick={()=>handleDelete(item.empId)} variant="danger" ><i class="fa-sharp fa-solid fa-eraser"></i></Button>
          </td>
        </tr>
          ))
          : "No data"
       }
       
      </tbody>
    </Table>

    </div>
    </>
  )
}

export default Home