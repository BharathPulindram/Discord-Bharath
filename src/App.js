import React from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import Chat from "./Components/Chat";
import Sidebar from "./Components/Sidebar";
import { login, selectUser,logout } from "./features/userSlice";
import Login from "./Components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      
      if(authUser){
        //the user is logged in
        dispatch(
          login({
            uid:authUser.uid,
            photo:authUser.photoURL,
            email:authUser.email,
            displayName:authUser.displayName,
            
          })
          )
      }
      else{
        //user logged out
        dispatch(logout());
      }
    })
  } ,[dispatch])
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
