import React from "react";
import target from "../data/MainData1.json"
import { MentorCard } from "./MentorCard";
const MentorList=()=>{
    return(
        target.mentors.map((mentor)=>(
            <MentorCard src={mentor.src} title={mentor.title} header1={mentor.header1} content1={mentor.content1} header2={mentor.header2} content2={mentor.content2} header3={mentor.header3} content3={mentor.content3} rating={mentor.rating} name={mentor.name}></MentorCard>
        ))
    );
}
export {MentorList}