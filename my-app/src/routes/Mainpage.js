import React from "react";
import './Mainpage.css';
import { Link } from "react-router-dom"

class Mainpage extends React.Component{
  render(){
      return(
        <div className="container">
		<nav className="local-nav">
			<div className="local-nav-links">
				<Link to='/' className="logo-name" >To-Go_List</Link>
				<Link to='/signin'className="hover">Login</Link>
				<Link to='/signup' className="hover">Sign-up</Link>
			</div>
		</nav> 
		<section className="scroll-section" id="scroll-section-0">
		  <h1>To-Go_List와 함께 체계적으로 가고 싶은 곳을 정리해요</h1>
		  <img className="logo"src="http://penzim.synology.me/image/To-Go_List-logo-black.png"></img>
		</section>
		<section className="scroll-section" id="scroll-section-1">
          <h1>인스타그램에서 봤던 핫플레이스를 나만의 리스트에 담아</h1></section>
		<section className="scroll-section" id="scroll-section-2">
          <h1>검색 기능은 태그를 이용해서 저장했던 장소를 찾아드립니다. 지도를 보면서 (네이버 길찾기 기능)</h1>
        </section>
		<section className="scroll-section" id="scroll-section-3">
          <p>
             개인적으로 평점 순으로 지역 한정해서 높은 순서로 맛집리스트를 뿌려주면 좋을 것 같습니다. 가능할까요??
             그러면 여기에 컴포넌트를 넣을게요~~ 
          </p>
        </section>
        <footer className="footer">
          <p>
            여긴 푸터다<br></br>
            만든사람: 시간과 실력과 돈이 있었더라면...
            사용한 기술 레퍼런스:
          </p>
        </footer>
	</div>
      )
  }
}

export default Mainpage;