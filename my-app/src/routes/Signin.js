/* eslint-disable */
import * as config from '../config'
import React from "react";
import './Signin.css'
import { Link, Route, Redirect } from "react-router-dom"
import axios from "axios";
import SigninEmptyModal from "../components/SigninEmptyModal"
import { GoogleLogin } from "react-google-login"


axios.defaults.withCredentials = true;

class Signin extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            incorrectInfo: false,
            show: false,
            keepLoggedInChecked: false,
            id: '',
            name: '',
            provider: ''
        }
        this.handleInputValue = this.handleInputValue.bind(this)
        this.keepLoggedInCheckedChange = this.keepLoggedInCheckedChange.bind(this)
    }

    responseGoogle = (res) => {
        this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            provider: 'google'
        })
        this.props.history.push("/start");
    }

    responseFail = (err) => {
        console.error(err)
    }




    showModal = e => {
        this.setState({
            show : !this.state.show
        })
    }
    keepLoggedInCheckedChange(e) {
        this.setState({keepLoggedInChecked: e.target.checked})
    }

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value, incorrectInfo:false });
    };
    
    
    handleLogin = () => {
        const { email, password } = this.state
        if (!email || !password) {
          this.setState({show: true})
        }

        axios({
          method: 'post',
          url: 'http://13.209.21.127:3001/user/signin',
          data: {
            email,
            password
          }
        })
            .then((data) => {
                if (this.state.keepLoggedInChecked) {
                    localStorage.setItem('isLogin', true)
                }
              this.props.history.push("/start");
          })
            .catch((err) => {
                if (this.state.show === false && err.response.status === 401) {
                    this.setState({incorrectInfo : true})
                }
            })
    };

    

    render() {

        return (
            <div className="signin_page">
                {localStorage.isLogin ? <Redirect to="/start" /> : ''}
                <SigninEmptyModal onClose={this.showModal} show={ this.state.show }>이메일과 비밀번호를 입력해 주세요</ SigninEmptyModal>
                <div className="signin_frame">
                    <div className="login_logo">
                        <Link to='/' className="signup_link">
                            <img className="signin_page_logo" src="http://penzim.synology.me/image/To-Go_List-logo-black.png" />
                        </Link>
                        <Link to='/' className="logo-name" >To-Go_List</Link>
                    </div>
                    <div className="signin_form">
                        <h1 className="signin_h1">로그인</h1>
                        <GoogleLogin
                            clientId={config.Google_ClientId}
                            render={renderProps => (
                                <button className="social_btn google_signin_btn" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    <img width="16" height="16" src="https://d3ptyyxy2at9ui.cloudfront.net/google-41de20.svg" />
                                    구글로 계속 진행
                                </button>
                              )}
                            buttonText="구글로 계속 진행"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseFail}
                            
                        />
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
                        {this.state.incorrectInfo && <div className="signin_error_block">
                            <div className="signin_error_msg">
                                <img width="13" height="13" src="http://penzim.synology.me/image/firstProject/icon/Error_icon.png" />
                                <span className="incorrent_msg">이메일 혹은 비밀번호가 다릅니다</span>
                            </div>
                        </div>}
                        <form className="general_login_form">
                            <div className="field">
                                <label className="label">이메일</label>
                                <input className="input_email" type="email" onChange={this.handleInputValue("email")}></input>
                            </div>
                            <div className="field">
                                <label className="label">패스워드</label>
                                <input className="input_password" type="password" onChange={this.handleInputValue("password")}></input>
                            </div>
                            <button className="submit_btn social_btn" type='submit' onClick={this.handleLogin}>로그인</button>
                            <label className="stay_login">
                                <input type="checkbox" checked={this.state.keepLoggedInChecked} onChange={ this.keepLoggedInCheckedChange }/>
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
}


export default Signin
