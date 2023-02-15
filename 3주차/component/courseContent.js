import React from "react";
import "../main.css";
const CourseContent =(props)=>{
        return(
            <div className="course-content">
                                    <a>{props.content}   {'>'}</a>
                                </div>
        );
}
export {CourseContent}