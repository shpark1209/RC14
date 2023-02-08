import "./lecture.css"
import { Component } from "react";

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
                                    <div className="course-card-wrapper">
                                        <div className="course-card">
                                            <div class="course-card-content">
                                                <CourseFront del='false' tag1="+2200명" price="₩22,000" ratingNum="33" rating="⭐⭐⭐⭐⭐" instruct="코드캠프" title="[인프런x코드캠프] 훈훈한 Javascript" src="https://cdn.inflearn.com/public/courses/329922/cover/364e7406-3569-437b-b719-7f146cad3d60/thumbnail-js.png"></CourseFront>
                                                <CourseBack title="스프링 입문 - 코드로 배우는 스프링부트, 웹 MVC, DB 접근 기술" level="초급" category="백엔드, 웹 개발" skill="Java, Spring, MVC"></CourseBack>
                                            </div>    
                                        </div>
                                        <div class="course-card">
                                            <div class="course-card-content">
                                                <CourseFront del='false' price="₩22,000" ratingNum="43" rating="⭐⭐⭐⭐⭐" instruct="코드캠프" title="[인프런x코드캠프] 시작은 프리캠프" src="https://cdn.inflearn.com/public/courses/329913/cover/eee923cc-911b-4c2d-a445-9fddee8e5992/thumbnail-precamp.png"></CourseFront>
                                                <CourseBack title="스프링 입문 - 코드로 배우는 스프링부트, 웹 MVC, DB 접근 기술" level="초급" category="백엔드, 웹 개발" skill="Java, Spring, MVC"></CourseBack>
                                            </div>
                                            
                                        </div>
                                        <div class="course-card">
                                            <div class="course-card-content">
                                                <CourseFront delPrice="₩55,000" del='true' tag3="할인중" tag2="업데이트" tag1="+600명" price="₩41,250" ratingNum="6" rating="⭐⭐⭐⭐⭐" instruct="얄팍한 코딩사전" title="제대로 파는 자바스크립트(JavaScript) - by 얄코" src="https://cdn.inflearn.com/public/courses/329755/cover/6fc3f9be-8cc1-42a3-8b6a-b34d91352df2/JavaScript--IFL.png"></CourseFront>
                                                <CourseBack title="스프링 입문 - 코드로 배우는 스프링부트, 웹 MVC, DB 접근 기술" level="초급" category="백엔드, 웹 개발" skill="Java, Spring, MVC"></CourseBack>
                                                
                                                
                                            </div>
                                            
                                        </div>
                                        <div class="course-card">
                                            <div class="course-card-content">
                                                <CourseFront tag1='+3600명' del='false' price="₩66,000" ratingNum="150" rating="⭐⭐⭐⭐⭐" instruct="김태원" title="자바스크립트 알고리즘 문제풀이 입문(코딩테스트 대비)" src="https://cdn.inflearn.com/public/courses/326377/cover/f0f0b7b0-a4f1-4ca4-b609-c026c7d5bd20/js_algorithm_best.png"></CourseFront>
                                                <CourseBack title="스프링 입문 - 코드로 배우는 스프링부트, 웹 MVC, DB 접근 기술" level="초급" category="백엔드, 웹 개발" skill="Java, Spring, MVC"></CourseBack>
                                                
                                            </div>
                                            
                                        </div>
                                        <div class="course-card">
                                            <div class="course-card-content">
                                                
                                                <CourseFront  tag1='+900명' del='false' price="₩77,000" ratingNum="37" rating="⭐⭐⭐⭐⭐" instruct="널널한 개발자" title="외워서 끝내는 네트워크 핵심이론 - 기초" src="https://cdn.inflearn.com/public/courses/329534/cover/76d5fd7f-3e76-4801-bb8f-523d10ff5829/329534-eng.jpg"></CourseFront>
                                                <CourseBack title="스프링 입문 - 코드로 배우는 스프링부트, 웹 MVC, DB 접근 기술" level="초급" category="백엔드, 웹 개발" skill="Java, Spring, MVC"></CourseBack>
                                                    
                                            </div>
                                            
                                        </div>
                                        <div class="course-card">
                                            <div class="course-card-content">
                                                <CourseFront  tag1='+100명' del='false' price="₩55,000" ratingNum="5" rating="⭐⭐⭐⭐⭐" instruct="존버매니아" title="CAN 통신 - 자동차 신입이 알아야 할 모든 것" src="https://cdn.inflearn.com/public/courses/329480/cover/dc203b59-e468-4cda-9368-d72794c1213e/329480-eng.jpg"></CourseFront>
                                                <CourseBack title="스프링 입문 - 코드로 배우는 스프링부트, 웹 MVC, DB 접근 기술" level="초급" category="백엔드, 웹 개발" skill="Java, Spring, MVC"></CourseBack>
                                            </div>
                                            
                                        </div>
                                        <div class="course-card">
                                            <div class="course-card-content">
                                                <CourseFront  tag1='+400명' del='false' price="₩99,000" ratingNum="15" rating="⭐⭐⭐⭐⭐" instruct="권철민" title="카프카 완벽 가이드 - 코어편" src="https://cdn.inflearn.com/public/courses/329398/cover/5e613ac4-cfe3-4a97-ac6d-929d9cd49647/329398-eng.jpg"></CourseFront>
                                                <CourseBack title="스프링 입문 - 코드로 배우는 스프링부트, 웹 MVC, DB 접근 기술" level="초급" category="백엔드, 웹 개발" skill="Java, Spring, MVC"></CourseBack>
                                            </div>
                                            
                                        </div>
                                        <div class="course-card">
                                            <div class="course-card-content">
                                                <CourseFront  tag1='+200명' del='false' price="₩55,000" ratingNum="7" rating="⭐⭐⭐⭐⭐" instruct="Rookiss" title="[입문자를 위한 UE5] Part3. 언리얼 엔진 3D 게임 개발 입문" src="https://cdn.inflearn.com/public/courses/329328/cover/e7e1af16-f2d9-4c23-9447-49039b837813/329328-eng.jpg"></CourseFront>
                                                <CourseBack title="스프링 입문 - 코드로 배우는 스프링부트, 웹 MVC, DB 접근 기술" level="초급" category="백엔드, 웹 개발" skill="Java, Spring, MVC"></CourseBack>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <footer class="course-footer">
                                    <nav class="course-footer-page">
                                        <div class="course-footer-container">
                                            <ul class="course-footer-nav">
                                                <a href="" class="course-footer-num course-footer-selected">1</a>
                                                <a href="" class="course-footer-num">2</a>
                                                <a href="" class="course-footer-num">3</a>
                                                <a href="" class="course-footer-num">4</a>
                                                <a href="" class="course-footer-num">5</a>
                                                <a href="" class="course-footer-num">6</a>
                                                <a href="" class="course-footer-num">7</a>
                                                <a href="" class="course-footer-num">8</a>
                                                <a href="" class="course-footer-num">9</a>
                                                <a href="" class="course-footer-num">10</a>
                                                <a href="" class="course-footer-num">...</a>
                                                <a href="" class="course-footer-num">97</a>
                                            </ul>
                                            <a class="course-footer-next">다음 페이지</a>
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

class NavItem extends Component{
    render(){
      return(
        <div className="navbar-item">
          <a className="navbar-item">{this.props.desc}</a>
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

class CourseContent extends Component{
    render(){
        return(
            <div className="course-content">
                                    <a>{this.props.content}   {'>'}</a>
                                </div>
        );
    }
}

class Button extends Component{
    render(){
        return(
            <button class={this.props.class}>
                                            {this.props.content}
                                        </button>
        );
    }
}

class CourseFront extends Component{
    render(){
        return(
            <a className="course-front" onMouseOver={listener}>
                <div className="card-image">
                    <Image src={this.props.src}></Image>
                </div>
                <div className="card-content">
                    <div className="course-title">{this.props.title}</div>
                    <div className="instructor">{this.props.instruct}</div>
                    <div className="rating">{this.props.rating}<span style={{fontSize: '5px', color: '#4a4a4a'}}>({this.props.ratingNum})</span></div>
                    <div className="price">{this.props.del==='true' && <del>{this.props.delPrice}</del>}{this.props.price}</div>
                    <div className="lecture-tag">
                        {this.props.tag1!=null && <span className="tag" style={{backgroundColor: 'hsl(321,63%,90%)'}}>{this.props.tag1}</span>}
                        {this.props.tag2!=null && <span className="tag" style={{backgroundColor: 'hsl(182,75%,94%)'}}>{this.props.tag2}</span>}
                        {this.props.tag3!=null && <span className="tag" style={{backgroundColor: 'hsl(1,100%,89%)'}}>{this.props.tag3}</span>}
                    </div>                         
                </div>
            </a>
        );
    }
}    

class CourseBack extends Component{
    render(){
        return(
            <div class="course-back">
                                                    <a>
                                                        <p class="course-back-title">{this.props.title}</p>
                                                        <div class="course-level"><span>{this.props.level}</span></div>
                                                        <div class="course-category">
                                                            <span>{this.props.category}</span>
                                                          </div>
                                                        <div class="course-back-skill">
                                                            <span>{this.props.skill}</span>
                                                          </div>
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
export{ InflearnSection, Header, Main, Footer, FixedLogo};