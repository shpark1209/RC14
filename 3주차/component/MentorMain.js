import React from "react";
import { MentorBanner } from "./MentorBanner";
import { LeftBody } from "./LeftBody";
import {RightBody} from "./RightBody";
const Main =()=>{

    return(
        <section className="mentor-list-section">
            <MentorBanner></MentorBanner>
            <div className="container">
                <div className="content-body">
                    <LeftBody></LeftBody>
                    <RightBody></RightBody>
                </div>
            </div>
        </section>
    );
}
export {Main}