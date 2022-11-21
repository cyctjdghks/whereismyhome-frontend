<template>
  <div class="container">
    <div class="head" @click="toggle">
      <div class="th1">{{ this.registerTime.split(" ")[0] }}</div>
      <div class="th2">{{ subject }}</div>
      <div class="th3">{{ answer === null ? "답변예정" : "답변완료" }}</div>
    </div>
    <div class="answer" v-if="isActive">
      <h4>문의내용</h4>
      <div>
        {{ content }}
        <div class="button-wrapper">
          <button @click="modifyQuestion">수정</button> |
          <button @click="deleteQuestion">삭제</button>
        </div>
      </div>
      <div class="answer-wrapper" v-if="answer !== null">
        <h4>문의답변</h4>
        <div>
          {{ answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QnaListItem",

  props: {
    registerTime: String,
    questionNo: String,
    userId: String,
    subject: String,
    content: String,
    answer: String,
  },

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    modifyQuestion() {
      console.log("수정해야해");
    },
    deleteQuestion() {
      console.log("삭제해야해");
    },
  },
};
</script>

<style scoped>
.head {
  display: flex;
  border-bottom: 1px solid rgb(204, 204, 204);
  cursor: pointer;
  width: 100%;
}

.head div {
  text-align: start;
  padding: 19px 0px 17px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.th1 {
  width: 15%;
}

.th2 {
  width: 75%;
}

.th3 {
  text-align: center;
}

.head:hover {
  background-color: rgb(251, 251, 251);
}

.answer {
  padding: 40px 50px;
  border-bottom: 1px solid rgb(238, 238, 238);
  background-color: rgb(250, 250, 250);
}

h4 {
  margin: 0;
}

.button-wrapper {
  margin-top: 2px;
  float: right;
}

.button-wrapper button {
  background-color: transparent;
  border: none;
  padding: 0;
  color: rgb(0, 21, 255);
  cursor: pointer;
}

.answer-wrapper {
  margin-top: 20px;
}
</style>
