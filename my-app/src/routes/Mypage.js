/* eslint-disable */
import React from "react";
import { Link, Route, Redirect } from "react-router-dom"
import axios from "axios"
import './Mypage.css'
import Nav from '../components/Mypage/Nav'
import UserInfo from '../components/Mypage/UserInfo'
import MyToGoList from '../components/Mypage/MyToGoList'
import Footer from '../components/Mypage/Footer'
import EditInfoPasswordModal from '../components/Mypage/EditInfoPasswordModal'
import EditInfoModal from '../components/Mypage/EditInfoModal'

axios.defaults.withCredentials = true;

class Mypage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            phonenum: '',
            userInfo: '',
            userPost: '',
            editInfoCheck: false,
            editInfoModalShow: false,
            deleteinfoModalShow: false
        }
    }

    componentDidMount() {
        console.log("didmount중입니다")
        
        axios.get('https://togolist-server.ml/user/info', {
            headers: {
                Accept : "application/json, text/plain, */*"
            }
        }).then(response => {
            console.log('너는 뭔냐???????????',response)
        })

        axios({
            method: 'get',
            url: 'https://togolist-server.ml/user/info',
        },{withCredentials :true}
        ).then((res) => {
                this.setState({
                    userInfo:res.data
                })
            console.log("나오는거야 뭐야",res)
        })
        
        axios({
            method: 'get',
            url: 'https://togolist-server.ml/post',
        },{withCredentials :true}
        ).then((res) => {
                this.setState({
                    userPost:res.data
                })
            console.log("포스트 받아오니?",res)
            })
        
        
    }
    editUserInfo = () => {
        axios({
            method: 'get',
            url: 'https://togolist-server.ml/user/info',
        },{withCredentials :true}
        ).then((res) => {
                this.setState({
                    userInfo:res.data
                })
            console.log("제발 되라",res)
            })
    }

    //유저정보를 수정하기 위해서 비밀번호확인하는 모달창을 띄우게 할지 state 변경하는 함수
    editInfoPasswordShow = e => {
        this.setState({
            editInfoCheck : !this.state.editInfoCheck
        })
    }
    //유저정보 수정을 위해 비밀번호 확인이 통과되었을 때 모달창을 띄울 수 있도록 state를 변경하는 함수
    editInfoPasswordShowModal = e => {
        this.setState({
            editInfoModalShow : !this.state.editInfoModalShow
        })
    }
    
    render(){
        return (
            <div className="page_sort">
            <div className="mypage_page">
                {!localStorage.isLogin && <Redirect to="/" />}
                {console.log('디드마운트하면 없어져? ',this.state.userInfo)}
                <EditInfoPasswordModal onClose={this.editInfoPasswordShow} show={this.state.editInfoCheck} onShow={this.editInfoPasswordShowModal}>
                    정보를 수정하기 위해서 비밀번호를 입력해 주세요
                </EditInfoPasswordModal>
                <EditInfoModal onClose={this.editInfoPasswordShowModal} show={this.state.editInfoModalShow} editinfo={this.editUserInfo}>
                    된거냐
                </EditInfoModal>
                <Nav />
                <UserInfo passwordcheck={this.editInfoPasswordShow} userinfo={this.state.userInfo} />
                <MyToGoList post={this.state.userPost }/>
                <Footer />
                </div>
                </div>
        )
    }
}
export default Mypage;