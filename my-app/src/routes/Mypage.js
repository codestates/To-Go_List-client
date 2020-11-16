/* eslint-disable */
import React from "react";
import { Link, Route, Redirect } from "react-router-dom"
import axios from "axios";
import './Mypage.css'
import Nav from '../components/Mypage/Nav'
import UserInfo from '../components/Mypage/UserInfo'
import MyToGoList from '../components/Mypage/MyToGoList'
import Footer from '../components/Mypage/Footer'

axios.defaults.withCredentials = true;

class Mypage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            phonenum: ''
        }
    }

    componentDidMount() {
        console.log("didmount중입니다")
        axios({
            method: 'get',
            url: 'http://13.209.21.127:3001/user/info',
        }
        )
            .then((res) => {
                this.setState({
                    email: res.email,
                    username: res.username,
                    phonenum: res.phonenum
                })
            console.log("나오는거야 뭐야",res)
          })
    }
    

    render(){
        return (
            <div className="mypage_page">
                <Nav />
                <UserInfo />
                <MyToGoList />
                <Footer />
            </div>
        )
    }
}
export default Mypage;