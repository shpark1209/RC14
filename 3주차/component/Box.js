import React from "react";
const Box =(props)=>{

        return (
            <div className="box">
                                            <h2 className="box-title">{props.title}</h2>
                                            <div className="box-subtitle">
                                                {props.subtitle1}
                                                    <span></span>
                                                {props.subtitle2}
                                            </div>
                                            <a href="" className="box-button">
                                                <span>{props.button}</span>
                                                <span>→</span>
                                            </a>
                                        </div>
        );
    
}
export {Box}