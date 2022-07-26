// https://react-kakao-maps-sdk.jaeseokim.dev/docs/intro/
import { useState } from "react"
import {Map, MapMarker} from "react-kakao-maps-sdk"

export interface MapState {
  center : {lat :number, lng: number}
}

const KakaoMap = () => {
  const [state, setState] = useState<MapState>({center: {"lat": 37.499493264043,
  "lng": 127.02900264553}})
  
  return (
    <Map
      center={state.center}
      style={{ width: "100%", height: "360px" }}
      level={3}
    >
      <MapMarker position={state.center}>
        <div style={{color:"#000"}}>
          <p>Clozet의 위치입니다.</p>
        </div>
      </MapMarker>
    </Map>
  )
}

export default KakaoMap