import React from "react";
const GroupImage =(props)=>{

    return(
        <div className="group-image">
                            <img src={props.src}></img>
                        </div>
    );

}
export {GroupImage}