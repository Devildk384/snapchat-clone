import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import WebcamCapture from './WebcamCapture';
import Preview from './Preview';
import Chats from './Chats';
import ChatsView from './ChatsView';
import { login, logout, selectUser } from './features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser); 
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username:authUser.displayName,
          profilePic:authUser.photoURL,
          id:authUser.uid
        }))       
      }else {
        dispatch(logout())
      }
    })
  
  }, [])

     

  return (
    <div className="app">
    <Router>

    {!user ? 
    (<Login />) : 



    (
     <>
     <img className="app__logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/150px-Snapchat_logo.svg.png" alt=""/>
      
      <div className="app__body">
      <div className="app__background">
      <Switch>

      <Route path="/chats/view" >
           <ChatsView />
      </Route>
      
      <Route path="/chats" >
           <Chats />
      </Route>

      <Route path="/preview" >
           <Preview />
      </Route>

      <Route exact path="/" >

      <WebcamCapture/>

      </Route>   
      </Switch>

      </div>
      
    </div>
    </>
    )

    }
    
    
      
    </Router>
    
  
      
    </div>
  );
}

export default App;
