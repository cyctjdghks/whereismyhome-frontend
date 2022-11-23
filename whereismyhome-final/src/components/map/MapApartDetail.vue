<template>
  <div class="container">
    <font-awesome-icon
      icon="fa-solid fa-x"
      class="x-icon"
      @click="SET_ISDETAIL(false)"
    />
    <map-road-view class="road-view"></map-road-view>
    <h1>{{ this.apartDetailList[0].apartMentName }}</h1>
    <h2>{{ this.apartDetailList[0].location }}</h2>
    <table v-if="this.apartDetailList.length !== 0">
      <thead>
        <tr>
          <th>가격</th>
          <th>층수</th>
          <th>평수(m²)</th>
          <th>거래일자</th>
          <th>건설일자</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(deal, index) in this.apartDetailList" :key="index">
          <td>{{ deal.dealAmount | money }}</td>
          <td>{{ deal.floor }}층</td>
          <td>{{ Math.round(deal.area / 3.306, 2) }}평({{ deal.area }}m²)</td>
          <td>{{ deal.date }}</td>
          <td>{{ deal.buildYear }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MapRoadView from "./MapRoadView.vue";
import { mapState, mapMutations } from "vuex";

const mapStore = "mapStore";

export default {
  name: "MapApartDetail",

  components: {
    MapRoadView,
  },

  filters: {
    money: function (v) {
      v = v.replace(",", "");
      if (v >= 10000) {
        let s = `${Math.round(v / 10000)}억 `;
        if (v % 10000 != 0) {
          s += `${v % 10000}만`;
        }
        return s;
      }
      return `${v / 1000}천`;
    },
  },

  computed: {
    ...mapState(mapStore, ["apartDetailList"]),
  },

  methods: {
    ...mapMutations(mapStore, ["SET_ISDETAIL"]),
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  position: relative;
}

.x-icon {
  position: absolute;
  left: 0;
  color: white;
  font-size: 30px;
  background-color: black;
  z-index: 10;
  cursor: pointer;
}
</style>
