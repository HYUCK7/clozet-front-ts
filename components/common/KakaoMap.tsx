// https://react-kakao-maps-sdk.jaeseokim.dev/docs/intro/
import {Map, MapMarker} from "react-kakao-maps-sdk"

const KakaoMap: React.FC = () => {
  return (
    <Map
      center={{ "lat": 37.499493264043,
      "lng": 127.02900264553 }}
      style={{ width: "100%", height: "360px" }}
      level={3}
    >
      <MapMarker position={{ "lat": 37.499493264043,
        "lng": 127.02900264553 }}>
        <div style={{color:"#000"}}>
          <p>Clozet의 위치입니다.</p>
        </div>
      </MapMarker>
    </Map>
  )
}

export default KakaoMap