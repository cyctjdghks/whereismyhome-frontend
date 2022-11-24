import { apiInstance } from "./index.js";

const api = apiInstance();

async function newsList(success, fail) {
  await api.get(`/news`).then(success).catch(fail);
}

export { newsList };
