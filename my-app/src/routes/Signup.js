/* eslint-disable */


import React from "react";
import Footer from "../components/signup_page/Footer"
import '../routes/Signup.css';
import axios from "axios";
import { withRouter, Link } from "react-router-dom";


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordCheck: "",
            username: "",
            birthDay: "",
            phonenum: "",
            errMessage: "",
            errPassword: "",
            errPasswordCheck: "",
            errMobile: "",
            existuserinfo: false,
        }

        this.handleInputValue = this.handleInputValue.bind(this);
    }

    handleInputValue = (key) => (e) => {
        this.setState({
            [key]: e.target.value
        });
    };



    handleSignup = () => {
        const { email, password, passwordCheck, username, birthDay, phonenum } = this.state;
        const isPassword = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/
        const isphonenum = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/
        if (!email || !password || !passwordCheck || !username || !birthDay || !phonenum) {
            this.setState({
                errMessage: "모든 항목은 필수입니다"
            });
            return;
        }
        else {
            this.setState({
                errMessage: ""
            });
        }
        if (!isPassword.test(password)) {
            this.setState({ errPassword: "비밀번호는 숫자와 영문자 조합으로 6~20자리를 사용해야 합니다." });
            return;
        }
        else {
            this.setState({
                errPassword: ""
            });
        }
        if (password !== passwordCheck) {
            this.setState({ errPasswordCheck: "비밀번호가 일치하지 않습니다." })
            return;
        }
        else {
            this.setState({
                errPasswordCheck: ""
            });
        }
        if (!isphonenum.test(phonenum)) {
            this.setState({ errMobile: "휴대폰 번호를 다시 확인해주세요" })
            return;
        }
        else {
            this.setState({
                errMobile: ""
            });
        }

        {
            axios
                .post("http://13.209.21.127:3001/user/signup", {
                    email: email,
                    password: password,
                    passwordCheck: passwordCheck,
                    username: username,
                    birthDay: birthDay,
                    phonenum: phonenum
                })
                .then((res) => {
                    this.props.history.push("/signin")
                })
                .catch((err) => {
                    if (err.status === 409) {
                        this.setState({ existuserinfo: true })
                    }
                })
        }
    }



    render() {
        return (
            <div className="singup_page">
                <div className="signup_frame">
                    <div className="login_logo">
                        <Link to='/' className="signup_link">
                            <img className="signup_page_logo" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ef8084f5-733a-43ab-bd87-e1c17835ce76/logo-black.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201116T055614Z&X-Amz-Expires=86400&X-Amz-Signature=596c4d322e1f8b4226d3405a2a6c78dbf7b8de41f507ab4832a0bb924dfc0a7d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22logo-black.png%22" />
                            <img className="signup_page_text_logo" src="http://penzim.synology.me/image/firstProject/icon/To-Go_List-logo-black.png" />
                        </Link>

                    </div>
                    <form id="signup_form">
                        <h1 className="signup_h1">회원가입</h1>
                        <div >
                            <label className="label">이메일</label>
                            <input id="email" type="email" name="email" onChange={this.handleInputValue("email")} ></input>
                            {this.state.existuserinfo ?
                                <div className="alert-box">
                                    사용중인 email입니다.
                                </div> : ""}
                        </div>
                        <div>
                            <label className="label">비밀번호</label>
                            <input id="password" type="password" name="password" onChange={this.handleInputValue("password")}></input>
                            {this.state.errPassword ?
                                <div className="alert-box">
                                    {this.state.errPassword}
                                </div> : ""}
                        </div>
                        <div>
                            <label className="label">비밀번호 확인</label>
                            <input id="password_check" type="password" name="passwordCheck" onChange={this.handleInputValue("passwordCheck")}></input>
                            {this.state.errPasswordCheck ?
                                <div className="alert-box">
                                    {this.state.errPasswordCheck}
                                </div> : ""}
                        </div>
                        <div>
                            <label className="label">이름</label>
                            <input id="name" type="text" name="name" onChange={this.handleInputValue("username")}></input>

                        </div>
                        <div>
                            <label className="label">생년월일</label>
                            <input id="dateBirth" type="date" name="dateBirth" onChange={this.handleInputValue("birthDay")}></input>
                        </div>
                        <div>
                            <label className="label">핸드폰 번호</label>
                            <input id="telNum" type="tel" name="telNum" onChange={this.handleInputValue("phonenum")}></input>
                            <span className="hyphen">- 을 넣어서 입력해주세요</span>
                            {this.state.errMobile ?
                                <div className="alert-box">
                                    {this.state.errMobile}
                                </div> : ""}
                        </div >
                    </form>
                    <button className="signupBtn" type="submit" onClick={this.handleSignup}>회원가입</button>
                    {this.state.errMessage ?
                        <div className="alert-box">
                            {this.state.errMessage}
                        </div> : ""}
                    <hr />
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup);
