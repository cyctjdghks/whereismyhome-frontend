<template>
  <div class="map-container">
    <table style="position: relative">
      <tr class="search-wrapper">
        <td class="wrapper-search-bar">
          <search-bar class="searchBar"></search-bar>
        </td>
        <td class="wrapper-search-filter">
          <search-filter></search-filter>
        </td>
        <td
          class="wrapper-apart-list"
          rowspan="2"
          :class="{ menuon: isDetail }"
        >
          <map-apart-detail></map-apart-detail>
        </td>
      </tr>
      <tr class="map-wrapper">
        <td class="wrapper-map-list">
          <map-list></map-list>
        </td>
        <td class="wrapper-map-view"><map-view></map-view></td>
      </tr>
    </table>
  </div>
</template>

<script>
import SearchBar from "@/components/search/SearchBar.vue";
import SearchFilter from "@/components/map/SearchFilter.vue";
import MapList from "@/components/map/MapList.vue";
import MapView from "@/components/map/MapView.vue";
import MapApartDetail from "@/components/map/MapApartDetail.vue";
import { mapState } from "vuex";

const mapStore = "mapStore";

export default {
  name: "AppMap",

  components: {
    SearchBar,
    SearchFilter,
    MapList,
    MapView,
    MapApartDetail,
  },

  computed: {
    ...mapState(mapStore, ["isDetail"]),
  },
};
</script>

<style>
.map-container {
  width: 100%;
  height: 100vh;
}

.map-container table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}

.map-container td {
  border: 1px solid #eee;
  /* width: 100%; */
}

.search-wrapper {
  width: 100%;
  height: 10%;
}

.searchBar {
  width: 100%;
}

.wrapper-search-bar {
  width: 18%;
  min-width: 280px;
  padding: 0;
}

.searchBar .search {
  background-color: transparent;
  box-shadow: none;
  padding: 10px;
}

.searchBar .search .find-icon {
  font-size: 20px;
  padding-top: 8px;
}

.searchBar .search .x-icon {
  font-size: 20px;
}

.searchBar .search input {
  margin: 0 10px;
  font-size: 17px;
}

.searchBar .search-result {
  width: 40%;
  margin-top: 2px;
}

.searchBar .result-container {
  padding: 15px 25px;
}

.wrapper-map-list {
  display: flex;
}

.wrapper-map-list ul {
  margin: 0;
  overflow: auto;
  height: calc(100vh - 100px);
}

.map-wrapper {
  height: 90%;
}

.map-container .search .search-button {
  margin: 0;
}

.wrapper-apart-list {
  z-index: 10;
  width: 420px;
  position: absolute;
  top: 0;
  right: -420px;
  height: 100%;
  background: white;
  transform: translate(0, 0);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.wrapper-apart-list.menuon {
  transform: translate(-420px, 0);
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
}
</style>
