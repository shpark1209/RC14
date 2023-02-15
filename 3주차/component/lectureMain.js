import React from "react";
import { CourseContent } from "./courseContent";
import { CourseBack } from "./courseBack";
import { Button } from "./Button";
import { CourseFront } from "./courseFront";
import { CourseList } from "./CourseList";
const Main = ()=>{
    return(
        <div className="main">
        <div className="course-section">
            <div className="container">
                <div className="course-wrapper">
                    <aside className="course-aside">
                        <nav className="course-nav">
                            <div className="course-header">
                                <a>전체 강의</a>
                            </div>
                            <CourseContent content="개발 · 프로그래밍      "></CourseContent>
                            <CourseContent content="보안 · 네트워크      "></CourseContent>
                            <CourseContent content="데이터 사이언스      "></CourseContent>
                            <CourseContent content="게임 개발       "></CourseContent>
                            <CourseContent content="크리에이티브      "></CourseContent>
                            <CourseContent content="직무 · 마케팅      "></CourseContent>
                            <CourseContent content="학문 · 외국어      "></CourseContent>
                            <CourseContent content="커리어      "></CourseContent>
                            <CourseContent content="교양      "></CourseContent>
                        </nav>
                    </aside>
                    <div className="course-body">
                        <header className="course-all">
                            <h1>전체 강의</h1>
                            <form className="course-input">
                                <div className="course-input-wrapper">
                                    <input type="search" placeholder="전체 강의 검색"></input>
                                </div>
                                <button className="course-input-button">검색</button>
                            </form>
                        </header>
                        <div className="course-skill-body">
                            <div className="course-skill">
                                <div className="course-skill-search-wrapper">
                                    <form className="course-skill-search-input">
                                        <input type="search" placeholder="기술 검색"></input>
                                    </form>
                                    <button className="course-skill-search-input-enter">🔍</button>
                                </div>
                                <div className="course-skill-button-wrapper">
                                    <Button class="course-skill-button" content="JavaScript"></Button>
                                    <Button class="course-skill-button" content="Spring"></Button>
                                    <Button class="course-skill-button" content="Python"></Button>
                                    <Button class="course-skill-button" content="Java"></Button>
                                    <Button class="course-skill-button" content="MVC"></Button>
                                    <Button class="course-skill-button" content="Spring Boot"></Button>
                                    <Button class="course-skill-button" content="면접"></Button>
                                    <Button class="course-skill-button" content="HTML/CSS"></Button>
                                    
                                </div>
                                <div className="course-skill-next">
                                    <button>↓</button>
                                </div>
                            </div>
                            <div className="search-option">
                                <nav className="search-filter">
                                    <Button class="search-filter-price" content="전체"></Button>
                                    <Button class="search-filter-price" content="무료"></Button>
                                    <Button class="search-filter-price" content="유료"></Button>
                                    <div className="search-divider"></div>
                                    <Button class="search-filter-discount" content="할인중"></Button>
                                    
                                    <div className="search-divider"></div>
                                    <Button class="search-filter-level" content="입문"></Button>
                                    <Button class="search-filter-level" content="초급"></Button>
                                    <Button class="search-filter-level" content="중급"></Button>
                                </nav>
                                <div className="course-display">
                                    <select className="course-display-select">
                                        <option selected>추천순</option>
                                        <option >인기순</option>
                                        <option >최신순</option>
                                        <option >평점순</option>
                                        <option >좋아요순</option>
                                    </select>
                                </div>
                            </div>
                            <div className="course-container">
                                <CourseList></CourseList>
                            </div>
                            <footer className="course-footer">
                                <nav className="course-footer-page">
                                    <div className="course-footer-container">
                                        <ul className="course-footer-nav">
                                            <a href="" className="course-footer-num course-footer-selected">1</a>
                                            <a href="" className="course-footer-num">2</a>
                                            <a href="" className="course-footer-num">3</a>
                                            <a href="" className="course-footer-num">4</a>
                                            <a href="" className="course-footer-num">5</a>
                                            <a href="" className="course-footer-num">6</a>
                                            <a href="" className="course-footer-num">7</a>
                                            <a href="" className="course-footer-num">8</a>
                                            <a href="" className="course-footer-num">9</a>
                                            <a href="" className="course-footer-num">10</a>
                                            <a href="" className="course-footer-num">...</a>
                                            <a href="" className="course-footer-num">97</a>
                                        </ul>
                                        <a className="course-footer-next">다음 페이지</a>
                                    </div>
                                </nav>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export {Main}