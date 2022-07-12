import React,{useState} from 'react'
import Main from './Main'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [ user, setLoginUser] = useState({})
  return (
    <div>

      <Router>
        <Routes>
          <Route exact path="/" element ={ user && user._id ? <Main setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>}/>
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />}/>
          <Route path="/register" element={<Register/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App;