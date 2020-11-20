/* eslint-disable */
window.onload = function (){(()=>{
    let yOffset = 0;
    let prevScrollHeight = 0;
    let currentScene = 0;
    let enterNewScene = false;

    const sceneInfo = [
      {
        type: 'normal',
        heightNum:0,
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
          messageA: document.querySelector('#scroll_section_1 .main_message_1.a'),
          messageB: document.querySelector('#scroll_section_1 .main_message_1.b'),
          messageC: document.querySelector('#scroll_section_1 .main_message_1.c'),
          messageD: document.querySelector('#scroll_section_1 .main_message_1.d'),
        },
        values: {
          messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
          messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
          messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
          messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
          messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
          messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
          messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
          messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
          messageA_opacity_out: [1, 0, { start: 0.25, end: 0.39 }],
          messageB_opacity_out: [1, 0, { start: 0.45, end: 0.59 }],
          messageC_opacity_out: [1, 0, { start: 0.65, end: 0.79 }],
          messageD_opacity_out: [1, 0, { start: 0.85, end: 1.00 }],
          messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
          messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
          messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
          messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }]
        }      
      },
      {
        type: 'normal',
        heightNum:2,
        scrollHeight:0,
        objs:{
          container: document.querySelector("#scroll_section_2")
        }
      },
      {
        type: 'normal',
        heightNum:2,
        scrollHeight:0,
        objs:{
          container: document.querySelector("#scroll_section_3")
        }
      },
    ]

function setLayout(){
  for(let i =0; i < sceneInfo.length; i++){
    if(sceneInfo[i].type === 'sticky'){
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight
      sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
    }else if(sceneInfo[i].type === 'normal'){
     sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
    }
    sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
   }
   console.log(innerHeight)
   console.log(sceneInfo)
   let totalScrollHeight = 0;
   yOffset = window.pageYOffset
   for(let i = 0; i < sceneInfo.length; i++){
     totalScrollHeight += sceneInfo[i].scrollHeight;
     if(totalScrollHeight >= yOffset){
       currentScene = i;
       break;
     }
   }
   document.body.setAttribute('id', `show_scene_${currentScene}`)
}
function calcValues(values, currentYOffset){
  let rv;
  const scrollHeight = sceneInfo[currentScene].scrollHeight
  const scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight
  
  if(values.length === 3){
    const partScrollStart = values[2].start * scrollHeight
    const partScrollEnd = values[2].end * scrollHeight
    console.log(partScrollStart, partScrollEnd)
    const partScrollHeight = partScrollEnd - partScrollStart

    if(currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd){
       rv = (currentYOffset - partScrollStart)/ partScrollHeight * (values[1] - values[0]) + values[0]
    }else if(currentYOffset < partScrollStart){
      rv = values[0];
    }else if(partScrollEnd > currentYOffset){
      rv = values[1];
    }
  }else{
    rv = scrollRatio * (values[1] - values[0]) + values[0]
  }
  // console.log(rv)
  return rv;
}

function playAnimation(){
   const objs = sceneInfo[currentScene].objs;
   const values = sceneInfo[currentScene].values;
   const currentYOffset = yOffset - prevScrollHeight;
   const scrollHeight = sceneInfo[currentScene].scrollHeight
   const scrollRatio =  currentYOffset / scrollHeight
   console.log(currentYOffset, scrollHeight)
   switch(currentScene){
     case 1:
      if (scrollRatio <= 0.22) {
        // in
        objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
        console.log(objs.messageA.style.opacity)
        objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
      } else {
        // out
        objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
        console.log(objs.messageA.style.opacity)
        objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
      }
      if (scrollRatio <= 0.42) {
        objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
        objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`;
      } else {
        objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
        objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
      }
      if (scrollRatio <= 0.62) {
        objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
        objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in, currentYOffset)}%, 0)`;
      } else {
        objs.messageC.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
        objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out, currentYOffset)}%, 0)`;
      }
      if (scrollRatio <= 0.82) {
        objs.messageD.style.opacity = calcValues(values.messageD_opacity_in, currentYOffset);
        objs.messageD.style.transform = `translate3d(0, ${calcValues(values.messageD_translateY_in, currentYOffset)}%, 0)`;
      } else {
        objs.messageD.style.opacity = calcValues(values.messageD_opacity_out, currentYOffset);
        objs.messageD.style.transform = `translate3d(0, ${calcValues(values.messageD_translateY_out, currentYOffset)}%, 0)`;
      }
      break;
   }
}

function scrollLoop(){
   prevScrollHeight = 0
   enterNewScene = false
   for(let i = 0; i < currentScene; i++){
     prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
   }
   if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
     enterNewScene = true;
     currentScene++;
     document.body.setAttribute('id', `show_scene_${currentScene}`)
   }
   if(yOffset < prevScrollHeight){
     if(currentScene === 0) return;
     enterNewScene = true;
     currentScene--;
     document.body.setAttribute('id', `show_scene_${currentScene}`)
   }

   if(enterNewScene) return;
     playAnimation();
}

window.addEventListener('scroll', () =>{
   yOffset = window.pageYOffset;
   scrollLoop();
})

window.addEventListener("resize", setLayout);
setLayout();

  })()};  
