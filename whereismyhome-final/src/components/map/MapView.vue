<template>
  <div style="width: 100%; height: 100%">
    <div id="map" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import { addScript, initMap } from "@/api/lib/kakaomap.js";

export default {
  name: "MapView",

  data() {
    return {
      map: null,
      markers: [],
      latitude: 0,
      longitude: 0,
    };
  },

  mounted() {
    window.kakao && window.kakao.maps ? initMap() : addScript();
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
