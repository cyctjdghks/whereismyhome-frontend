var map, geocoder, imageSrc, imageSize, markerImage;

function addScript() {
  const script = document.createElement("script");
  /* global kakao */
  script.onload = () => kakao.maps.load(initMap);
  script.src = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}&libraries=services`;
  document.head.appendChild(script);
}

function initMap() {
  // map 생성
  var container = document.getElementById("map");
  var options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  map = new kakao.maps.Map(container, options);

  // 컨트롤러 추가
  var mapTypeControl = new kakao.maps.MapTypeControl(); // 일반 지도 <-> 스카이뷰
  var zoomControl = new kakao.maps.ZoomControl(); // 지도 줌
  map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

  // 주소-좌표 변환 객체를 생성합니다
  geocoder = new kakao.maps.services.Geocoder();
  // 마커 이미지의 이미지 주소입니다
  imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  // 마커 이미지의 이미지 크기 입니다
  imageSize = new kakao.maps.Size(24, 35);
  // 마커 이미지를 생성합니다
  markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  ///////////////////////////////////// 사용자 위치
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude, // 위도
        lon = position.coords.longitude; // 경도

      var myLatLng = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
      // displayMarker(myLatLng, "", markerImage); // 마커와 인포윈도우를 표시합니다
      map.setCenter(myLatLng); // 지도 중심좌표를 접속위치로 변경합니다
    });
  } else {
    // 사용자 위치 없을 때
    // var myLatLng = new kakao.maps.LatLng(37.5012743, 127.039585); // 위치
    // displayMarker(myLatLng, "");
  }
}

// ////////////////////////////////////// 초기 설정 끝 ///////////////////////////////

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(myLatLng, deal, markerImage) {
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    map: map,
    position: myLatLng,
    image: markerImage, // 마커이미지 설정
  });

  if (deal) {
    var iwContent = `
    <div>
      <h3>${deal.dealAmount}만</h3>
      <h4>
        ${deal.apartMentName}
      </h4>
      <h5>${deal.location}</h5>
      <h5>
        ${deal.floor}층, ${Math.round(deal.area / 3.306, 2)}평(${
        deal.area
      }m²), <br />
        ${deal.date} 거래, <br/>
        ${deal.buildYear} 건설
      </h4>
    </div>
    `, // 인포윈도우에 표시할 내용
      iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });
  }

  // 마커에 마우스오버 이벤트를 등록합니다
  kakao.maps.event.addListener(marker, "mouseover", function () {
    // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
    infowindow.open(map, marker);
  });

  // 마커에 마우스아웃 이벤트를 등록합니다
  kakao.maps.event.addListener(marker, "mouseout", function () {
    // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
    infowindow.close();
  });
}

function mapMarker(data) {
  if (data.length === 0) {
    return;
  }
  // 검색 주소 기준으로 지도 중심 이동
  geocoder.addressSearch(data[0].location, function (result, status) {
    // 정상적으로 검색이 완료됐으면
    if (status === kakao.maps.services.Status.OK) {
      var myLatLng = new kakao.maps.LatLng(result[0].y, result[0].x);
      map.setCenter(myLatLng);
    }
  });

  // 매매 정보 주소를 좌표로 변환하기
  data.forEach((deal) => {
    displayMarker(new kakao.maps.LatLng(deal.lat, deal.lng), deal, markerImage);
  });
}

function panTo(lat, lng) {
  // 이동할 위도 경도 위치를 생성합니다
  var moveLatLon = new kakao.maps.LatLng(lat, lng);

  // 지도 중심을 부드럽게 이동시킵니다
  // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
  map.panTo(moveLatLon);
}

export { addScript, initMap, mapMarker, panTo };
