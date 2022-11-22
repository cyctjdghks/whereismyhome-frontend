<template>
  <div>
    <div class="search">
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="find-icon"
      />
      <input
        type="text"
        placeholder="지역 또는 아파트명을 입력하세요."
        @input="onChange($event)"
        @focus="focus"
      />
      <font-awesome-icon icon="fa-solid fa-x" class="x-icon" @click="blur" />
    </div>
    <search-result v-show="this.showResult"></search-result>
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

  data() {
    return {
      showResult: false,
    };
  },

  computed: {
    ...mapState(mapStore, ["searchQuery", "searchOption"]),
  },

  methods: {
    ...mapMutations(mapStore, [
      "SET_SEARCH_QUERY",
      "SET_APARTCODE_LIST",
      "SET_DONGCODE_LIST",
      "SET_DEAL_RESULT",
    ]),
    ...mapActions(mapStore, ["getDongCodeByQuery", "getApartCodeByQuery"]),

    // input focus 벗어났을 때, 검색 결과 창 숨김
    focus() {
      this.showResult = true;
    },
    blur() {
      this.query = null;
      this.showResult = false;
    },
    // 쿼리 초기화
    initQuery() {
      this.SET_APARTCODE_LIST(null);
      this.SET_DONGCODE_LIST(null);
      this.SET_DEAL_RESULT(null);
      this.SET_SEARCH_QUERY(null);
    },

    async onChange(event) {
      const query = event.currentTarget.value;
      if (query === ("" || null)) {
        this.initQuery();
        blur();
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

.search .x-icon {
  font-size: 25px;
  cursor: pointer;
}
</style>
