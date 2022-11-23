import { apiInstance } from "./index.js";

const api = apiInstance();

// 유저 관심 지역 목록
async function userDongList(id, success, fail) {
  await api.get(`/interest/area/${id}`).then(success).catch(fail);
}

// 유저 관심 지역 추가
async function userDongWrite(id, dongcode, success, fail) {
  await api.get(`/interest/area/${id}/${dongcode}`).then(success).catch(fail);
}

// 유저 관심 지역 삭제
async function userDongDelete(id, dongcode, success, fail) {
  await api.delete(`/interest/area/${id}/${dongcode}`).then(success).catch(fail);
}

// 유저 관심 아파트 목록
async function userAptList(id, success, fail) {
  await api.get(`/interest/house/${id}`).then(success).catch(fail);
}

// 유저 관심 아파트 추가
async function userAptWrite(id, aptcode,  success, fail) {
  await api.get(`/interest/area/${id}/${aptcode}`).then(success).catch(fail);
}

// 유저 관심 아파트 삭제
async function userAptDelete(id, aptcode, success, fail) {
  await api.delete(`/interest/house/${id}/${aptcode}`).then(success).catch(fail);
}

export { userDongList, userDongWrite, userDongDelete, userAptList, userAptWrite, userAptDelete };
