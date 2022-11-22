import { apiInstance } from "./index.js";

const api = apiInstance();

async function dongCodeByQueryApi(query, success, fail) {
  await api.get(`/map/dong/${query}`).then(success).catch(fail);
}

async function apartCodeByQueryApi(query, success, fail) {
  await api.get(`/map/apt/${query}`).then(success).catch(fail);
}

async function dealByApartCodeApi(apartCode, searchOption, success, fail) {
  await api
    .post(`/map/apt/${apartCode}`, JSON.stringify(searchOption))
    .then(success)
    .catch(fail);
}

async function dealByDongCodeApi(dongCode, searchOption, success, fail) {
  await api
    .post(`/map/dong/${dongCode}`, JSON.stringify(searchOption))
    .then(success)
    .catch(fail);
}

export {
  dongCodeByQueryApi,
  apartCodeByQueryApi,
  dealByApartCodeApi,
  dealByDongCodeApi,
};
