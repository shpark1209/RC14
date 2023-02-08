import { Component } from "react";
import "./signup.css"
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
            <section class="signup-section">
                <h2>회원가입</h2>
                <div class="signup-desc">인프런에서 가치를 높이세요</div>
                <div class="signup-main">
                    <form class="signup-form">
                        <div class="form-input-block">
                            <label class="form-label">이메일</label>
                            <input id="email" placeholder="example@inflab.com"></input>
                        </div>
                        <div class="form-input-block">
                            <label class="form-label">비밀번호</label>
                            <input id="password" placeholder="******"></input>
                        </div>
                        <div class="form-input-block">
                            <label class="form-label">비밀번호 확인</label>
                            <input id="password-correct" placeholder="******"></input>
                        </div>
                        <button class="signup-button">가입하기</button>
                        <div class="form-footer">
                            <span class="footer-policy">
                                <span>
                                    가입 시, 통합 계정으로 인프랩이 제공하는 서비스를 모두 이용하실 수 있습니다.
                                    <a class="footer-link">통합 계정</a> 및 서비스 이용약관 ( <a class="footer-link">인프런</a> / <a class="footer-link">랠릿</a>), <a class="footer-link">개인정보처리방침</a>에 동의합니다.
                                </span>
                            </span>
                            <div class="footer-allow">
                                <input type="checkbox"></input>
                                <label class="footer-allow-desc">통합회원 할인 혜택 및 유용한 채용 소식을 받아볼래요.</label>
                            </div>
                        </div>
                    </form>
                    <div class="signup-social">
                        <hr class="social-divide"></hr>
                        <span class="social-title">간편 회원가입</span>
                        <div class="social-signup-button">
                            <button class="social-button kakao">K</button>
                            <button class="social-button google">G</button>
                        </div>
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
  export{ InflearnSection, Header, Main, Footer, FixedLogo};