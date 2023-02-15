import React from 'react'
import { MenuList } from "./MenuList";
const Footer =()=>{
    return(
        <footer className="footer">
            <div className="wrapper">
                <div className="footer-list">
                    <MenuList title='인프런' link1='인프런 소개' link2='인프런 피드' link3='수강평 모아보기'></MenuList>
                    <MenuList title='신청하기' link1='지식공유참여' link2='멘토링 소개' link3='인프런 비즈니스' link4='인프런 제휴'></MenuList>
                    <MenuList title='코드 등록' link1='수강코드 등록' link2='포인트코드 등록'></MenuList>
                    <MenuList title='고객센터' link1='공지사항' link2='자주묻는 질문' link3='저작권 신고센터' link4='수료증 확인' link5='강의 , 기능요청'></MenuList>
                    <MenuList title='인프랩' link1='인프랩 실Log' link2='인프랩 채용' link3='인프랩 스토리' link4='인프랩 테크'></MenuList>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <div className="footer-info-top">
                            <a><img style={{width:'16px'}} src="https://cdn.inflearn.com/dist/favicon.ico"></img></a>
                            <span>|</span>
                            <a>개인정보처리방침</a>
                            <span>|</span>
                            <a>이용약관</a>
                        </div>
                        <div className="footer-info-bottom">
                            <div className="footer-info-dropdown">
                                <span>(주)인프랩 | 대표자: 이형주 | 사업자번호: 499-81-00612</span>
                                <a className="footer-info-link">사업자 정보 확인</a>
                                <br></br>
                                <span>통신판매업: 2018-성남분당B-0062 | 개인정보보호책임자: 이동욱 | </span>
                                <a className="footer-info-link">이메일: info@inflearn.com</a>
                                <br></br>
                                <span>주소: 경기도 성남시 분당구 대왕판교로 660 유스페이스 1A동 405호</span>
                                <br></br>
                                <span>©INFLAB. ALL RIGHTS RESERVED</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-right">
                        <a>N</a>
                        <a>B</a>
                        <a>I</a>
                        <a>Y</a>
                        <a>f</a>
                        <a>T</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export {Footer};