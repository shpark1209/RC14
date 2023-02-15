import React from "react";
import { MentorCard } from "./MentorCard";
import { MentorList } from "./MentorList";
const RightBody =()=>{
    return(
        <div className="content-right">
            <div className="right-container">
                <div className="mentor-card">
                    <MentorList></MentorList>
                    <MentorList></MentorList>
                </div>
                <nav className="mentor-index">
                    <ul className="mentor-pages">
                        <li>
                            <button className="mentor-page-button selected">1</button>
                        </li>
                        <li>
                            <button className="mentor-page-button">2</button>
                        </li>
                        <li>
                            <button className="mentor-page-button">3</button>
                        </li>
                        <li>
                            <button className="mentor-page-button">4</button>
                        </li>
                        <li>
                            <button className="mentor-page-button">5</button>
                        </li>
                        <li>
                            <button className="mentor-page-button">...</button>
                        </li>
                        <li>
                            <button className="mentor-page-button">8</button>
                        </li>
                        <li>
                            <button className="mentor-page-button">다음</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );

}
export {RightBody}