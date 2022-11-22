<template>
  <div class="search-result">
    <div class="result-container">
      <h1>지역</h1>
      <ul v-if="dongCodeList !== null">
        <li
          v-for="(item, index) in dongCodeList"
          :key="index"
          :data-code="item.dongCode"
          @click="searchByDongCode($event)"
        >
          <div class="mainResult">{{ item.siGugunDongName }}</div>
        </li>
      </ul>
      <h4 v-else>검색 결과가 없습니다.</h4>
    </div>
    <div class="result-container">
      <h1>아파트</h1>
      <ul v-if="apartCodeList !== null">
        <li
          v-for="(item, index) in apartCodeList"
          :key="index"
          :data-code="item.aptCode"
          @click="searchByApartCode($event)"
        >
          <div class="mainResult">{{ item.apartmentName }}</div>
          <div class="subResult">{{ item.location }}</div>
        </li>
      </ul>
      <h4 v-else>검색 결과가 없습니다.</h4>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

const mapStore = "mapStore";

export default {
  name: "SearchResult",

  /*
  dongCode
  siGugunDongName

  apartmentName
  aptCode
  location
  */

  computed: {
    ...mapState(mapStore, ["dongCodeList", "apartCodeList", "searchOption"]),
  },

  methods: {
    ...mapActions(mapStore, ["getDealByDongCode", "getDealByApartCode"]),
    async searchByDongCode(event) {
      const dongCode = event.currentTarget.dataset.code;
      await this.getDealByDongCode({
        dongCode: dongCode,
        searchOption: this.searchOption,
      });
    },
    async searchByApartCode(event) {
      const apartCode = event.currentTarget.dataset.code;
      await this.getDealByApartCode({
        apartCode: apartCode,
        searchOption: this.searchOption,
      });
    },
  },
};
</script>

<style scoped>
.search-result {
  position: absolute;
  width: 1200px;
  display: flex;
  margin-top: 10px;
  background-color: white;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 3px;
  z-index: 10;
}

.result-container {
  width: 50%;
  height: 392px;
  border-right: 1px solid #e7e7e7;
  padding: 30px 50px 30px 60px;
}

h1 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
}

ul {
  height: 250px;
  overflow: auto;
}

li {
  margin-bottom: 15px;
  text-align: start;
  cursor: pointer;
}

.mainResult {
  font-size: 16px;
  color: #656565;
}

.subResult {
  font-size: 15px;
  color: #868686;
}

ul::-webkit-scrollbar {
  width: 8px; /* 스크롤바의 너비 */
}

ul::-webkit-scrollbar-thumb {
  height: 30%; /* 스크롤바의 길이 */
  background: #81b3f8; /* 스크롤바의 색상 */

  border-radius: 10px;
}

ul::-webkit-scrollbar-track {
  background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
}
</style>
