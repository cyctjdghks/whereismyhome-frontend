import { apiInstance } from "./index.js";

const api = apiInstance();

async function qnaAdminList(success, fail) {
  await api.get(`/qna/admin`).then(success).catch(fail);
}

async function qnaUserList(id, success, fail) {
  await api.get(`/qna/${id}`).then(success).catch(fail);
}

async function qnaWrite(qna, success, fail) {
  await api.post(`/qna`, qna).then(success).catch(fail);
}

async function qnaModify(qna, success, fail) {
  await api.put(`/qna`, qna).then(success).catch(fail);
}

async function qnaDelete(no, success, fail) {
  await api.delete(`/qna/${no}`).then(success).catch(fail);
}

async function qnaAnswerWrite(qna, success, fail) {
  await api.put(`/qna/answer/regist`, qna).then(success).catch(fail);
}

async function qnaAnswerModify(qna, success, fail) {
  await api.put(`/qna/answer/update`, qna).then(success).catch(fail);
}

async function qnaAnswerDelete(no, success, fail) {
  await api.put(`/qna/answer/${no}`).then(success).catch(fail);
}

export {
  qnaAdminList,
  qnaUserList,
  qnaWrite,
  qnaModify,
  qnaDelete,
  qnaAnswerWrite,
  qnaAnswerModify,
  qnaAnswerDelete,
};
