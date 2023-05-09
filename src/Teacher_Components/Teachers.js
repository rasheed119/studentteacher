import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TeachersBase from '../Base/TeachersBase';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Teachers({teacher, setteacher}) {
  const history = useHistory();

  const deleteteacher = (studidx)=>{
    const remaingteacher = teacher.filter((studobj,index)=>studidx!==index);
    setteacher(remaingteacher);
  }

  return (
    <TeachersBase
    title={"Teachers dashboard"}
    description={"This page contains data of Teachers"}
    >
    <Container>
      <div className='boxes'>
        {teacher.map((obj,index)=>(
          <Col className='cards'>
              <Card style={{ width: '18rem' }} key={index} >
      <Card.Body>
        <Card.Title>Name : {obj.name}</Card.Title>
        <Card.Text>
          Email : {obj.email}
        </Card.Text>
        <Card.Text>
          Company : {obj.company}
        </Card.Text>
        <Card.Text>
          Experience : {obj.text} Years
        </Card.Text>
        <div>
        <Button className='m-2' variant="primary"
        onClick={()=>history.push(`/edit_teacher/${index}`)}
        >Edit</Button>
        <Button className='m-2' variant="danger"
        onClick={()=>deleteteacher(index)}
        >Delete</Button>
        </div>
      </Card.Body>
    </Card>
          </Col>
        ))}
      </div>
    </Container>
    </TeachersBase>
  )
}

export default Teachers