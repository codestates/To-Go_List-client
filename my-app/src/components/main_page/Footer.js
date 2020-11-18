/* eslint-disable */

import React from "react";
import FooterInfoModal from './modal/FooterInfoModal';
import FooterTechModal from './modal/FooterTechModal';
import FooterContactModal from './modal/FooterContactModal';


class Footer extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      showInfo: false,
      showTech: false,
      showContact: false,
    }
  }

  showInfoModal = () =>{
    this.setState({
      showInfo: !this.state.showInfo,
    });
  }

  closeInfoModal = () =>{
    this.setState({
      showInfo: !this.state.showInfo,
    });
  }
  showTechModal = () =>{
    this.setState({
      showTech: !this.state.showTech,
    });
  }

  closeTechModal = () =>{
    this.setState({
      showTech: !this.state.showTech,
    });
  }
  
  showContactModal = () =>{
    this.setState({
      showContact: !this.state.showContact,
    });
  }

  closeContactModal = () =>{
    this.setState({
      showContact: !this.state.showContact,
    });
  }
  



  render(){
    return(
      <>
      {this.state.showInfo? <FooterInfoModal show={this.state.showInfo} closeModal={this.closeInfoModal}/>:null}
      {this.state.showTech? <FooterTechModal show={this.state.showTech} closeModal={this.closeTechModal}/>:null}
      {this.state.showContact? <FooterContactModal show={this.state.showContact} closeModal={this.closeContactModal}/>:null}
      {this.showTech ? <div onClick={this.closeTechModal} className="back_drop_tech"></div>:null}
      {this.showInfo ? <div onClick={this.closeInfoModal} className="back_drop_info"></div>:null}
      {this.showContact ? <div onClick={this.closeContactModal} className="back_drop_contact"></div>:null}
      <footer className="footer">
        <div className = "info">
          <div className = "logo_part">
            <img className = "logo_size" src = "http://penzim.synology.me/image/To-Go_List-logo-black.png"></img>
            <div className ="proj_info">
              <button className="btn_info_modal" onClick={this.showInfoModal}>Info</button>|
              <button className="btn_tech_modal"onClick={this.showTechModal}>technical-reference</button> | 
              <button className="btn_contact_modal"onClick={this.showContactModal}>contact us</button> 
            </div>
          </div>
        </div>
      </footer>
    </>
    );
  }
}

export default Footer;
