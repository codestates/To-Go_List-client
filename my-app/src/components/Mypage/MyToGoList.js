import React from "react";


class MyToGoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <section className="mypage_mylist">
                    <div className="mypage_mycontent_box">
                        <div className="mypage_mycontent_frame">
                            <div className="mypage_mycontent_map"></div>
                            <div className="mypage_mycontent_content">내용이 들어갈 겁니다!</div>
                            <div className="mypage_mycontent_tag">태그태그</div>
                        </div>    
                    </div>
                </section>
        )
    }
}

export default MyToGoList