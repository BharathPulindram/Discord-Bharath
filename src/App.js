import React from "react";
import "./App.css";
import {useSelector} from "react-redux";
import Chat from "./Components/Chat";
import Sidebar from "./Components/Sidebar";
import { selectUser } from "./features/userSlice";
import Login from "./Components/Login";

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
      {
        user ? 
        <>
        <Sidebar />
      <Chat />
        </> : <Login/>
      }
      
    </div>
  );
}

export default App;
