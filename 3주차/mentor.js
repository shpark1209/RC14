import "./mentor.css"
import React from "react";
import { MentorBanner } from "./component/MentorBanner";
import { InflearnSection } from "./component/inflearnHeader";
import { Header } from "./component/Header";
import { Main } from "./component/MentorMain";
import { Footer } from "./component/Footer";
import { FixedLogo } from "./component/FixedLogo";
const Mentor =()=>{
    return (
        <div>
            <InflearnSection></InflearnSection>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
            <FixedLogo></FixedLogo>
        </div>
    );
    
}











export {Mentor};