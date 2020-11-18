/* eslint-disable */
import React from "react";

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="mypage_userinfo">
                {console.log('여기에 프롭스 뭐로 내려오지????',this.props)}
                    <div className="mypage_userinfo_frame">
                        <h2>회원정보</h2>
                        <div className="mypage_userinfo_content_box">
                            <div className="mypage_profile_photo">
                                <img  id="mypage_profile_photo" src="http://penzim.synology.me/image/firstProject/icon/common_photo.png" />
                            </div>
                            <div>
                            <div className="mypage_profile">
                                <div className="mypage_profile_name">
                                    <dl>
                                    <dt><span id="mypage_profile_name">이름</span></dt>
                                        <dd><span>{this.props.userinfo.username}</span></dd>
                                    </dl>
                                </div>
                                <div className="mypage_profile_email">
                                    <dl>
                                    <dt><span id="mypage_profile_email">이메일</span></dt>
                                    <dd><span>{this.props.userinfo.email}</span></dd>
                                    </dl>
                                </div>
                                <div className="mypage_profile_phone">
                                    <dl>
                                    <dt><span id="mypage_profile_phone">휴대폰 번호</span></dt>
                                    <dd><span>{this.props.userinfo.phonenum}</span></dd>
                                    </dl>
                                </div>
                                </div>
                                </div>
                            <div className="mypage_profile_edit">
                                <button id="mypage_edit_btn" onClick={() => this.props.passwordcheck()}>편집</button>
                            </div>
                        </div>
                </div>
                </div>
        );
    }
}

export default UserInfo;