import React from "react";
const AccordionContent =(props)=>{

    return(
        <div className="accordion-content">
            <div className="accordion-wrapper">
                <input id={props.num} className="accordion-checkbox" type={"checkbox"}></input>
                <label for={props.num} className="accordion-desc">{props.desc}</label>
            </div>
        </div>
    );

}
export {AccordionContent}