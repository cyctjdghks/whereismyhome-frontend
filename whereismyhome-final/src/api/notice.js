import { apiInstance } from "./index.js";

const api = apiInstance();

async function noticeList(success, fail) {
  await api.get(`/notice`).then(success).catch(fail);
}

async function noticeView(no, success, fail) {
  await api.get(`/notice/${no}`).then(success).catch(fail);
}

async function noticeComment(no, success, fail) {
  await api.get(`/comment/${no}`).then(success).catch(fail);
}

export { noticeList, noticeView, noticeComment };
