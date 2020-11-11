import React from "react";

function Signin(){
    return (
        <div className="signin_page">
            <div className="signin_frame">
                <div className="login_logo">logo자리입니다</div>
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
                        <img width="16" height="16" src="https://d3ptyyxy2at9ui.cloudfront.net/google-41de20.svg" />
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
                    </form>
                    <div className="login_section4">회원가입하세요자리</div>
                </div>
            </div>
        </div>
    )
}

export default Signin