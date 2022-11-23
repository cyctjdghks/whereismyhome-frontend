<template>
  <div class="container">
    <div v-if="!isLastApart && this.deals != []">
      <h1 class="like-wrapper">
        {{ this.deals[0].location }}
        <font-awesome-icon icon="fa-solid fa-heart" />
        <font-awesome-icon icon="fa-regular fa-heart" />
      </h1>
    </div>
    <ul v-if="this.deals.length !== 0">
      <li v-for="(deal, index) in this.deals" :key="index" class="deal-list">
        <h1>{{ deal.dealAmount | money }}</h1>
        <h2 :data-code="deal.aptcode" @click="moveApartDetail($event)">
          {{ deal.apartMentName }}
        </h2>
        <h3>{{ deal.location }}</h3>
        <h4>
          {{ deal.floor }}층, {{ Math.round(deal.area / 3.306, 2) }}평({{
            deal.area
          }}m²), <br />
          {{ deal.date }} 거래, {{ deal.buildYear }} 건설
        </h4>
      </li>
    </ul>
    <ul v-else>
      <div class="div-else">키워드로 검색해주세요.</div>
    </ul>
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
import { mapActions, mapMutations, mapState } from "vuex";

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

  computed: {
    ...mapState(mapStore, ["deals", "isLastApart"]),
  },

  methods: {
    ...mapMutations(mapStore, ["SET_ISDETAIL"]),
    ...mapActions(mapStore, ["getDealByApartCode"]),
    async moveApartDetail(event) {
      const apartCode = event.currentTarget.dataset.code;
      console.log("detail apartCode: ", apartCode);
      await this.getDealByApartCode({
        apartCode: apartCode,
        searchOption: {
          lowDealAmount: 0,
          highDealAmount: 10000000,
          lowArea: 0,
          highArea: 150,
          year: 100,
        },
        mutation: "SET_APARTDETAIL_LIST",
      });
      this.SET_ISDETAIL(true);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
}
ul {
  width: 100%;
}
.deal-list {
  padding: 10px;
  margin: 10px 0;
}

h1,
h2,
h3,
h4 {
  text-align: start;
  margin: 0;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 18px;
  cursor: pointer;
}
h3 {
  font-size: 15px;
  font-weight: 400;
}

h4 {
  font-size: 13px;
  font-weight: 400;
}

.div-else {
  text-align: center;
}

.like-wrapper {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.fa-heart {
  color: rgb(72, 138, 236);
}
</style>
