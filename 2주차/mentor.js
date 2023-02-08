import "./mentor.css"
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
            <section className="mentor-list-section">
                <MentorBanner></MentorBanner>
                <div className="container">
                    <div className="content-body">
                        <LeftBody></LeftBody>
                        <RightBody></RightBody>
                    </div>
                </div>
            </section>
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

class MentorBanner extends Component{
    render(){
        return(
            <header className="mentor-list-banner">
                <a>
                    <div className="mentor-banner-container">
                        <div className="mentor-banner"></div>
                        <h1 className="mentor-banner-header">멘토링</h1>
                        <p className="mentor-banner-desc">   
                            업계 선배들 혹은 동료들과 인사이트를 나눠 보세요.
                            <br></br>
                            더 빨리, 더 멀리 갈 수 있어요.
                        </p>
                        <span className="mentor-banner-link">
                            멘토 지원하기
                            <span className="mentor-banner-arrow">→</span>
                        </span>
                    </div>

                </a>
            </header>
        );
    }
}
class LeftBody extends Component{
    render(){
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
                    <a className="mentor-filter">
                        필터 초기화
                    </a>
                </div>
                
            </div>
        );
    }
}

class AccordionContent extends Component{
    render(){
        return(
            <div className="accordion-content">
                <div className="accordion-wrapper">
                    <input id={this.props.num} className="accordion-checkbox" type={"checkbox"}></input>
                    <label for={this.props.num} className="accordion-desc">{this.props.desc}</label>
                </div>
            </div>
        );
    }
}

class RightBody extends Component{
    render(){
        return(
            <div className="content-right">
                <div className="right-container">
                    <div className="mentor-card">
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/36294/c14ef375-cddf-4d75-82d9-055109c79eb6" title="신입~주니어 개발자 취직, 이력서&프론트엔드 상담 및 고민, 커리어 및 로드맵 설계" header1="직무" content1="프론트엔드/웹퍼블리셔" header2="경력" content2="미들 (4~8년)" rating="5.0" name="장현석"></MentorCard>
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/1044033/d3a5c784-c97b-4879-a97f-6a0fc06ebf13" title="NLP+AI 분야 커리어 컨설팅 / 논문 함께 읽기" header1="직무" content1="데이터 사이언티스트" header2="경력" content2="Lead 레벨" header3="현직" content3="네이버" rating="5.0" name="Jaewook Kang"></MentorCard>
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/105536/6bc90553-bfdd-4905-ba9c-4d8b02fb96d9" title="백엔드 엔지니어 커리어 멘토링/코드리뷰/이력서 첨삭" header1="직무" content1="백엔드/서버 개발자" header2="경력" content2="미들 (4~8년)" header3="현직" content3="카카오페이" rating="5.0" name="Sun"></MentorCard>
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/117609/09c882a3-a8af-4f14-a19b-9a81256c39d0" title="back-end 신입/주니어 개발자 서비스 회사 취업설계 | 이직 | 기술 면접 상담" header1="직무" content1="백엔드/서버 개발자" header2="경력" content2="미들 (4~8년)" header3="현직" content3="네카라중 한곳" rating="5.0" name="incu"></MentorCard>
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/1115642/0ba80207-ceb2-4356-8761-2b3cecc3b694" title="백엔드 개발자 이직/취업" header1="직무" content1="백엔드/서버 개발자" header2="경력" content2="Lead 레벨" header3="현직" content3="스타트업" rating="none" name="케인"></MentorCard>
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/209928/a46703da-f0ba-4403-abd6-b8f5c1473652" title="개발자로서 커리어 혹은 DevOps기술" header1="" content1="" header2="" content2="" header3="" content3="" rating="5.0" name="subicura"></MentorCard>
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/199520/ed9c8718-ef2a-4ef0-812c-c85627bb2a1b" title="백엔드 개발자의 성장을 위한 멘토링 & 코드 리뷰" header1="직무" content1="백엔드/서버 개발자" header2="경력" content2="미들 (4~8년)" header3="현직" content3="컬리페이" rating="5.0" name="Byung Hyun Choi"></MentorCard>
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/581610/9946f92b-216b-400c-8c1f-e9029139a871" title="비전공자의 1년만에 네카라쿠배 합격방법" header1="직무" content1="백엔드/서버 개발자" header2="경력" content2="미들 (4~8년)" header3="현직" content3="네카라쿠배" rating="5.0" name="최연찬"></MentorCard>
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/1115642/0ba80207-ceb2-4356-8761-2b3cecc3b694" title="백엔드 개발자 이직/취업" header1="직무" content1="백엔드/서버 개발자" header2="경력" content2="Lead 레벨" header3="현직" content3="스타트업" rating="none" name="케인"></MentorCard>
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/209928/a46703da-f0ba-4403-abd6-b8f5c1473652" title="개발자로서 커리어 혹은 DevOps기술" header1="" content1="" header2="" content2="" header3="" content3="" rating="5.0" name="subicura"></MentorCard>
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/199520/ed9c8718-ef2a-4ef0-812c-c85627bb2a1b" title="백엔드 개발자의 성장을 위한 멘토링 & 코드 리뷰" header1="직무" content1="백엔드/서버 개발자" header2="경력" content2="미들 (4~8년)" header3="현직" content3="컬리페이" rating="5.0" name="Byung Hyun Choi"></MentorCard>
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/581610/9946f92b-216b-400c-8c1f-e9029139a871" title="비전공자의 1년만에 네카라쿠배 합격방법" header1="직무" content1="백엔드/서버 개발자" header2="경력" content2="미들 (4~8년)" header3="현직" content3="네카라쿠배" rating="5.0" name="최연찬"></MentorCard>
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/1115642/0ba80207-ceb2-4356-8761-2b3cecc3b694" title="백엔드 개발자 이직/취업" header1="직무" content1="백엔드/서버 개발자" header2="경력" content2="Lead 레벨" header3="현직" content3="스타트업" rating="none" name="케인"></MentorCard>
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/209928/a46703da-f0ba-4403-abd6-b8f5c1473652" title="개발자로서 커리어 혹은 DevOps기술" header1="" content1="" header2="" content2="" header3="" content3="" rating="5.0" name="subicura"></MentorCard>
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/199520/ed9c8718-ef2a-4ef0-812c-c85627bb2a1b" title="백엔드 개발자의 성장을 위한 멘토링 & 코드 리뷰" header1="직무" content1="백엔드/서버 개발자" header2="경력" content2="미들 (4~8년)" header3="현직" content3="컬리페이" rating="5.0" name="Byung Hyun Choi"></MentorCard>
                        <MentorCard src="https://cdn.inflearn.com/public/users/thumbnails/581610/9946f92b-216b-400c-8c1f-e9029139a871" title="비전공자의 1년만에 네카라쿠배 합격방법" header1="직무" content1="백엔드/서버 개발자" header2="경력" content2="미들 (4~8년)" header3="현직" content3="네카라쿠배" rating="5.0" name="최연찬"></MentorCard>
                    </div>
                    <nav className="mentor-index">
                        <ul className="mentor-pages">
                            <li>
                                <button className="mentor-page-button selected">1</button>
                            </li>
                            <li>
                                <button className="mentor-page-button">2</button>
                            </li>
                            <li>
                                <button className="mentor-page-button">3</button>
                            </li>
                            <li>
                                <button className="mentor-page-button">4</button>
                            </li>
                            <li>
                                <button className="mentor-page-button">5</button>
                            </li>
                            <li>
                                <button className="mentor-page-button">...</button>
                            </li>
                            <li>
                                <button className="mentor-page-button">8</button>
                            </li>
                            <li>
                                <button className="mentor-page-button">다음</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
class MentorCard extends Component{
    render(){
        return(
            <section className="mentor-card-wrapper">
                <div className="mentor-card-top">
                    <h3 className="mentor-card-title">{this.props.title}</h3>
                    <div className="mentor-job-wrapper">
                        <div className="mentor-card-desc">
                            <div>
                                <dt>{this.props.header1}</dt>
                                <dd>{this.props.content1}</dd>
                            </div>
                            <div>
                                <dt>{this.props.header2}</dt>
                                <dd>{this.props.content2}</dd>
                            </div>
                            <div>
                                <dt>{this.props.header3}</dt>
                                <dd>{this.props.content3}</dd>
                            </div>
                        </div>
                        <div className="mentor-card-thumbnail">
                            <img src={this.props.src}></img>
                        </div>
                    </div>
                </div>
                <div className="mentor-card-bottom">
                    <div>
                        <a className="mentor-name">{this.props.name}</a>
                        {this.props.rating!=='none' && <button className="mentor-rating-button">
                            <span>⭐</span>
                            <span>{this.props.rating}</span>
                            {'>'}
                        </button>}
                        
                    </div>
                </div>
            </section>
        );
    }
}


export {InflearnSection, Header, Main, Footer, FixedLogo};