import {
  dongCodeByQueryApi,
  apartCodeByQueryApi,
  dealByApartCodeApi,
  dealByDongCodeApi,
  apartDealAmount,
} from "@/api/map";

const mapStore = {
  namespaced: true,
  state: {
    searchOption: {
      lowDealAmount: 0,
      highDealAmount: 10000000,
      lowArea: 0,
      highArea: 150,
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
    apartDetailList: null, // 상세 아파트
    isDetail: false, // 아파트 상세 보여줄지
    avgDealAmount: null, // 아파트 평균 매매가
    avgDealLabel: null, // 아파트 평균 매매가 연도
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
      state.isBlur = flag;
    },
    SET_APARTDETAIL_LIST: (state, aparts) => {
      state.apartDetailList = aparts;
    },
    SET_ISDETAIL: (state, flag) => {
      state.isDetail = flag;
    },
    SET_AVG: (state, data) => {
      // 최신순 정렬
      data = data.sort((a, b) => {
        return b.dealYear - a.dealYear;
      });
      // 상위 몇개만 자르기
      let newLabel = [];
      let newData = [];
      let sliceCount = Math.min(7, Object.keys(data).length);
      for (let i = Object.keys(data).length - 1; i >= 0; i--) {
        if (i > sliceCount - 1) {
          continue;
        }
        newLabel[sliceCount - i - 1] = data[i].dealYear;
        newData[sliceCount - i - 1] = data[i].avgDealamount;
      }
      state.avgDealAmount = newData;
      state.avgDealLabel = newLabel;
      console.log("store: ", state.avgDealAmount, state.avgDealLabel);
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
          if (data !== []) {
            commit("SET_DEAL_RESULT", data);
          } else {
            commit("SET_DEAL_RESULT", null);
          }
        },
        (error) => {
          console.log(error);
          commit("SET_DEAL_RESULT", null);
        }
      );
    },
    async getDealByApartCode(
      { commit },
      { apartCode, searchOption, mutation }
    ) {
      await dealByApartCodeApi(
        apartCode,
        searchOption,
        ({ data }) => {
          console.log("아파트 코드 기준 거래내역: ", data);
          if (data !== []) {
            commit(mutation, data);
          } else {
            commit(mutation, null);
          }
        },
        (error) => {
          console.log(error);
          commit(mutation, null);
        }
      );
    },
    async getApartDealAmount({ commit }, aptCode) {
      await apartDealAmount(
        aptCode,
        ({ data }) => {
          console.log("아파트 평균 매매가: ", data);
          if (data !== []) {
            commit("SET_AVG", data);
          } else {
            commit("SET_AVG", null);
          }
        },
        (error) => {
          console.log(error);
          commit("SET_AVG", null);
        }
      );
    },
  },
};

export default mapStore;
