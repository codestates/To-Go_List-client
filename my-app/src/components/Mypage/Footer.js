/* eslint-disable */
import React from "react";
import axios from "axios"
import { Link, Route, Redirect } from "react-router-dom"
axios.defaults.withCredentials = true;

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleUserRemove = () => {
        axios({
            method: 'post',
            url: 'http://13.209.99.91:3001/user/remove',
        },{withCredentials :true}
        ).then((res) => {
            localStorage.removeItem('isLogin')
            console.log("삭제 된거니?",res)
            })
    }


    render() {
        return (
            <footer className="mypage_deleteinfo">
                <Link to="/" id="delete_myinfo" onClick={() => { this.handleUserRemove() }}>
                계정삭제
                </Link>
                
                </footer>
        );
    }
}

export default Footer;