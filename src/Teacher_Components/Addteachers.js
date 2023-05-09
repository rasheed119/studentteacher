import React, { useState } from 'react'
import TeachersBase from '../Base/TeachersBase';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Addteachers({teacher, setteacher}) {

  const history = useHistory();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [company, setcompany] = useState("");
  const [experience, setexperience] = useState("");

  const addteacher = ()=>{
    const new_teacher = {
      name,email,company,experience
    }
    setteacher([...teacher,new_teacher]);
    history.push("/teacher_dashboard")
  }

  return (
    <TeachersBase
    title={"Add Teacher Data"}
    description={"Enter details to add teacher data"}
    >
      <div className='inputs'>
        <input
        type='text'
        value={name}
        placeholder='Enter Name'
        onChange={(e)=>setname(e.target.value)}
        />
        <input
        type='email'
        value={email}
        placeholder='Enter E-mail'
        onChange={(e)=>setemail(e.target.value)}
        />
        <input
        type='text'
        value={company}
        placeholder='Enter company'
        onChange={(e)=>setcompany(e.target.value)}
        />
        <input
        type='number'
        value={experience}
        placeholder='Enter experience'
        onChange={(e)=>setexperience(e.target.value)}
        />
        <Button
        onClick={addteacher}
        >Update Teacher</Button>
      </div>
    </TeachersBase>
  )
}

export default Addteachers