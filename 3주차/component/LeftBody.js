import React from "react";
import { AccordionContent } from "./AccordionContent";
const LeftBody =()=>{

    return(
        <div className="content-left">
            <div className="left-container">
                <div className="mentor-search">
                    <input className="mentor-search-input"></input>
                    <button className="mentor-search-button">검색</button>
                </div>
                <div className="mentor-select">
                    <select className="mentor-select-option">
                        <option selected>기본순</option>
                        <option >최근신청순</option>
                        <option >신규멘토순</option>
                        <option >인기순</option>
                    </select>
                </div>
                <nav className="mentor-category">
                    <div className="mentor-accordion">
                        <div className="accordion-header">
                            분야별 {'>'}
                        </div>
                        <div className="accordion-nav">
                            <AccordionContent desc="개발 · 프로그래밍" num="1"></AccordionContent>
                            <AccordionContent desc="보안 · 네트워크" num="2"></AccordionContent>
                            <AccordionContent desc="데이터 사이언스" num="3"></AccordionContent>
                            <AccordionContent desc="게임 개발" num="4"></AccordionContent>
                            <AccordionContent desc="크리에이티브" num="5"></AccordionContent>
                            <AccordionContent desc="직무 · 마케팅" num="6"></AccordionContent>
                            <AccordionContent desc="학문 · 외국어" num="7"></AccordionContent>
                            <AccordionContent desc="커리어" num="8"></AccordionContent>
                            <AccordionContent desc="교양" num="9"></AccordionContent>
                        </div>
                    </div>
                </nav>
                <a className="mentor-filter" onClick={FilterReset}>
                    필터 초기화
                </a>
            </div>
            
        </div>
    );
    function FilterReset(){
        var AccordionCheckBox=document.getElementsByClassName("accordion-checkbox");
        for(var i=0;i<AccordionCheckBox.length;i++){
            AccordionCheckBox[i].checked=false;
        }
    }

}
export {LeftBody}