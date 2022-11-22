<template>
  <div>
    <ul v-if="this.deals !== null">
      <li
        v-for="(deal, index) in this.deals"
        :key="index"
        :data-code="deal.aptcode"
        @click="moveApartDetail($event)"
      >
        <h1>{{ deal.dealAmount | money }}</h1>
        <h2>{{ deal.apartMentName }}</h2>
        <h3>{{ deal.location }}</h3>
        <h4>
          {{ deal.floor }}층, {{ Math.round(deal.area / 3.306, 2) }}평({{
            deal.area
          }}m²), {{ deal.date }}년 거래, {{ deal.buildYear }} 건설
        </h4>
      </li>
    </ul>
    <h3 v-else>키워드로 검색해주세요.</h3>
  </div>
</template>

<!-- 
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
:
 -->
<script>
import { mapState } from "vuex";

const mapStore = "mapStore";

export default {
  name: "MapList",

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

  created() {
    console.log(this.deals);
  },

  computed: {
    ...mapState(mapStore, ["deals"]),
  },
  methods: {
    moveApartDetail(event) {
      const apartCode = event.currentTarget.dataset.code;
      console.log(apartCode);
      // await this.getDealByApartCode({
      //   apartCode: apartCode,
      //   searchOption: this.searchOption,
      // });
    },
  },
};
</script>

<style lang="scss" scoped></style>
