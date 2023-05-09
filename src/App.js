import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import { useState } from 'react';
import './App.css';
import Students from './Student_Components/Students';
import Welcome from './Student_Components/Welcome';
import Addstudents from './Student_Components/Addstudents';
import student_data from "./Data/Students_data"
import Editstudent from './Student_Components/Editstudents';
import teachers_data from './Data/Teachers_data';
import Teachers from './Teacher_Components/Teachers';
import Editteachers from './Teacher_Components/Editteachers';
import Addteachers from './Teacher_Components/Addteachers';

function App() {

  const [student, setstudent] = useState(student_data);
  const [teacher, setteacher] = useState(teachers_data);

  return (
    <div>
      <Switch>

        <Route exact path = "/">
          <Welcome/>
        </Route>

        <Route path="/student_dashboard">
          <Students
          student = {student}
          setstudent = {setstudent}
          />
        </Route>

        <Route path ="/addstudents">
          <Addstudents
          student = {student}
          setstudent = {setstudent}
          />
        </Route>

        <Route path = "/edit_student/:id">
          <Editstudent
          student = {student}
          setstudent = {setstudent}
          />
        </Route>

        <Route path = "/teacher_dashboard">
          <Teachers
          teacher = {teacher}
          setteacher = {setteacher}
          />
        </Route>

        <Route path="/edit_teacher/:id">
          <Editteachers
          teacher = {teacher}
          setteacher = {setteacher}
          />
        </Route>

        <Route path = "/add_teacher">
          <Addteachers
          teacher = {teacher}
          setteacher = {setteacher}
          />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
