import "./lecture.css"
import { Component } from "react";
import { InflearnSection } from "./component/inflearnHeader";
import { Main } from "./component/lectureMain";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { FixedLogo } from "./component/FixedLogo";
import { WarningModal } from "./component/WarningModal";
import React from "react";

const Lecture =()=>{
    return(
        <div>
            <InflearnSection></InflearnSection>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
            <FixedLogo></FixedLogo>
        </div>
    );
}




export {Lecture}

  


