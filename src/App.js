import './App.css'; 
import Navbar from './Components/Navbar';  
import TextForm from './Components/TextForm';
// import About from './Components/About';
import Alert from './Components/Alert';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  }

  const switchMode = (color) => {
    if (color === "light") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setMode("light");
      showAlert("Light mode has been enabled", "success");

      let navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.style.backgroundColor = "#f1f1f1";
      }
    } 
    else if (color === "dark") {
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "white";
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");

      let navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.style.backgroundColor = "#222";
        navbar.style.color = "white";
      }
    } 
    else if (color === "blue") {
     document.body.style.backgroundColor = "#684dffff";
      document.body.style.color = "white";
      setMode("blue");
      showAlert("Ocean mode has been enabled", "success");

      let navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.style.backgroundColor = "#1f0091ff";
        navbar.style.color = "white";
      }
    }
    else if (color === "green") {
     document.body.style.backgroundColor = "#76ff7dff";
      document.body.style.color = "white";
      setMode("green");
      showAlert("Forest mode has been enabled", "success");

      let navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.style.backgroundColor = "#00a832ff";
        navbar.style.color = "white";
      }
    }
    else if (color === "cyan") {
     document.body.style.backgroundColor = "#8bfff5ff";
      document.body.style.color = "white";
      setMode("cyan");
      showAlert("Cyan mode has been enabled", "success");

      let navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.style.backgroundColor = "#00b9a1ff";
        navbar.style.color = "white";
      }
    }
    
  };

  return (
    
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} switchMode={switchMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About mode={mode}/>}/> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode}/>} /> */}
            <TextForm showAlert={showAlert} mode={mode}/>
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
