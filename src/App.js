import NavBar from './NavBar'
import { Outlet, Navigate, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

//Navigation is not working at all oof
  const navigate = useNavigate();
  useEffect(() =>{
    navigate("/weather");
})
  return (
    <div className="App">
      <NavBar />
      {<Navigate to="/weather" />}
    </div>
  );
}

export default App;
 