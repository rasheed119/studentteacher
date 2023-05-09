import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function TeachersBase({title,description,children}) {
  const history = useHistory()
  return (
    <div className='base'>
    <Container>
    <div className='navbuttons'>

    <Button className='m-3'
      onClick={()=>history.push("/")}
      >Welcome Page</Button>

      <Button className='m-3'
      onClick={()=>history.push("/teacher_dashboard")}
      >Dashboard</Button>

      <Button className='m-3'
      onClick={()=>history.push("/add_teacher")}
      >Add Teacher</Button>


    </div>
    </Container>

    <h1>{title}</h1>
    <br/>
    <h3>{description}</h3>
    <br/>
    <div className='child'>
      {children}
    </div>
  </div>
  )
}

export default TeachersBase;