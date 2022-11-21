import { apiInstance } from "./index.js";

const api = apiInstance();

async function noticeList(success, fail) {
  await api.get(`/notice`).then(success).catch(fail);
}

async function noticeWrite(notice, success, fail) {
  await api.post(`/notice`, notice).then(success).catch(fail);
}

async function noticeModify(notice, success, fail) {
  await api.put(`/notice`, notice).then(success).catch(fail);
}

async function noticeView(no, success, fail) {
  await api.get(`/notice/${no}`).then(success).catch(fail);
}

async function noticeDelete(no, success, fail) {
  await api.delete(`/notice/${no}`).then(success).catch(fail);
}

async function noticeComment(no, success, fail) {
  await api.get(`/comment/${no}`).then(success).catch(fail);
}

async function noticeCommentWrite(notice, success, fail) {
  await api.post(`/comment`, notice).then(success).catch(fail);
}

export {
  noticeList,
  noticeWrite,
  noticeModify,
  noticeView,
  noticeDelete,
  noticeComment,
  noticeCommentWrite,
};
