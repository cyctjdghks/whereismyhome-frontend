import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
// module import
import memberStore from "@/store/modules/memberStore";
import noticeStore from "@/store/modules/noticeStore";
import qnaStore from "@/store/modules/qnaStore";
import mapStore from "@/store/modules/mapStore";
import likeStore from "@/store/modules/likeStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    memberStore,
    noticeStore,
    qnaStore,
    mapStore,
    likeStore,
  },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});
