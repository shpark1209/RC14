import React from "react";
import { Image } from "./Image";
const CourseFront =(props)=>{
        return(
            <a className="course-front" onMouseOver={listener}>
                <div className="card-image">
                    <Image src={props.src}></Image>
                </div>
                <div className="card-content">
                    <div className="course-title">{props.title}</div>
                    <div className="instructor">{props.instruct}</div>
                    <div className="rating">{props.rating}<span style={{fontSize: '5px', color: '#4a4a4a'}}>({props.ratingNum})</span></div>
                    <div className="price">{props.del==='true' && <del>{props.delPrice}</del>}{props.price}</div>
                    <div className="lecture-tag">
                        {props.tag1!=null && <span className="tag" style={{backgroundColor: 'hsl(321,63%,90%)'}}>{props.tag1}</span>}
                        {props.tag2!=null && <span className="tag" style={{backgroundColor: 'hsl(182,75%,94%)'}}>{props.tag2}</span>}
                        {props.tag3!=null && <span className="tag" style={{backgroundColor: 'hsl(1,100%,89%)'}}>{props.tag3}</span>}
                    </div>                         
                </div>
            </a>
        );
    }

    let listener=function() {
        var lecture_hover=document.getElementsByClassName("course-front");
        var lecture_desc=document.getElementsByClassName("course-back");
        for(var i=0; i<lecture_hover.length;i++){
            const temp=i;
            lecture_hover[i].addEventListener('mouseover', function(){
                lecture_desc[temp].style.display='block';
            });
            lecture_hover[i].addEventListener('mouseout', function(){
                lecture_desc[temp].style.display='none';
            });
        }
    
    }
export {CourseFront}