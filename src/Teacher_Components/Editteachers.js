import React from 'react'
import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom/cjs/react-router-dom.min"
import TeachersBase from '../Base/TeachersBase';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Editteachers({teacher, setteacher}) {
  const {id} = useParams();

  const edit = teacher[id];
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [company, setcompany] = useState("");
  const [experience, setexperience] = useState("");

  const history = useHistory();

  useEffect(()=>{
    setname(edit.name);
    setemail(edit.email);
    setcompany(edit.company);
    setexperience(edit.text)
  },[edit])

  const editteachers = ()=>{
    const updated_teacher = {
      name,email,company,experience
    }
    teacher[id] = updated_teacher;
    setteacher([...teacher]);
    history.push("/teacher_dashboard");
  }

  return (
    <TeachersBase
    title={"Edit Teacher Data"}
    description={"Enter details to edit data"}
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
        onClick={editteachers}
        >Update Teacher</Button>
      </div>
    </TeachersBase>
  )
}

export default Editteachers