import { apiInstance } from "./index.js";

const api = apiInstance();

async function join(user, success, fail) {
  await api.post(`/user`, JSON.stringify(user)).then(success).catch(fail);
}

async function login(user, success, fail) {
  await api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
}

export { join, login };
