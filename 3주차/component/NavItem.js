import React from 'react'
const NavItem =(props)=>{
    return(
      <div className="navbar-item">
        <a className="navbar-item">{props.desc}</a>
      </div>
    );
  
}
export {NavItem};