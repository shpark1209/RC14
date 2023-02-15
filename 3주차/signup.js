
import "./signup.css"
import {InflearnSection} from "./component/inflearnHeader.js";
import { Header } from "./component/Header";
import { Main } from "./component/signupMain";
import { WarningModal } from "./component/WarningModal.js";
import { Footer } from "./component/Footer";
import React from 'react'
import {FixedLogo} from "./component/FixedLogo";

  
const Signup =()=>{
    return (
        <div>
            <InflearnSection></InflearnSection>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
            <FixedLogo></FixedLogo>
            <WarningModal></WarningModal>
        </div>
        

    );
}
  

export {Signup}










