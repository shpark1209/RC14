import { Component } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Signup} from "./signup.js"
import { Lecture } from "./lecture.js";
import { MainPage } from "./main.js";
import React from 'react'
import { Mentor } from "./mentor.js";
function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/lecture" element={<Lecture></Lecture>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/mentor" element={<Mentor></Mentor>}></Route>
          </Routes>
        </BrowserRouter>
        
    </div>

  );
}



export default App;
