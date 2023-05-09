import Base from '../Base/StudentBase';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Students({student,setstudent}) {
  const history = useHistory();

  const deletestudent = (studidx)=>{
    const remaingstudent = student.filter((studobj,index)=>studidx!==index);
    setstudent(remaingstudent)
  }
  return (
    <Base
    title={"Students dashboard"}
    description={"This page contains data of Students"}
    >
    <Container>
      <div className='boxes'>
        {student.map((obj,index)=>(
          <Col className='cards'>
              <Card style={{ width: '18rem' }} key={index} >
      <Card.Body>
        <Card.Title>Name : {obj.name}</Card.Title>
        <Card.Text>
          Batch : {obj.batch}
        </Card.Text>
        <Card.Text>
          Qualification : {obj.qualification}
        </Card.Text>
        <Card.Text>
          Gender : {obj.gender}
        </Card.Text>
        <div>
        <Button className='m-2' variant="primary"
        onClick={()=>history.push(`/edit_student/${index}`)}
        >Edit</Button>
        <Button className='m-2' variant="danger"
        onClick={()=>deletestudent(index)}
        >Delete</Button>
        </div>
      </Card.Body>
    </Card>
          </Col>
        ))}
      </div>
    </Container>
    </Base>
  )
}

export default Students