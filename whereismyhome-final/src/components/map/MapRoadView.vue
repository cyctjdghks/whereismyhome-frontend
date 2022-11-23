<template>
  <div id="roadview" style="width: 100%; height: 280px"></div>
</template>

<script>
import { mapState } from "vuex";

const mapStore = "mapStore";

export default {
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}`;
      document.head.appendChild(script);
    }
  },

  computed: {
    ...mapState(mapStore, ["apartDetailList"]),
  },

  methods: {
    initMap() {
      var roadviewContainer = document.getElementById("roadview"); //로드뷰를 표시할 div
      var roadview = new kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
      var roadviewClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

      // this.$emit('setPosition', this.lat, this.lng);

      var apart = this.apartDetailList[0];
      var position = new kakao.maps.LatLng(apart.lat, apart.lng);

      // var position = new kakao.maps.LatLng(33.450701, 126.570667);

      // console.log(this.lat);

      // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
      roadviewClient.getNearestPanoId(position, 50, function (panoId) {
        roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
      });
    },
  },

  watch: {
    apartDetailList: function () {
      this.initMap();
    },
  },
};
</script>

<style></style>
