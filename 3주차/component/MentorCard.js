import React from "react";

const MentorCard =(props)=>{

    return(
        <section className="mentor-card-wrapper">
            <div className="mentor-card-top">
                <h3 className="mentor-card-title">{props.title}</h3>
                <div className="mentor-job-wrapper">
                    <div className="mentor-card-desc">
                        <div>
                            <dt>{props.header1}</dt>
                            <dd>{props.content1}</dd>
                        </div>
                        <div>
                            <dt>{props.header2}</dt>
                            <dd>{props.content2}</dd>
                        </div>
                        <div>
                            <dt>{props.header3}</dt>
                            <dd>{props.content3}</dd>
                        </div>
                    </div>
                    <div className="mentor-card-thumbnail">
                        <img src={props.src}></img>
                    </div>
                </div>
            </div>
            <div className="mentor-card-bottom">
                <div>
                    <a className="mentor-name">{props.name}</a>
                    {props.rating!=='none' && <button className="mentor-rating-button">
                        <span>⭐</span>
                        <span>{props.rating}</span>
                        {'>'}
                    </button>}
                    
                </div>
            </div>
        </section>
    );

}
export {MentorCard}
