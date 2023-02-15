import React from "react";
import target from "../data/MainData1.json"
import { CourseBack } from "./courseBack";
import { CourseFront } from "./courseFront";
import { useEffect } from "react";
const FreeCourseList = () => {
    const freeCourses = [];
    useEffect(() => {
        target.lectures.map((lecture) => {
            freeCourses.push(lecture);
        });
        console.log(freeCourses);
    })
    return (
        <div className="free-course-wrapper">
            {
                target.lectures.map((lecture)=>(
                    <div className="free-course-list-wrapper">
                        <CourseFront src={lecture.src} title={lecture.title} instruct={lecture.instruct} rating={lecture.rating} ratingNum={lecture.ratingNum} tag1={lecture.tagNum} tag2={lecture.tagUpdate}></CourseFront>
                        <CourseBack title={lecture.backTitle} level={lecture.level} category={lecture.category} skill={lecture.skill}></CourseBack>
                    </div>
                ))
                
            }                                            
        </div>
        
        
    );
}
export {FreeCourseList}