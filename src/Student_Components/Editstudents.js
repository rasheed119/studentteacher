import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom/cjs/react-router-dom.min"
import Base from '../Base/StudentBase';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Editstudent({student,setstudent}) {

  const {id} = useParams();

  const edit = student[id];
  const [name, setname] = useState("");
  const [qualification, setqualification] = useState("");
  const [gender, setgender] = useState("");
  const [batch, setbatch] = useState("");

  const history = useHistory();

  useEffect(()=>{
    setname(edit.name);
    setbatch(edit.batch);
    setgender(edit.gender);
    setqualification(edit.qualification)
  },[edit])

  const editstudents = ()=>{
    const updated_student = {
      name,qualification,gender,batch
    }
    student[id] = updated_student;
    setstudent([...student]);
    history.push("/student_dashboard");
  }

  return (
    <Base
    title={"Edit Student"}
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
        onClick={editstudents}
        >Update Student</Button>
      </div>
    </Base>
  )
}

export default Editstudent;
