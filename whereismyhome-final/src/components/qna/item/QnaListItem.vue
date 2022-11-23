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
        <div class="button-wrapper" v-if="!this.checkAdmin()">
          <button @click="modifyQuestion">수정</button> |
          <button @click="deleteQuestion">삭제</button>
        </div>
        <div class="button-wrapper" v-if="this.checkAdmin()">
          <button @click="mvwriteAns" v-if="answer == null">답변 등록</button>
          <button @click="mvmodifyAns" v-if="answer !== null">
            답변 수정 |&nbsp;
          </button>
          <button @click="deleteAns" v-if="answer !== null">답변 삭제</button>
        </div>
      </div>
      <div class="answer-wrapper" v-if="answer !== null && !isInputClick">
        <h4>문의답변</h4>
        <div>
          {{ answer }}
        </div>
      </div>
      <div class="inputanswer" v-if="isInputClick">
        <textarea
          id="answertextarea"
          v-model="qna.answer"
          :placeholder="qna.answer"
        ></textarea>
        <div class="button-wrapper">
          <button @click="cancelAns">취소</button> |
          <button @click="writeAns" v-if="answer === null">등록</button>
          <button @click="modifyAns" v-if="answer !== null">수정</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

const qnaStore = "qnaStore";
const memberStore = "memberStore";

export default {
  name: "QnaListItem",

  props: {
    registerTime: String,
    questionNo: Number,
    userId: String,
    subject: String,
    content: String,
    answer: String,
  },

  data() {
    return {
      isActive: false,
      isInputClick: false,
      qna: {
        registerTime: "",
        questionNo: "",
        userId: "",
        subject: "",
        content: "",
        answer: "",
      },
    };
  },
  created() {
    this.qna.registerTime = this.registerTime;
    this.qna.questionNo = this.questionNo;
    this.qna.userId = this.userId;
    this.qna.subject = this.subject;
    this.qna.content = this.content;
    this.qna.answer = this.answer;
  },

  computed: {
    ...mapState(qnaStore, ["isWrite"]),
  },

  methods: {
    ...mapActions(qnaStore, [
      "deleteQna",
      "setAnswer",
      "modifyAnswer",
      "deleteAnswer",
    ]),
    ...mapGetters(memberStore, ["checkAdmin"]),

    toggle() {
      this.isActive = !this.isActive;
    },
    modifyQuestion() {
      this.$router.push({
        name: "modifyquestion",
        params: {
          registerTime: this.registerTime,
          questionNo: this.questionNo,
          userId: this.userId,
          subject: this.subject,
          content: this.content,
          answer: this.answer,
        },
      });
    },
    async deleteQuestion() {
      await this.deleteQna(this.questionNo);
      if (this.isWrite === false) {
        alert(`글 삭제 실패 T-T`);
      } else {
        alert(`글이 삭제되었습니다.`);
        this.$parent.getQnaInfo();
      }
    },
    mvwriteAns() {
      this.isInputClick = true;
    },
    mvmodifyAns() {
      this.isInputClick = true;
    },
    async deleteAns() {
      await this.deleteAnswer(this.questionNo);
      this.qna.answer = null;
      if (this.isWrite === false) {
        alert(`답변 삭제 실패 T-T`);
      } else {
        alert(`답변이 삭제되었습니다.`);
        this.$parent.getQnaInfo();
      }
    },
    cancelAns() {
      this.isInputClick = false;
    },
    async writeAns() {
      await this.setAnswer(this.qna);
      if (this.isWrite == false) {
        alert(`답변 등록 실패 T-T`);
      } else {
        alert(`답변 등록이 성공하였습니다.`);
        this.isInputClick = false;
        this.$parent.getQnaInfo();
      }
    },
    async modifyAns() {
      await this.modifyAnswer(this.qna);
      if (this.isWrite == false) {
        alert(`답변 수정 실패 T-T`);
      } else {
        alert(`답변 수정이 성공하였습니다.`);
        this.isInputClick = false;
        this.$parent.getQnaInfo();
      }
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

.inputanswer {
  margin-top: 15px;
}

#answertextarea {
  width: 100%;
  height: 15em;
  resize: none;
}
</style>
