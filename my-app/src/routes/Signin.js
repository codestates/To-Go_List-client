import React from "react";
import './Signin.css'
import { Link } from "react-router-dom"

function Signin(){
    return (
        <div className="signin_page">
            <div className="signin_frame">
                <div className="login_logo">
                    <Link to='/' className="signup_link">
                        <img className="signin_page_logo" src="http://penzim.synology.me/image/To-Go_List-logo-black.png" />
                    </Link>
                    <Link to='/' className="logo-name" >To-Go_List</Link>
                </div>
                <div className="signin_form">
                    <h1 className="signin_h1">로그인</h1>
                    <a className="social_btn google_signin_btn" href="https://www.facebook.com/v2.8/dialog/oauth?state=%7B%22connect%22%3Afalse%2C%22csrf%22%3A%228ffc2440ef6e4becbff328d4c776c931%22%7D&redirect_uri=https%3A%2F%2Ftodoist.com%2FUsers%2FfacebookRedirect&response_type=token&response_mode=form_post&apppackagename=com.todoist&client_id=245146872273138&scope=email,public_profile">
                        <img width="16" height="16" src="https://d3ptyyxy2at9ui.cloudfront.net/google-41de20.svg" />
                        구글로 계속 진행
                    </a>
                    <a className="social_btn google_signin_btn" href="https://www.facebook.com/v2.8/dialog/oauth?state=%7B%22connect%22%3Afalse%2C%22csrf%22%3A%228ffc2440ef6e4becbff328d4c776c931%22%7D&redirect_uri=https%3A%2F%2Ftodoist.com%2FUsers%2FfacebookRedirect&response_type=token&response_mode=form_post&apppackagename=com.todoist&client_id=245146872273138&scope=email,public_profile">
                        <img width="16" height="16" src="https://d3ptyyxy2at9ui.cloudfront.net/facebook-fadd25.svg" />
                        페이스북으로 계속 진행
                    </a>
                    <a className="social_btn google_signin_btn" href="https://www.facebook.com/v2.8/dialog/oauth?state=%7B%22connect%22%3Afalse%2C%22csrf%22%3A%228ffc2440ef6e4becbff328d4c776c931%22%7D&redirect_uri=https%3A%2F%2Ftodoist.com%2FUsers%2FfacebookRedirect&response_type=token&response_mode=form_post&apppackagename=com.todoist&client_id=245146872273138&scope=email,public_profile">
                        <img width="16" height="16" src="http://penzim.synology.me/image/kakaotalk.svg" />
                        카카오톡으로 계속 진행
                    </a>
                    <div className="separator">
                        <div className="middle_separator">또는</div>
                    </div>
                    <form className="general_login_form">
                        <div className="field">
                            <label className="label">이메일</label>
                            <input className="input_email" type="email"></input>
                        </div>
                        <div className="field">
                            <label className="label">패스워드</label>
                            <input className="input_password" type="password"></input>
                        </div>
                        <button className="submit_btn social_btn">로그인</button>
                        <label className="stay_login">
                            <input type="checkbox" />
                            로그인 상태 유지
                        </label>
                        <div className="field">
                            <a className="forgot_password" href="비밀번호 찾기 페이지로 이동">비밀번호를 잊어버렸습니까?</a>
                        </div>
                        <div className="signup_block">
                            <hr />
                            <p>계정이 없습니까?
                            <Link to='/signup' className="signup_link">가입</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin