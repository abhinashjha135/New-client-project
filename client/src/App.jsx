import './App.css';
import Header from './componments/header/Header';
import SignIn from './componments/registration/SignIn';
import SignUp from './componments/registration/SignUp';
import Home from './componments/pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskManager from './componments/pages/taskmanagement/Taskmanager';
import Dashboard from './componments/pages/dashboard/Dashboard';
import './styles/main.scss';




function App() {
  return (
    <div>
      
      <Router>
      <Header />
        <Routes>
        <Route path='/' element = {<Home/>}/>
        
          <Route path='/signin' element = {<SignIn/>}/>
          <Route path='/signup' element = {<SignUp/>}/>
          <Route path='/taskmanager' element = {<TaskManager/>}/>
          <Route path='/dashboard' element = {<Dashboard/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
