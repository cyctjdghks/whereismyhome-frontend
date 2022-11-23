<template>
  <div style="width: 100%; height: 100%">
    <div id="map" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import { addScript, initMap } from "@/api/lib/kakaomap.js";

export default {
  name: "MapView",

  /*
  apartMentName
  aptcode
  area
  buildYear
  date
  dealAmount
  dongcode
  floor
  houseLikeCount
  lat
  lng
  location
  */

  mounted() {
    window.kakao && window.kakao.maps ? initMap() : addScript();
  },
};
</script>

<style scoped>
#map {
  z-index: 0;
}
</style>
