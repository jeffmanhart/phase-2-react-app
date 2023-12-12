import NavBar from './NavBar'
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
 