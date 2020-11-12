/* eslint-disable */
window.onload =function(){
  (()=>{
    let yOffset = 0;
    let prevScrollHeight = 0;
    let currentScene = 0;
    console.log(yOffset, currentScene)
  
    const sceneInfo = [
      {
        type: 'normal',
        heightNum:3,
        scrollHeight:0,
        objs:{
          container: document.querySelector("#scroll_section_0")
        }
      },
      {
        type: 'sticky',
        heightNum:3,
        scrollHeight:0,
        objs:{
          container: document.querySelector("#scroll_section_1")
        }
      },
      {
        type: 'normal',
        heightNum:3,
        scrollHeight:0,
        objs:{
          container: document.querySelector("#scroll_section_2")
        }
      },
      {
        type: 'sticky',
        heightNum:3,
        scrollHeight:0,
        objs:{
          container: document.querySelector("#scroll_section_3")
        }
      },
    ]
    //1
    function setLayout(){
      for(let i = 0; i < sceneInfo.length; i++){
          sceneInfo[i].scrollHeight = sceneInfo[i].heightNum* window.innerHeight;
          sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}`;
        }
        console.log(sceneInfo)
  
    }
  
    function scrollLoop(){
      for(let i = 0; i < sceneInfo.length; i++){
        prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
      }
      console.log(prevScrollHeight)
    }
    window.addEventListener("scroll", () => {
      yOffset = window.pageYOffset
      scrollLoop();
    })
    window.addEventListener("resize", setLayout);
    // function scrollLoop(){
  
    // }
  
    setLayout();
  })();  
}

