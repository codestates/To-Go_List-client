import React from "react";

function Section2() {
  return (
    <>
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
    </>
  )
} 

export default Section2