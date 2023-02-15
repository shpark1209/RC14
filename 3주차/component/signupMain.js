import React from 'react'
import { Component, useEffect, useState } from "react";
import { WarningModal } from './WarningModal';
var ModalVersion;
let emailCheck=false;
let passwordCheck=false;
function CheckCondition(emailCheck, passwordCheck, corPassWord){
    
    if(emailCheck===false){
        ModalVersion=1;
    }
    else if(passwordCheck===false){
        
            ModalVersion=2
    }
    else if(document.getElementById("password-not-correct").style.display==="block"){
     
            ModalVersion=3
    }
    else{
        
            ModalVersion=4
        }
    
    console.log("main" +ModalVersion);       
        
}

const Main =()=>{
    const [email, setEmail]=useState("");
    const emailReg = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const [password, setPassword]=useState("");
    const [corPassWord, setcorPassWord]=useState("");
    const passwordReg =  /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{1,}$/;
    const samepwReg=/(\w)\1\1/;
    
    useEffect(()=>{
        emailCheck=emailReg.test(email);
        console.log(emailCheck);
        if(emailCheck===true){
            document.getElementsByClassName('email-error')[0].style.display="none";
            CheckCondition(emailCheck, passwordCheck, corPassWord);
        }
        CheckCondition(emailCheck, passwordCheck, corPassWord);
    }, [email])
    useEffect(()=>{
        passwordCheck=passwordReg.test(password);
        if(password!==""){
            if(passwordCheck===true){
                document.getElementById("password-error-1").style.color=" #00c471";
            }
            else{
                document.getElementById("password-error-1").style.color="#e5503c";
            }
            if(password.length>=8 && password.length<=32){
                document.getElementById("password-error-2").style.color=" #00c471";
            }
            else{
                document.getElementById("password-error-2").style.color="#e5503c";
            }
            if(samepwReg.test(password)===true){
                document.getElementById("password-error-3").style.color="#e5503c";
            }
            else{
                document.getElementById("password-error-3").style.color=" #00c471";
            }
            CheckCondition(emailCheck, passwordCheck, corPassWord);
        }
        CheckCondition(emailCheck, passwordCheck, corPassWord);
    }, [password])
    useEffect(()=>{
        if(corPassWord!=""){
            if(corPassWord!==password){
                document.getElementById("password-not-correct").style.display="block";
                document.getElementById("password-not-correct").style.color="#e5503c";
            }
            else{
                document.getElementById("password-not-correct").style.display="none";
                document.getElementById("password-not-correct").style.color="#abb0b5";
            }
            CheckCondition(emailCheck, passwordCheck, corPassWord);
        }
        CheckCondition(emailCheck, passwordCheck, corPassWord);
    }, [corPassWord])
    
    return(
        <section className="signup-section">
            <h2>회원가입</h2>
            <div className="signup-desc">인프런에서 가치를 높이세요</div>
            <div className="signup-main">
                <form className="signup-form">
                    <div className="form-input-block">
                        <label className="form-label">이메일</label>
                        <input id="email" placeholder="example@inflab.com" onChange={(e)=>{setEmail(e.target.value);}} onFocus={()=>{document.getElementsByClassName("email-error")[0].style.display='block';}}></input>
                        <span className="email-error">이메일 형식이 올바르지 않습니다.</span>
                    </div>
                    <div className="form-input-block">
                        <label className="form-label">비밀번호</label>
                        <input id="password" type="password" placeholder="******" onChange={(e)=>setPassword(e.target.value)} onFocus={()=>{document.getElementById('password-error-wrapper').style.display='flex';}}></input>
                        <p id="password-error-wrapper">
                            <span id="password-error-1">영문/숫자/특수문자 2가지 이상 포함</span>
                            <span id="password-error-2">8자 이상 32자 이하 입력 (공백 제외)</span>
                            <span id="password-error-3">연속 3자 이상 동일한 문자/숫자 제외</span>
                        </p>
                    </div>
                    <div className="form-input-block">
                        <label className="form-label">비밀번호 확인</label>
                        <input id="password-correct" type="password" placeholder="******" onChange={(e)=>setcorPassWord(e.target.value)}></input>
                        <span id="password-not-correct">비밀번호가 일치하지 않습니다.</span>
                    </div>
                    <button className="signup-button" onClick={()=>{document.getElementsByClassName("warning-modal")[0].style.display="flex";}}>가입하기</button>
                    <div className="form-footer">
                        <span className="footer-policy">
                            <span>
                                가입 시, 통합 계정으로 인프랩이 제공하는 서비스를 모두 이용하실 수 있습니다.
                                <a className="footer-link">통합 계정</a> 및 서비스 이용약관 ( <a className="footer-link">인프런</a> / <a className="footer-link">랠릿</a>), <a className="footer-link">개인정보처리방침</a>에 동의합니다.
                            </span>
                        </span>
                        <div className="footer-allow">
                            <input type="checkbox"></input>
                            <label className="footer-allow-desc">통합회원 할인 혜택 및 유용한 채용 소식을 받아볼래요.</label>
                        </div>
                    </div>
                </form>
                <div className="signup-social">
                    <hr className="social-divide"></hr>
                    <span className="social-title">간편 회원가입</span>
                    <div className="social-signup-button">
                        <button className="social-button kakao">K</button>
                        <button className="social-button google">G</button>
                    </div>
                </div>
            </div>
            {ModalVersion===1 && <WarningModal warningTitle="회원가입에 실패했습니다!" warningDesc="이메일 양식이 올바르지 않습니다."></WarningModal>}
            {ModalVersion===2 && <WarningModal warningTitle="회원가입에 실패했습니다!" warningDesc="비밀번호 양식이 올바르지 않습니다."></WarningModal>}
            {ModalVersion===3 && <WarningModal warningTitle="회원가입에 실패했습니다!" warningDesc="비밀번호가 같지 않습니다."></WarningModal>}
            {ModalVersion===4 && <WarningModal warningTitle="회원가입에 성공했습니다!" warningDesc="환영합니다."></WarningModal>}
        </section>
    );
}
export {Main, ModalVersion};