import React from "react";
const CourseBack =(props)=>{
        return(
            <div className="course-back">
                                                    <a>
                                                        <p className="course-back-title">{props.title}</p>
                                                        <div className="course-level"><span>{props.level}</span></div>
                                                        <div className="course-category">
                                                            <span>{props.category}</span>
                                                          </div>
                                                        <div className="course-back-skill">
                                                            <span>{props.skill}</span>
                                                          </div>
                                                    </a>
                                                </div>
        );
    
}
export {CourseBack}