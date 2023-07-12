import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'
import { useEffect } from 'react';
import { fetchAllQuestions } from './actions/question';
import { useDispatch  } from 'react-redux';
import { fetchAllUsers } from './actions/users'

function App() {

const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch]);
  
  return (
    <div className="App">
      <Router>
       <Navbar/>
       <AllRoutes/>
      </Router>
      <button className='ty'> <a href="/Otp" className='ppp'> Have Doubts Click Here!!</a></button>
    </div>
  ); 
}
export default App;
