import {
  dongCodeByQueryApi,
  apartCodeByQueryApi,
  dealByApartCodeApi,
  dealByDongCodeApi,
} from "@/api/map";

const mapStore = {
  namespaced: true,
  state: {
    searchOption: {
      lowDealAmount: 0,
      highDealAmount: 10000000,
      lowArea: 0,
      highArea: 100,
      year: 100,
    }, // 검색 조건
    searchQuery: null, // 검색 쿼리
    paramQuery: null, // 진짜 검색할 쿼리
    paramCode: null, // 진짜 검색할 코드
    deals: null, // 결과 목록에 들어갈 매매 리스트
    dongCodeList: null,
    apartCodeList: null,
    isLastApart: false, // 마지막 검색이 아파트코드인지 동코드인지
    isBlur: true, // 쿼리 결과 없앨지
  },
  mutations: {
    SET_DONGCODE_LIST: (state, dongCodes) => {
      state.dongCodeList = dongCodes;
    },
    SET_APARTCODE_LIST: (state, apartCodes) => {
      state.apartCodeList = apartCodes;
    },
    SET_DEAL_RESULT: (state, deals) => {
      state.deals = deals;
    },
    SET_SEARCH_QUERY: (state, query) => {
      state.searchQuery = query;
    },
    SET_SEARCH_OPTION: (state, option) => {
      state.searchOption = option;
    },
    SET_PARAM_QUERY: (state, query) => {
      state.paramQuery = query;
    },
    SET_PARAM_CODE: (state, code) => {
      state.paramCode = code;
    },
    SET_ISLAST_APART: (state, flag) => {
      state.isLastApart = flag;
    },
    SET_ISBLUR: (state, flag) => {
      console.log("blur", flag);
      state.isBlur = flag;
    },
  },
  actions: {
    async getDongCodeByQuery({ commit }, query) {
      await dongCodeByQueryApi(
        query,
        ({ data }) => {
          console.log("동코드: ", data);
          if (data !== []) {
            commit("SET_DONGCODE_LIST", data);
          } else {
            commit("SET_DONGCODE_LIST", null);
          }
        },
        (error) => {
          console.log(error);
          commit("SET_DONGCODE_LIST", null);
        }
      );
    },
    async getApartCodeByQuery({ commit }, query) {
      await apartCodeByQueryApi(
        query,
        ({ data }) => {
          console.log("아파트코드: ", data);
          if (data !== []) {
            commit("SET_APARTCODE_LIST", data);
          } else {
            commit("SET_APARTCODE_LIST", null);
          }
        },
        (error) => {
          console.log(error);
          commit("SET_APARTCODE_LIST", null);
        }
      );
    },
    async getDealByDongCode({ commit }, { dongCode, searchOption }) {
      await dealByDongCodeApi(
        dongCode,
        searchOption,
        ({ data }) => {
          console.log("동코드 기준 거래 내역: ", data);
          commit("SET_DEAL_RESULT", data);
        },
        (error) => {
          console.log(error);
          commit("SET_DEAL_RESULT", null);
        }
      );
    },
    async getDealByApartCode({ commit }, { apartCode, searchOption }) {
      await dealByApartCodeApi(
        apartCode,
        searchOption,
        ({ data }) => {
          console.log("아파트 코드 기준 거래내역: ", data);
          commit("SET_DEAL_RESULT", data);
        },
        (error) => {
          console.log(error);
          commit("SET_DEAL_RESULT", null);
        }
      );
    },
  },
};

export default mapStore;
