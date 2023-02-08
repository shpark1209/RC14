import { Component } from "react";
import "./main.css"

class InflearnSection extends Component{
    render(){
      return(
        <section className="inflab-integrated">
                  <header>
                      <div className="inflab-integrated_container">
                          <ul className="inflab-integrated_service">
                              <li>
                                  <a >
                                      <Image class="inflab-integrated_image" src="https://cdn.inflearn.com/dist/favicon.ico"></Image>
                                      교육
                                  </a>
                              </li>
                              <li>
                                  <a>
                                      <Image class="inflab-integrated_image" src="https://cdn.inflearn.com/dist/favicon.ico"></Image>
                                      채용
                                  </a>
                              </li>
                          </ul>
                          <ul className="inflab-integrated_links-right">
                              <li>
                                  <a>
                                      지식공유 참여
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </header>
              </section>
      );
    }
  }
  class Header extends Component{
    render(){
      return(
        <div id="header">
                  <nav className="navbar">
                      <div className="container">
                          <div className="content">
                              <div className="brand">
                                  <a>
                                      <Image class="brand_image" src="https://www.inflearn.com/icon-192x192.png"></Image>
                                  </a>
                              </div>
                              <div className="navbar-container">
                                  <div className="navbar-left">
                                      <NavItem desc="강의"></NavItem>
                                      <NavItem desc="로드맵"></NavItem>
                                      <NavItem desc="멘토링"></NavItem>
                                      <NavItem desc="커뮤니티"></NavItem>
                                      <NavItem desc="인프런"></NavItem>
                                      
                                  </div>
                                <div className="navbar-right">
                                      <div className="navbar-search navbar-item">
                                          <input type="text" class="navbar-search_input"></input>
                                          <span className="navbar-search_icon">🔍</span>
                                      </div>
                                      <div className="navbar-button navbar-item">
                                          <a className="button login navbar-item">로그인</a>
                                          <a className="button signup navbar-item">회원가입</a>
                                      </div>
                                </div>   
                              </div>
                          </div>
                        </div>
                      </nav>
                  </div>
      );
    }
  }
  
  class Main extends Component{
    render(){
      return(
        <div id="main">
                  <section>
                      <section className="upper-banner">
                          <div className="banner-container">
                              <div className="banner">
                                  <a className="banner-link">
                                      <div className="banner-content" style={{backgroundColor: '#f4fdff'}}>
                                          <div className="container">
                                                  <div className="banner-right">
                                                      <Image src="https://cdn.inflearn.com/public/main_sliders/b1ebaa72-fda5-4b09-9427-eb3bdaafce55/%5B%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A6%E1%86%AB%E1%84%90%E1%85%B3%5D%E1%84%80%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB%E1%84%82%E1%85%B5%E1%86%B720%E1%84%86%E1%85%A1%E1%86%AB_main_521.png"></Image>
                                                  </div>
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
                                              <div className="free-course-wrapper">
                                                  <div className="free-course-list-wrapper">
                                                      <CourseFront src="https://cdn.inflearn.com/public/courses/325630/cover/56f635a3-3a44-4096-a16b-453ea1696b1a/325630-eng.png" title="스프링 입문 - 코드로 배우는 스프링부트, 웹 MVC, DB 접근 기술" instruct="김영한" rating="⭐ ⭐ ⭐ ⭐ ⭐" ratingNum='4778' tagNum='+65700명' tagUpdate='업데이트'></CourseFront>
                                                      <CourseBack title="스프링 입문 - 코드로 배우는 스프링부트, 웹 MVC, DB 접근 기술" level='초급' category='백엔드, 웹 개발' skill='Java, Spring, MVC'></CourseBack>
                                                  </div>
                                                  <div class="free-course-list-wrapper">
                                                      <CourseFront src="https://cdn.inflearn.com/public/courses/330264/cover/5d40d110-c372-42ef-ad06-fe01257225cc/330264-eng.png" title="실전! 스프링부트 상품-주문 API 개발로 알아보는 TDD" instruct="이중석" rating="⭐ ⭐ ⭐ ⭐ ⭐" ratingNum='8' tagNum='+500명' tagUpdate='새강의'></CourseFront>
                                                      <CourseBack title="스프링 입문 - 코드로 배우는 스프링부트, 웹 MVC, DB 접근 기술" level='초급' category='백엔드, 웹 개발' skill='Java, Spring, MVC'></CourseBack>
                                                  </div>
                                                  <div class="free-course-list-wrapper">
                                                      <CourseFront src="https://cdn.inflearn.com/public/courses/329211/cover/ea485515-6665-4e5c-acd7-157c2b8b08f3/infcon-apply-main.png" title="인프콘 2022 다시보기" instruct="인프런" rating="⭐ ⭐ ⭐ ⭐ ⭐" ratingNum='28' tagNum='+14000명'></CourseFront>
                                                      <CourseBack title="스프링 입문 - 코드로 배우는 스프링부트, 웹 MVC, DB 접근 기술" level='초급' category='백엔드, 웹 개발' skill='Java, Spring, MVC'></CourseBack>
                                                  </div>
                                                  <div class="free-course-list-wrapper">
                                                      <CourseFront src="https://cdn.inflearn.com/public/courses/328866/cover/174035a3-ca6b-48cd-b122-c88df540cb04/처음_만난_리액트_v2_cover_inflearn.png" title="처음 만난 리액트(React)" instruct="Inje Lee(소플)" rating="⭐ ⭐ ⭐ ⭐ ⭐" ratingNum='104' tagNum='+5100명'></CourseFront>
                                                      <CourseBack title="스프링 입문 - 코드로 배우는 스프링부트, 웹 MVC, DB 접근 기술" level='초급' category='백엔드, 웹 개발' skill='Java, Spring, MVC'></CourseBack>
                                                  </div>
                                                  <div class="free-course-list-wrapper">
                                                      <CourseFront src="https://cdn.inflearn.com/public/courses/328577/cover/d7cd62c2-db07-45d8-af8d-a3fa728cd8e7/inflearn-logo.jpg" title="[코드팩토리] [입문] Dart 언어 4시간만에 완전정복" instruct="코드팩토리" rating="⭐ ⭐ ⭐ ⭐ ⭐" ratingNum='285' tagNum='+3700명'></CourseFront>
                                                      <CourseBack title="[코드팩토리] [입문] Dart 언어 4시간만에 완전정복" level='입문' category='프로그래밍 언어, 모바일 앱 개발' skill='Flutter, 객체지향, 함수형 프로그래밍'></CourseBack>
                                                  </div>
                                                  <button className="free-course-button">〉</button>
                                              </div>
                                              
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
  }
  
  class Footer extends Component{
      render(){
          return(
              <footer class="footer">
                  <div class="wrapper">
                      <div class="footer-list">
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
  }
  
  class FixedLogo extends Component{
      render(){
          return(
              <div className="fixed-logo">
                  <div className="fixed-logo-container">
                      <div className="fixed-logo-wrapper">
                          <img style={{width: '157px', height:'74px'}} src="https://cf.channel.io/file/4627/5e6a5d75a92dc24b92e4/deskimage-d800cd849d6339739fcda00ca21eadb9"></img>
                      </div>
                  </div>
              </div>
          );
      }
  }
  
  class MenuList extends Component{
      render(){
          return(
              <div className="menu-list">
                              <div className="list-title">{this.props.title}</div>
                              <div className="sub-menu">
                                  <a className="sub-menu-link">{this.props.link1}</a>
                                  <a className="sub-menu-link">{this.props.link2}</a>
                                  <a className="sub-menu-link">{this.props.link3}</a>
                                  <a className="sub-menu-link">{this.props.link4}</a>
                                  <a className="sub-menu-link">{this.props.link5}</a>
                              </div>
                          </div>
          );
      }
  }
  
  class Image extends Component{
    render(){
      return(
  
          <img className={this.props.class} src={this.props.src}></img>
  
      );
    }
  }
  
  class GroupImage extends Component{
      render(){
          return(
              <div className="group-image">
                                  <img src={this.props.src}></img>
                              </div>
          );
      }
  }
  
  class NewCurationItem extends Component{
      render(){
          return (
              <li className="new-curation-list-item">
                                          <section className="new-curation-card">
                                              <a className="new-curation-card-link">
                                                  <img className="new-curation-card-image" src={this.props.src}></img>
                                                  <div className="new-curation-card-wrapper">
                                                      <p className="new-curation-card-title">{this.props.desc}</p>
                                                  </div>
                                              </a>
                                          </section>
                                      </li>
          );
      }
  }
  
  class NavItem extends Component{
    render(){
      return(
        <div className="navbar-item">
          <a className="navbar-item">{this.props.desc}</a>
        </div>
      );
    }
  }
  
  class CourseFront extends Component{
      render(){
          return(
              <a class="course-front" onMouseOver={listener}>
                                                          <div className="free-course-list-image">
                                                              <img src={this.props.src}></img>
                                                          </div>
                                                          <div className="free-course-list-content">
                                                              <div className="free-course-title">
                                                                  {this.props.title}
                                                              </div>
                                                              <div className="instructor">{this.props.instruct}</div>
                                                              <div className="rating">  {this.props.rating}<span style={{fontSize: '5px'}}>({this.props.ratingNum})</span></div>
                                                              <div className="price">{this.props.price}</div>
                                                              <div className="free-course-tag">
                                                                  {this.props.tagNum!=null && <span className="tag" style={{backgroundColor: 'hsl(321,63%,90%)' }}>{this.props.tagNum}</span>}
                                                                  {this.props.tagUpdate!=null && <span className="tag" style={{backgroundColor: 'hsl(182,75%,94%)'}}>{this.props.tagUpdate}</span>}
                                                              </div>
                                                          </div>
                                                      </a>
          );
      }
  }
  
  class CourseBack extends Component{
      render(){
          return(
              <div className="course-back">
                                                          <a>
                                                              <p className="course-back-title">{this.props.title}</p>
                                                              <div className="course-level"><span>{this.props.level}</span></div>
                                                              <div className="course-category">
                                                                  <span>{this.props.category}</span>
                                                                </div>
                                                              <div className="course-skill">
                                                                  <span>{this.props.skill}</span>
                                                                </div>
                                                          </a>
                                                      </div>
          );
      }
  }
  
  class Box extends Component{
      render(){
          return (
              <div className="box">
                                              <h2 className="box-title">{this.props.title}</h2>
                                              <div className="box-subtitle">
                                                  {this.props.subtitle1}
                                                      <span></span>
                                                  {this.props.subtitle2}
                                              </div>
                                              <a href="" className="box-button">
                                                  <span>{this.props.button}</span>
                                                  <span>→</span>
                                              </a>
                                          </div>
          );
      }
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

  export {InflearnSection, Header, Main, Footer, FixedLogo}; 