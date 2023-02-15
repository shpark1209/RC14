import React from "react";
import "./main.css"
import { InflearnSection } from "./component/inflearnHeader";
import { Header } from "./component/Header";
import { Main } from "./component/Main";
import { Footer } from "./component/Footer";
import { FixedLogo } from "./component/FixedLogo";
import { WarningModal } from "./component/WarningModal";
 const MainPage =()=>{
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
  
  
export {MainPage}