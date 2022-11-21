import { apiInstance } from "./index.js";

const api = apiInstance();

async function join(user, success, fail) {
  await api.post(`/user`, JSON.stringify(user)).then(success).catch(fail);
}

async function login(user, success, fail) {
  await api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function modifyUser(user, success, fail) {
  await api.put(`/user`, JSON.stringify(user)).then(success).catch(fail);
}

async function deleteUser(userId, success, fail) {
  await api.delete(`/user/${userId}`).then(success).catch(fail);
}

export { join, login, modifyUser, deleteUser };
