import React from 'react'
import './App.css'
import { Container } from 'react-bootstrap';
import UserPostData from './pages/UserPostData';
import UserRegister from "./pages/UserRegiser";
const App = () => {


  return (
    <>
      <Container>
        <h1> User Profile</h1>
        {/* <UserRegister /> */}
        <UserPostData/>
      </Container>
    </>
  );
}

export default App
