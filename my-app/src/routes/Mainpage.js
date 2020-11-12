import React from "react";
import './Mainpage.css';
import { Link } from "react-router-dom"
import "../Animation.js"

class Mainpage extends React.Component{
  
  componentDidMount(){
    const script = document.createElement("script");
    script.src = "../Animation.js";
    script.type="text/jsx"
    script.async = true;
    document.body.appendChild(script)
    console.log("pass didMount")
  }
  
  render(){
    console.log("pass render")
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
		    </section>
		    <section className="scroll_section" id="scroll_section_1">
              <div className = "sticky_elem main_message a">
                <p>

                  To-Go_List와 함께<br></br> 체계적으로 가고 싶은 곳을 정리해요
                </p>
              </div>
              <div className = "sticky_elem main_message b">
                <p>

                  인스타그램에서 봤던 핫플레이스를 <br></br>나만의 리스트에 담아
                </p>
              </div>
              <div className = "sticky_elem main_message c">
                <p>

                  인스타그램에서 봤던 핫플레이스를<br></br> 나만의 리스트에 담아
                </p>
              </div>
              <div className = "sticky_elem main_message d">
                <p>            
                  인스타그램에서 봤던 핫플레이스를<br></br> 나만의 리스트에 담아
                </p>
              </div>
        </section>
		    <section className="scroll_section" id="scroll_section_2">
          {/*  기능 구현 동영상 또는 한국 홍보 영상 등등 */}
          gif 틀 구성 이랑 내용저장 
          <h1>  1.기능설명 : 검색 
            기능은 태그를 이용해서 저장했던 장소를 찾아드립니다. <br></br>
                2. gif 재생 - </h1>

                
        </section>
		    <section className="scroll_section" id="scroll_section_3">
            <p>
              1. 한국 관광지 이미지 넣기, 인기있는 가게도 괜춘!, 한국 영상
              2. 개인적으로 평점 순으로 지역 한정해서 높은 순서로 맛집리스트를 뿌려주면 좋을 것 같습니다. 가능할까요??
               그러면 여기에 컴포넌트를 넣을게요~~ 
              3. fake 데이터로 일단 구성.  맛집, 관광지 공간
              4. 틀... 
              5. 한국 관광지 이미지 넣기, 인기있는 가게도 괜춘!, 한국 영상
            </p>
          </section>
          <footer className="footer">
            <p>
              여긴 푸터다<br></br>
              만든사람: 시간과 실력과 돈이 있었더라면...<br></br>
              사용한 기술 레퍼런스: react-router-dom, node.js, express, mysql, html, css, javascript etc
            </p>
          </footer>
	    </div>
      )
  }
}

export default Mainpage;