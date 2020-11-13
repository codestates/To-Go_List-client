/* eslint-disable */
(()=>{
      console.log("pass")
    let yOffset = 0;
    let prevScrollHeight = 0;
    let currentScene = 0;

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
          container: document.querySelector("#scroll_section_1"),
          messageA: document.querySelector('#scroll_section_0 .main_message.a'),
          messageB: document.querySelector('#scroll_section_0 .main_message.b'),
          messageC: document.querySelector('#scroll_section_0 .main_message.c'),
          messageD: document.querySelector('#scroll_section_0 .main_message.d'),
        },
        values:{
          messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
          messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
          messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
          messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
          messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
          messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
          messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
          messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
          messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
          messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
          messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
          messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
          messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
          messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
          messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
          messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }]
          
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
  //   //1
    function setLayout(){
      for(let i = 0; i < sceneInfo.length; i++){
          sceneInfo[i].scrollHeight = sceneInfo[i].heightNum* window.innerHeight;
          sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
      }
    }
//     function setLayout(){
//       //각 스크롤 섹션의 높이 세팅
//       for(let i =0; i < sceneInfo.length; i++){
//         if(sceneInfo[i].type === 'sticky'){
//           sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight // 브라우저 창의 높이
//           sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
//         }else if(sceneInfo[i].type === 'normal'){
//          sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
//         }
//         sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
//        }
//        // console.log(sceneInfo)
//        // 현재 스크롤에 맞춰서 currentscene을 자동으로 맞추는 기능
//        let totalScrollHeight = 0;
//        yOffset = window.pageYOffset
//        for(let i = 0; i < sceneInfo.length; i++){
//            totalScrollHeight += sceneInfo[i].scrollHeight;
//            if(totalScrollHeight >= yOffset){
//                currentScene = i;
//                // 반복문 탈출!
//                break;
//            }
//        }
//        document.body.setAttribute('id', `show_scene_${currentScene}`)
//    }

    function scrollLoop(){
      prevScrollHeight = 0;
      for(let i = 0; i < currentScene; i++){
        prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
      }
      if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
        currentScene++;
      }else if(yOffset < prevScrollHeight){
        if(currentScene === 0) return
        currentScene--;
      }
      document.body.setAttribute('id', `show_scene_${currentScene}`)
    }
    

  
  window.addEventListener('scroll', () =>{
      yOffset = window.pageYOffset;
      console.log(yOffset)
      scrollLoop();
  })
    window.addEventListener("resize", setLayout);
    // window.addEventListener("load", setLayout);
    setLayout();
  })();  
