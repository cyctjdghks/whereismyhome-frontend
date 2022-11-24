<template>
  <div
    class="container"
    v-if="
      this.apartDetailList !== null &&
      Object.keys(this.apartDetailList).length !== 0
    "
  >
    <div class="wrapper">
      <map-road-view></map-road-view>
      <h1>{{ this.apartDetailList[0].apartMentName }}</h1>
      <h2>{{ this.apartDetailList[0].location }}</h2>
      <h3>이 아파트의 거래 기록</h3>
      <table v-if="this.apartDetailList.length !== 0" class="apartDetails">
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
      <h3>이 아파트의 연도별 평균 거래가</h3>
      <line-chart></line-chart>
    </div>
    <div class="btn-menu" @click="toggle">
      <font-awesome-icon icon="fa-solid fa-x" />
    </div>
  </div>
</template>

<script>
import MapRoadView from "./MapRoadView.vue";
import LineChart from "@/components/map/item/LineChart.vue";
import { mapState, mapMutations } from "vuex";

const mapStore = "mapStore";

export default {
  name: "MapApartDetail",

  components: {
    MapRoadView,
    LineChart,
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
    ...mapState(mapStore, ["apartDetailList", "isDetail"]),
  },

  methods: {
    ...mapMutations(mapStore, ["SET_ISDETAIL"]),
    toggle: function () {
      this.SET_ISDETAIL(!this.isDetail);
    },
  },
};
</script>

<style scoped>
.container {
  height: calc(100vh-75px);
}

.wrapper {
  max-height: 95vh;
  overflow: auto;
}

.fa-x {
  position: absolute;
  left: 0;
  top: 0;
  color: rgb(27, 7, 248);
  font-size: 28px;
  padding: 13px 7px;
  background-color: rgb(171, 170, 170, 0.2);
  z-index: 10;
  cursor: pointer;
}

.apartDetails {
  margin-bottom: 20px;
}
.apartDetails thead tr {
  background-color: rgb(171, 170, 170, 0.2);
}

h1 {
  margin-bottom: 3px;
}
h2 {
  font-size: 20px;
  font-weight: 400;
  margin-top: 0;
}

h3 {
  margin: 10px 0 1px 2px;
  text-align: left;
}
</style>
