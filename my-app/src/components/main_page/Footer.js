import React from "react";
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';


function Footer() {
  return (
    <>
      <footer className="footer">
        <div className = "info">
          <div className = "logo_part">
          <img className = "logo_size" src = "http://penzim.synology.me/image/To-Go_List-logo-black.png"></img>
          </div>
          <div className ="developer_info">
            <p>
              프로젝트명: To-Go_List<br/>
              팀명: To-Go<br/>
              프론트: 배채겸, 박지국, 이창근<br/>
              백앤드: 이승철 
            </p>
          </div>
        <div className ="technical_reference">
          <p>
          사용한 기술 레퍼런스<br></br> 
          react, node.js, mysql, html, css, javascript<br></br>
          <FaReact /><FaHtml5 /><FaCss3Alt/><FaNode /><SiMysql/><SiJavascript />
          </p>
        </div>
        </div>
      </footer>
    </>      
  );
} 

export default Footer;
