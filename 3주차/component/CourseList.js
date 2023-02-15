import React from "react";
import target from "../data/MainData1.json"
import { useEffect } from "react";
import { CourseFront } from "./courseFront";
import { CourseBack } from "./courseBack";
const CourseList =()=>{
    const Courses = [];
    useEffect(() => {
        target.courses.map((course) => {
            Courses.push(course);
        });
        console.log(Courses);
    });
    return(
        <div className="course-card-wrapper">
       {
            target.courses.map((course)=>(
                <div className="course-card">
                    <div className="course-card-content">
                        <CourseFront delPrice={course.delPrice} del={course.del} tag1={course.tag1} tag2={course.tag2} tag3={course.tag3} price={course.price} ratingNum={course.ratingNum} rating={course.rating} instruct={course.instruct} title={course.title} src={course.src}></CourseFront>
                        <CourseBack title={course.backTitle} level={course.level} category={course.category} skill={course.skill}></CourseBack>
                    </div>    
                </div>
            ))
            
       } 
       </div>
    );
}
export {CourseList}