/* eslint-disable */
import React from "react";

const MyToGoList = (props) => {
    return (
        <div className="mypage_mylist">
            <div className="mypage_mycontent_boxs">
            {props.post.length === 0 ? "가고 싶은 곳을 등록해주세요!" : 
                props.post.map(function (el) {
                    return (
                        
                            <div className="mypage_mycontent_frame">
                                <div className="mypage_mycontent_map">{el.mapimgpath && el.mapimgpath}</div>
                                <div className="mypage_mycontent_content">{el.content}</div>
                                <div className="mypage_mycontent_tag">{el.hashtags.length === 0 ? '' :
                                    el.hashtags.map(function (ele) {
                                    return (ele.tag)
                                })
                                }</div>
                         
                        </div>
                    )
                })
            }
            {console.log(props.post)}
                </div> 
                </div>
    )
}


export default MyToGoList;


