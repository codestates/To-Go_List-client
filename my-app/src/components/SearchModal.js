/* eslint-disable */
import React from "react";
import './SearchModal.css'
import NaverAPIMap from "../components/NaverMap"
import { RenderAfterNavermapsLoaded } from 'react-naver-maps'
import { NAVER_MAP_CLIENTID } from "../config/config";
import { NAVER_MAP_SECRETE_KEY } from "../config/config";
import axios from "axios";


export default class SearchModal extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         naverClientId:NAVER_MAP_CLIENTID,
    //         naverClientSecreteKey: NAVER_MAP_SECRETE_KEY,
    //         latitude: 127.0278577,
    //         longitude: 37.1683157,
    //     }
    //     this.getLatLng = this.getLatLng.bind(this);
    // }
    // async getLatLng(value){
    //     console.log("pass")
    //     const naverClientId= this.state.naverClientId;
    //     const naverClientSecreteKey = this.state.naverClientSecreteKey;
    //     let longitudeY = this.state.longitude;
    //     let latitudeX = this.state.latitude;
    //     const searhResult = this.props.value;
    //     let url = `/naver/map-geocode/v2/geocode?query=${searhResult}`
    //     console.log(url)
    //     await axios.get(url, {
    //       headers:{
    //         "X-NCP-APIGW-API-KEY-ID": naverClientId,
    //         "X-NCP-APIGW-API-KEY": naverClientSecreteKey,
    //       }
    //     }).then((res) => {
    //       console.log(res.data.addresses[0].x, res.data.addresses[0].y)
    //       this.setState({
    //         latitude: res.data.addresses[0].x,
    //         longitude: res.data.addresses[0].y,
    //       })
    //     }).catch(err => console.log("데이터가 없습니다."));
    //   }
    render() {
        console.log(this.props)
        if (!this.props.show) {
            return null
        }
        return (
          <div className="modal_page">
              <div className="modal_frame_search">
                  <div className="modal_main_search">
                      <div className="naver_map">
                          <RenderAfterNavermapsLoaded
                              ncpClientId="5depur52lv"
                          >
                              <NaverAPIMap lat={this.props.lat} lng={this.props.lng}/>
                          </RenderAfterNavermapsLoaded>
                      </div>
                      <button className="empty_modal_close_btn" onClick={() => this.props.closeModal()}>
                          확인
                      </button>
                  </div>
              </div>
          </div>
        )
    }
}
