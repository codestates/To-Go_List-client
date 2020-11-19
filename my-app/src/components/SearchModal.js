/* eslint-disable */
import React from "react";
import './SearchModal.css'
import NaverAPIMap from "../components/NaverMap"
import { RenderAfterNavermapsLoaded } from 'react-naver-maps'

export default class SearchModal extends React.Component {
    render() {
        if (!this.props.show) {
            return null
        }
        return (<div className="modal_page">
            <div className="modal_frame">
                <div className="modal_main">
                    <div className="naver_map">
                        <RenderAfterNavermapsLoaded
                            ncpClientId="5depur52lv"
                        >
                            <NaverAPIMap />
                        </RenderAfterNavermapsLoaded>
                    </div>
                    <button className="empty_modal_close_btn" onClick={() => this.props.closeModal()}>
                        닫기
                    </button>
                </div>
            </div>
        </div>
        )
    }
}
