import { join, login, modifyUser, deleteUser } from "@/api/member";

const memberStore = {
  namespaced: true,
  state: {
    isJoin: false,
    isLogin: false,
    isLoginError: false,
    userInfo: null,
  },
  getters: {
    checkAdmin: function (state) {
      if (state.userInfo !== null) {
        return state.userInfo.userId === "admin";
      }
      return false;
    },
  },
  mutations: {
    SET_IS_JOIN: (state, isJoin) => {
      state.isJoin = isJoin;
    },
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    SET_IS_LOGIN_ERROR: (state, isLoginError) => {
      state.isLoginError = isLoginError;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.isLogin = true;
      state.userInfo = userInfo;
    },
  },
  actions: {
    async userJoin({ commit }, user) {
      await join(
        user,
        ({ data }) => {
          console.log("회원가입 성공.. 리턴: ", data);
          commit("SET_IS_JOIN", true);
        },
        (error) => {
          console.log(error);
          commit("SET_IS_JOIN", false);
        }
      );
    },
    async userLogin({ commit }, user) {
      await login(
        user,
        ({ data }) => {
          if (data !== "") {
            console.log("로그인 성공.. 유저정보: ", data);
            commit("SET_USER_INFO", data);
            commit("SET_IS_LOGIN", true);
            commit("SET_IS_LOGIN_ERROR", false);
          } else {
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", true);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    async userLogout({ commit }) {
      console.log("로그아웃!");
      commit("SET_USER_INFO", null);
      commit("SET_IS_LOGIN", false);
    },
    async userModify({ commit }, user) {
      await modifyUser(
        user,
        ({ data }) => {
          if (data === "success") {
            console.log("수정 성공.. ", data);
            commit("SET_USER_INFO", user);
            commit("SET_IS_JOIN", true);
          } else {
            commit("SET_IS_JOIN", false);
            console.log("수정 실패1..", data);
          }
        },
        (error) => {
          commit("SET_IS_JOIN", false);
          console.log("수정 실패2..", error);
        }
      );
    },
    async userDelete({ commit }, userId) {
      await deleteUser(
        userId,
        ({ data }) => {
          if (data === "success") {
            console.log("삭제 성공.. ", data);
            commit("SET_USER_INFO", null);
            commit("SET_IS_LOGIN", false);
          } else {
            console.log("삭제 실패1..", data);
          }
        },
        (error) => {
          console.log("삭제 실패2..", error);
        }
      );
    },
  },
};

export default memberStore;
