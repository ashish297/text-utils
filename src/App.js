// import { Switch } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
// import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route
// } from "react-router-dom";



function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert=(message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark Mode Enabled','success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'light';
      showAlert('Light Mode Enabled','success');
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText = "About" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert} />
      <div className="container">
        {/* <Switch>
          <Route exact path="/"> */}
            <TextForm showAlert = {showAlert} heading="Enter the text to analyse" mode={mode}/>
          {/* </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
