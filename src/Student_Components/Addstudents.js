import React, { useState } from 'react'
import Base from '../Base/StudentBase'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Addstudents({student,setstudent}) {
  const [name, setname] = useState("");
  const [qualification, setqualification] = useState("");
  const [gender, setgender] = useState("");
  const [batch, setbatch] = useState("");
  const history = useHistory();

  const addstudent = ()=>{
    const new_student = {
      name,gender,qualification,batch
    }
    setstudent([...student,new_student]);
    history.push("/student_dashboard")
  }

  return (
    <Base
    title={"Add Student"}
    description={"Enter details to add student"}
    >
      <div className='inputs'>
        <input
        type='text'
        value={name}
        placeholder='Enter Name'
        onChange={(e)=>setname(e.target.value)}
        />
        <input
        type='text'
        value={gender}
        placeholder='Enter Gender'
        onChange={(e)=>setgender(e.target.value)}
        />
        <input
        type='text'
        value={qualification}
        placeholder='Enter Qualification'
        onChange={(e)=>setqualification(e.target.value)}
        />
        <input
        type='text'
        value={batch}
        placeholder='Enter batch'
        onChange={(e)=>setbatch(e.target.value)}
        />
        <Button
        onClick={addstudent}
        >Add Student</Button>
      </div>
    </Base>
  )
}

export default Addstudents