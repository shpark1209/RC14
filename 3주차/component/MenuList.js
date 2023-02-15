import React from 'react'
const MenuList =(props)=>{
    return(
        <div className="menu-list">
                        <div className="list-title">{props.title}</div>
                        <div className="sub-menu">
                            <a className="sub-menu-link">{props.link1}</a>
                            <a className="sub-menu-link">{props.link2}</a>
                            <a className="sub-menu-link">{props.link3}</a>
                            <a className="sub-menu-link">{props.link4}</a>
                            <a className="sub-menu-link">{props.link5}</a>
                        </div>
                    </div>
    );
}
export {MenuList};