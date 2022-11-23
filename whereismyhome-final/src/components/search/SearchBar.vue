<template>
  <div>
    <div class="search">
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="find-icon"
      />
      <input
        type="text"
        placeholder="지역 또는 아파트명 입력 후 엔터"
        @keyup.enter="onChange($event)"
        @focus="blur(false)"
      />
    </div>
    <search-result v-if="!this.isBlur"></search-result>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import SearchResult from "./SearchResult.vue";

const mapStore = "mapStore";

export default {
  name: "SearchBar",

  components: {
    SearchResult,
  },

  computed: {
    ...mapState(mapStore, ["searchQuery", "searchOption", "isBlur"]),
  },

  methods: {
    ...mapMutations(mapStore, [
      "SET_SEARCH_QUERY",
      "SET_APARTCODE_LIST",
      "SET_DONGCODE_LIST",
      "SET_DEAL_RESULT",
      "SET_ISBLUR",
    ]),
    ...mapActions(mapStore, ["getDongCodeByQuery", "getApartCodeByQuery"]),

    blur(flag) {
      this.SET_ISBLUR(flag);
    },
    // 쿼리 초기화
    initQuery() {
      console.log("init...");
      this.SET_APARTCODE_LIST(null);
      this.SET_DONGCODE_LIST(null);
      this.SET_DEAL_RESULT(null);
      this.SET_SEARCH_QUERY(null);
      this.SET_ISBLUR(true);
    },

    async onChange(event) {
      const query = event.currentTarget.value;
      console.log(query);
      if (query === ("" || null)) {
        this.initQuery();
        return;
      }
      // 쿼리 업데이트
      this.SET_SEARCH_QUERY(query);
      // 쿼리 해당 동, 아파트 검색
      await this.getDongCodeByQuery(query);
      await this.getApartCodeByQuery(query);
    },
  },
};
</script>

<style scoped>
.search {
  position: relative;
  padding: 20px;
  background-color: aliceblue;
  border-radius: 5px;
  box-shadow: rgb(0, 0, 0) 0px 7px 10px -2px;
  display: flex;
}

.search .find-icon {
  font-size: 26px;
}

.search input {
  width: 100%;
  border: none;
  background-color: transparent;
  margin: 0 10px;
  font-size: 20px;
}

.search input:focus {
  outline: none;
}
</style>
