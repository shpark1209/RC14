import React, { useEffect, useState } from "react";
import { Image } from "./Image";
import { GroupImage } from "./GroupImage";
import { NewCurationItem } from "./NewCurationItem";
import { CourseBack } from "./courseBack";
import { CourseFront } from "./courseFront";
import { Box } from "./Box";
import { FreeCourseList } from "./FreeCourseList";

const Main =()=>{

    return(
      <div id="main">
                <section>
                    <section className="upper-banner">
                        <div className="banner-container">
                            <div className="banner">
                                <a className="banner-link">
                                    <div className="banner-content" style={{backgroundColor: '#f4fdff'}}>
                                        <div className="container">
                                                <div className="banner-left">
                                                    <div className="banner_left_tag">
                                                        <div className="banner_left_tag_1" style={{color:'#ffffff', backgroundColor:'#02c4bd'}}>
                                                            30% 할인
                                                        </div>
                                                        <div className="banner_left_tag_2" style={{color:'#ffffff', backgroundColor:'#02c4bd'}}>
                                                            <span>D-2</span>
                                                        </div>
                                                    </div>
                                                    <h1 style={{color: '#0a5770', fontSize: '2em'}}>내공있는 개발자로 가는<span></span>
                                                        <br></br>최적의 경로 ⛳️</h1>
                                                    <p style={{color: '#0a5770', fontSize: '1em'}}>인프런 최초! 20만 수강생 기념</p>
                                                </div>   
                                                <div className="banner-right">
                                                    <Image src="https://cdn.inflearn.com/public/main_sliders/b1ebaa72-fda5-4b09-9427-eb3bdaafce55/%5B%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A6%E1%86%AB%E1%84%90%E1%85%B3%5D%E1%84%80%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB%E1%84%82%E1%85%B5%E1%86%B720%E1%84%86%E1%85%A1%E1%86%AB_main_521.png"></Image>
                                                </div> 
                                        </div> 
                                    </div>
                                        
                                </a>
                            </div>
                            <div className="swiper-container">
                                <div className="container">
                                    <div className="swiper-controller-container">
                                        <div className="swiper-controller-index">
                                            <span className="current-index">1</span>
                                            /
                                            <span className="total-count">17</span>
                                        </div>
                                        <div className="swiper-controller">
                                            <button className="previous_button">〈</button>
                                            <button className="stop_button">∥</button>
                                            <button className="next_button">〉</button>
                                        </div>
                                    </div>
                                    
                                    <div className="divider"></div>
                                    <div className="swiper-nav">
                                        <div className="swiper-nav-container">
                                            <span className="swiper-nav-content">수강생 20만</span>
                                            <span className="swiper-nav-content">3시간 완강 가능</span>
                                            <span className="swiper-nav-content">이력서작성이벤트</span>
                                            <span className="swiper-nav-content">3시간 완강 가능!</span>
                                            <span className="swiper-nav-content">FPS 게임 만들기</span>
                                            <span className="swiper-nav-content">게임듀오X인프랩</span>
                                            <span className="swiper-nav-content">왕초보 모여라</span>
                                            <span className="swiper-nav-content">로드맵</span>
                                            <span className="swiper-nav-content">강의 추천</span>
                                        </div>
                                    </div>
                                    <button className="swiper-nav-showall">〉</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="search">
                        <div className="container">
                            <div className="content">
                                <h1>인프런에서 가치를 높이세요</h1>
                                <div className="search_wrapper">
                                    <input className="search_input" type="text" placeholder="배우고 싶은 지식을 입력해보세요."></input>
                                    <button className="button">
                                        <span>🔍</span>
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </section>
                    <section className="new-curation">
                        <div style={{position:'relative'}}>
                            <div className="new-curation-list-wrapper"> 
                                <ul className="new-curation-list">
                                    
                                    <NewCurationItem src="https://cdn.inflearn.com/public/curation/byManage.png" desc="# 관리형 부트캠프"></NewCurationItem>
                                    <NewCurationItem src="https://cdn.inflearn.com/public/curation/_byMyself.png" desc="# 독학형 부트캠프"></NewCurationItem>
                                    <NewCurationItem src="https://cdn.inflearn.com/public/curation/spring.png" desc="# 스프링"></NewCurationItem>
                                    <NewCurationItem src="https://cdn.inflearn.com/public/curation/game.png" desc="# 게임개발"></NewCurationItem>
                                    <NewCurationItem src="https://cdn.inflearn.com/public/curation/ux-ui.png" desc="# UX UI"></NewCurationItem>
                                    <NewCurationItem src="https://cdn.inflearn.com/public/curation/work-skills.png" desc="# 코딩테스트"></NewCurationItem>
                                    <NewCurationItem src="https://cdn.inflearn.com/public/curation/dev-ops.png" desc="# 데브옵스"></NewCurationItem>
                                    <NewCurationItem src="https://cdn.inflearn.com/public/curation/front-end.png" desc="# 프론트엔드"></NewCurationItem>
                                    <NewCurationItem src="https://cdn.inflearn.com/public/curation/security.png" desc="# 보안"></NewCurationItem>
                                    <NewCurationItem src="https://cdn.inflearn.com/public/curation/marketing.png" desc="# 마케팅"></NewCurationItem>
                                    <NewCurationItem src="https://cdn.inflearn.com/public/curation/datascience.png" desc="# 데이터"></NewCurationItem>
                                </ul>
                                <button className="new-curation-next">〉</button>
                            </div>
                            
                        </div>
                    </section>
                    <section className="free-course">
                        <div>
                            <div className="free-course-header">
                                <div className="header">
                                    <a>
                                        <div className="title">
                                            무료강의? 오히려 좋아 ✨          〉
                                        </div>
                                        <div className="subtitle">
                                            무료 강의부터 가볍게 시작해 보세요.
                                        </div>
                                    </a>
                                    
                                </div>
                                
                                <div className="free-course_content">
                                    <div className="free-course-card">
                                        <div className="free-course-container">
                                            <FreeCourseList></FreeCourseList>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
        
                    </section>
                    <section className="group-section">
                        <h3>이미 많은 기업 구성원들이 인프런에서 성장하고 있어요.</h3>
                        <div className="group-image-wrapper">
                            <GroupImage src="https://cdn.inflearn.com/public/group_logo/0/c085de89-e640-4bc0-afad-efd1e96dbb58/%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB.png"></GroupImage>
                            <GroupImage src="https://cdn.inflearn.com/public/group_logo/0/0add4321-40e2-46db-9aac-3222b25a69c4/%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%A1%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A6%E1%84%83%E1%85%B3%E1%86%AF.png"></GroupImage>
                            <GroupImage src="https://cdn.inflearn.com/public/group_logo/0/34618dc7-2862-4db0-9bbc-631ca0c8f5b5/sk.png"></GroupImage>
                            <GroupImage src="https://cdn.inflearn.com/public/group_logo/0/1429748f-8c44-4941-8913-752071578eaf/%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A5.png"></GroupImage>
                            <GroupImage src="https://cdn.inflearn.com/public/group_logo/0/e7dd4c2a-8496-4708-b9fd-ae66317e40ad/%E1%84%82%E1%85%A6%E1%86%A8%E1%84%89%E1%85%B3%E1%86%AB.png"></GroupImage>
                            <GroupImage src="https://cdn.inflearn.com/public/group_logo/0/10b49bf2-cd9a-4501-ac3c-84059d04f171/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%A5%E1%86%BC.png"></GroupImage>
                            <GroupImage src="https://cdn.inflearn.com/public/group_logo/0/a041f2fa-7f40-4517-bdb7-822fc7800d80/%E1%84%8F%E1%85%A1%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A9.png"></GroupImage>
                            <GroupImage src="https://cdn.inflearn.com/public/group_logo/0/b47b4ead-5141-46ec-8003-81c6dbc2e5b7/LG.png"></GroupImage>
                            <GroupImage src="https://cdn.inflearn.com/public/group_logo/0/4aa479b9-4e05-4f8e-84b3-1fb7edb60c0c/nc.png"></GroupImage>
                        </div>
                    </section>
                    <section class="apply">
                        <div class="container">
                            <div class="header">
                                <h1 style={{fontWeight:700, color: '#1e1e1e', fontSize: '1.5rem', marginBottom: '10px'}}>다양한 서비스를 신청하세요</h1>
                                <div style={{fontWeight: 400, color: '#757575', fontSize: '0.9375rem'}}>
                                    인프런의 지식공유자 ˙비즈니스˙ 대학생 신청방법에<span></span> 대해 알아보세요.
                                </div>
                            </div>
                            <div class="content">
                                <div class="apply-container">
                                    <div class="apply-wrapper">
                                        <Box title='지식공유자 되기' subtitle1='9개월간 온라인 기술 강의로만 1억원!' subtitle2='나의 지식을 나눠 사람들에게 배움의 기회를 주고, 의미있는 대가를 가져가세요.' button='지식공유자 참여하기'></Box>
                                        <Box title='인프런 비즈니스 신청' subtitle1='모든 팀원의 인프런의 강의들을 자유롭게 학습하는 환경을 제공해주세요.' subtitle2='업무 스킬에 집중된 콘텐츠를 통해 최신 트렌드의 업무역량을 습득할 수 있습니다.' button='비즈니스 신청하기'></Box>
                                        <Box title='인프런 제휴' subtitle1='다양한 대학 및 기업과 연계된 인프런만의 혜택을 만나보세요.' subtitle2='여러분의 성장에 밑거름이 되어드릴 수 있는 여러 기회를 누릴 수 있습니다.' button='제휴 둘러보기'></Box>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
    );
  
}
export {Main}