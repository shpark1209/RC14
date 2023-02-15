import { NavItem } from "./NavItem.js";
import { Image } from "./Image.js";
import React from 'react'
import {Link} from 'react-router-dom';
const Header =()=>{
    return(
      <div id="header">
                <nav className="navbar">
                    <div className="container">
                        <div className="content">
                            <div className="brand">
                                <Link to={"/"}>
                                    <Image class="brand_image" src="https://www.inflearn.com/icon-192x192.png"></Image>
                                </Link>
                            </div>
                            <div className="navbar-container">
                                <div className="navbar-left">
                                    <Link to={"/lecture"}>
                                        <NavItem desc="강의"></NavItem>
                                    </Link>
                                    
                                    <NavItem desc="로드맵"></NavItem>
                                    <Link to={"/mentor"}>
                                        <NavItem desc="멘토링"></NavItem>
                                    </Link>
                                    
                                    <NavItem desc="커뮤니티"></NavItem>
                                    <NavItem desc="인프런"></NavItem>
                                    
                                </div>
                              <div className="navbar-right">
                                    <div className="navbar-search navbar-item">
                                        <input type="text" class="navbar-search_input"></input>
                                        <span className="navbar-search_icon">🔍</span>
                                    </div>
                                    <div className="navbar-item navbar-button ">
                                        <a className="navbar-item button login ">로그인</a>
                                        <Link to="/signup" className="button signup navbar-item">회원가입</Link>
                                    </div>
                              </div>   
                            </div>
                        </div>
                      </div>
                    </nav>
                </div>
    );
  }
  export {Header};