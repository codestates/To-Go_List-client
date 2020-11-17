import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <center>
            <div className="signupFooter">이미 가입했습니까?
            <Link to="/signin" className="login_link">로그인</Link>
                <div>
                    <Link to="/" className="mainpage_link">메인페이지</Link>
                </div>
            </div>
        </center>
    )
}

export default Footer;