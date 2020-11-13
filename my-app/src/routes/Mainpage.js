/* eslint-disable */
import React from "react";
import './Mainpage.css';
import { Link } from "react-router-dom"
import axios from "axios"
import { UNSPLASH_API_KEY } from "../config/unsplash"
// import Animation from "../Animation.js"

class Mainpage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      photos:[],
      searh:"",
      clientId: UNSPLASH_API_KEY,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getPhots = async () => {
    const photos = await axios.get();
  }
  componentDidMount(){
    // const script = document.createElement("script");
    // script.src = "../Animation.js";
    // script.type="text/jsx"
    // script.async = true;
    // document.body.appendChild(script)
    // window.addEventListener('load', Animation)
    
    // setTimeout(() => {
    //   this.setState({isLoading: false})
    // }, 5000)
  }

  

  handleChange = (e) => {
    this.setState({
      searh: e.target.value,
    })
  }
 
  handleSubmit = (e) => {
    const clientId= this.state.clientId
    const searhResult = this.state.searh
    const url = `https://api.unsplash.com/search/photos?page=1&query=${searhResult}&client_id=${clientId}` 
    console.log(url)
    axios.get(url).then((res) => {
      this.setState({
        photos: res.data.results
      })
    })
 }

  render(){
    const {isLoading} = this.state;
    return(
      <div className="container">
	      <nav className="local_nav">
	        <div className="local_nav_links">
	  	      <Link to='/' className="logo_name" >To-Go_List</Link>
	  	      <Link to='/signin'className="hover">Login</Link>
	  	      <Link to='/signup' className="hover">Sign-up</Link>
	        </div>
	      </nav> 
		    <section className="scroll_section" id="scroll_section_0">
		      <img className="logo"src="http://penzim.synology.me/image/To-Go_List-logo-black.png"></img>
          <h1 className ="main_message">To-Go_List와 함께<br></br> 체계적으로 가고 싶은 곳을 정리해요</h1>
		    </section>
		    <section className="scroll_section" id="scroll_section_1">
            {this.state.photos.map((photo) => {
              <img src = {photo.urls.small} />
            })}
            <div className="photos">
            <div className ="photo">1</div>
            <div className ="photo">2</div>
            <div className ="photo">3</div>
            <div className ="photo">4</div>
            <div className ="photo">5</div>
            <div className ="photo">6</div>
          </div>
          <div className ="search_photos">
            <input className = "input" type = "text" placeholder = "search for here" onChange = {this.handleChange}/>
            <button className = "btn" onClick = {this.handleSubmit}>Search</button>
          </div>
          <p>
            다른 사람이 가서 찍은 사진을 미리 보고 가고 싶은 공간으로 등록하기~
          </p>
        </section>
		    <section className="scroll_section" id="scroll_section_2">
          {/*  기능 구현 동영상 또는 한국 홍보 영상 등등 */}
          {/* <h1>  1.기능설명 : 검색 
            기능은 태그를 이용해서 저장했던 장소를 찾아드립니다. <br></br>
          gif 틀 구성 이랑 내용저장 
                2. gif 재생 - </h1> */}
          <div className = "gif_part">
            gif 파일
          </div>
          <div className = "gif_description">
            <p> 기능 설명<br></br> 
              1. 저장했던 장소는 태그했던 내용을 바탕으로 검색하면 됩니다.<br></br>
              2. 저장한 데이터를 마이페이지에서 쉽게 확인 가능합니다<br></br>
              3. 우선순위를 설정해서 가고 싶은 장소의 순위를 정할 수 있습니다.
            </p>
          </div>

        </section>
		    <section className="scroll_section" id="scroll_section_3">
            
            <p className="mid-message">
            <strong>보통 스크롤 영역</strong>
          1. 한국 관광지 이미지 넣기, 인기있는 가게도 괜춘!, 한국 영상
              2. 개인적으로 평점 순으로 지역 한정해서 높은 순서로 맛집리스트를 뿌려주면 좋을 것 같습니다. 가능할까요??
               그러면 여기에 컴포넌트를 넣을게요~~ 
              3. fake 데이터로 일단 구성.  맛집, 관광지 공간
              4. 틀... 
              5. 한국 관광지 이미지 넣기, 인기있는 가게도 괜춘!, 한국 영상
             </p>
          </section>
          <footer className="footer">
            <div className = "info">
              <div className ="developer_info">
                <p>
                  <img></img>
                  만든사람: 시간과 실력과 돈이 있었더라면
                </p>
              </div>
            <div className ="technical_reference">
              <p>
              사용한 기술 레퍼런스: react, node.js, mysql, html, css, javascript
              </p>
            </div>
            </div>
          </footer>
	    </div>
      )
  }
}

export default Mainpage;