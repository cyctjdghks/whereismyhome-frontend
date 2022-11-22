<template>
  <div>
    <h3>지역</h3>
    <ul v-if="this.deals !== null">
      <li
        v-for="(item, index) in this.deals"
        :key="index"
        :data-code="item.aptcode"
        @click="moveApartDetail($event)"
      >
        <div class="mainResult">{{ item.apartMentName }}</div>
        <div class="mainResult">{{ item.date }}</div>
        <div class="mainResult">{{ item.buildYear }}</div>
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

  data() {
    return {};
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
