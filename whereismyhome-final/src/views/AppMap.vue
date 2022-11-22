<template>
  <div class="map-container">
    <table>
      <tr class="search-wrapper">
        <td class="wrapper-search-bar">
          <search-bar class="searchBar"></search-bar>
        </td>
        <td class="wrapper-search-filter">
          <search-filter></search-filter>
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

export default {
  name: "AppMap",

  components: {
    SearchBar,
    SearchFilter,
    MapList,
    MapView,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
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
}

.search-wrapper {
  width: 100%;
  height: 10%;
}

.searchBar {
  width: 100%;
}

.wrapper-search-bar {
  width: 25%;
  min-width: 360px;
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
  width: 50%;
  margin-top: 2px;
}

.wrapper-map-list ul {
  overflow: auto;
  height: calc(100vh - 136px);
}

.map-wrapper {
  height: 90%;
}

.map-container .search .search-button {
  margin: 0;
}
</style>
