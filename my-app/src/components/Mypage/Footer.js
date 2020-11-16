import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <footer className="mypage_deleteinfo">
                <button id="delete_myinfo">계정삭제</button>
                </footer>
        )
    }
}

export default Footer