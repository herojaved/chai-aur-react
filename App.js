import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Header from "./Component/Header";

function App() {
  const message = "hi i want to learn mern";
  const message2 = "geeksforgeeks";
  return (
    <div className="Ap">
      <Header message={message} message2={message2}></Header>
    </div>
  );
}

export default App;