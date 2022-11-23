import { apiInstance } from "./index.js";

const api = apiInstance();

async function userDongList(id, success, fail) {
  await api.get(`/interest/house/${id}`).then(success).catch(fail);
}

async function userDongDelete(id, dongcode, success, fail) {
  await api.get(`/interest/house/${id}/${dongcode}`).then(success).catch(fail);
}

async function userAptList(id, success, fail) {
  await api.get(`/interest/house/${id}`).then(success).catch(fail);
}

async function userAptDelete(id, aptcode, success, fail) {
  await api.get(`/interest/house/${id}/${aptcode}`).then(success).catch(fail);
}

export { userDongList, userDongDelete, userAptList, userAptDelete };
