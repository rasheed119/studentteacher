import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Welcome() {
  const history = useHistory();
  return (
    <div className='welcome'>
      <h1>Welcome to the dashboard</h1>
      <br/>
      <h4><Button 
      onClick={()=>history.push("/student_dashboard")}
      >Click here</Button> to go to the student dashboard</h4>
      <br/>
      <h4><Button 
      onClick={()=>history.push("/teacher_dashboard")}
      >Click here</Button> to go to the Teachers dashboard</h4>
    </div>
  )
}

export default Welcome;