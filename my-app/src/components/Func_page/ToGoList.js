import React from "react";


class ToGoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <section className="start_list">
                <div className="mypage_mycontent_box">
                    <h1>To Go List</h1>
                    <div className="start_content_frame">
                        <div className="mypage_mycontent_map"></div>
                        <div className="mypage_mycontent_content">내용이 들어갈 겁니다!</div>
                        <div className="mypage_mycontent_tag">태그태그</div>
                        <div>
                            <button className="edit_post">수정</button>
                            <button className="remove_post">삭제</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ToGoList