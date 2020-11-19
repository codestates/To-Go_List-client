/* eslint-disable */

import React from 'react';
import { NaverMap } from 'react-naver-maps'; // 패키지 불러오기



class NaverAPIMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            center: {
                lat: 37.3595704,
                lng: 127.105399
            },
            value: "",
            result: []
        }
        this.panToNaver = this.panToNaver.bind(this);
    }


    panToNaver() {
        const navermaps = window.naver.maps;
        this.setState(() => ({ center: new navermaps.LatLng(37.5074871, 127.0571846) }));

    }

    searchhandle = async () => {
        const ID_KEY = '5depur52lv';
        const SECRET_KEY = '';
        const search = this.state.value;
        try {
            if (search === "") {
                this.setState({ result: [] })
            } else {
                const { items } = await axios.get('https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode', {
                    params: {
                        query: search,
                    },
                    headers: {
                        'X-NCP-APIGW-API-KEY-ID': ID_KEY,
                        'X-NCP-APIGW-API-KEY': SECRET_KEY
                    }
                });
                this.setState({ result: items });
            }
        } catch (error) { console.log(error); }
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value }
        );
    };

    render() {
        return (
            <>
                <input className="keyword" type="text" name="search" autoComplete="off" onChange={this.handleChange} value={this.state.value}></input>
                <button className="map_search" type="submit" onClick={this.panToNaver} onChange={this.searchhandle}>검색</button>

                <NaverMap
                    id='maps-getting-started-controlled'
                    style={{ width: '800px', height: '400px' }}

                    // uncontrolled zoom
                    defaultZoom={14}

                    // controlled center
                    // Not defaultCenter={this.state.center}
                    center={this.state.center}
                    onCenterChanged={center => this.setState({ center })}

                />

            </>
        )
    }
}

export default NaverAPIMap;