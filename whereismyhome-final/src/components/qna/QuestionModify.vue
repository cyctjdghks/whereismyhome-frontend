<template>
  <div class="container">
    <h2>수정할 사항을 작성해주세요</h2>
    <h2>
      문의내용과 답변은 <span>'1:1 문의내역'</span>에서 확인하실 수 있습니다.
    </h2>
    <form>
      <div class="head">
        <label for="notice-subject">제목</label>
        <input
          id="notice-subject"
          v-model="qna.subject"
          :placeholder="qna.subject"
          required
        />
      </div>
      <div class="notice-content">
        <label for="notice-content">내용</label>
        <textarea
          id="content"
          v-model="qna.content"
          :placeholder="qna.content"
          required
        ></textarea>
      </div>
      <div class="moveList">
        <button class="modify-button" @click.prevent="modifyQuestion">
          글수정
        </button>
        <button class="cancel-button" @click.prevent="cancelQuestion">
          취소
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";
const qnaStore = "qnaStore";

export default {
  name: "QuestionModify",

  data() {
    return {
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

  props: {
    registerTime: String,
    questionNo: Number,
    userId: String,
    subject: String,
    content: String,
    answer: String,
  },

  created() {
    this.qna.registerTime = this.$route.params.registerTime;
    this.qna.questionNo = this.$route.params.questionNo;
    this.qna.userId = this.$route.params.userId;
    this.qna.subject = this.$route.params.subject;
    this.qna.content = this.$route.params.content;
    this.qna.answer = this.$route.params.answer;
  },

  computed: {
    ...mapState(qnaStore, ["isWrite"]),
    ...mapState(memberStore, ["userInfo"]),
  },

  methods: {
    ...mapActions(qnaStore, ["modifyQna"]),
    // 문의사항 수정 취소
    async cancelQuestion() {
      this.$router.push({ name: "myQnaList" });
    },
    // 문의사항 수정
    async modifyQuestion() {
      this.qna.userId = this.userInfo.userId;
      await this.modifyQna(this.qna);
      if (this.isWrite == false) {
        alert(`문의 수정 실패 T-T`);
      } else {
        alert(`문의 수정이 성공하였습니다.`);
        this.$router.push({ name: "myQnaList" });
      }
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  width: 60%;
  margin: auto;
  text-align: start;
  color: black;
}
.container h2 {
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  letter-spacing: -1px;
}
.container h2 span {
  font-weight: 400;
  color: rgb(50, 108, 249);
}
.head {
  padding: 25px 0;
  border-top: 1px solid #eee;
}

.head,
.notice-content {
  display: flex;
  border-bottom: 1px solid #eee;
}

label {
  font-size: 16px;
  font-weight: 400;
  width: 8%;
  text-align: center;
}

.head label {
  line-height: 45px;
}

#notice-subject {
  height: 45px;
  width: 100%;
}

.notice-content {
  padding: 32px 0 60px 0;
  border-bottom: 1px solid #eee;
}

#content {
  width: 92%;
  min-width: 92%;
  max-width: 92%;
  height: 200px;
  min-height: 200px;
}

#notice-subject,
#content {
  border: 1px solid #eee;
  border-radius: 3px;
}

.moveList {
  padding: 32px 0 100px 0;
  color: blue;
  width: 100%;
}

.cancel-button,
.modify-button {
  float: right;
  min-width: 70px;
  font-weight: 700;
  cursor: pointer;
  background-color: rgb(50, 108, 249);
  border: 1px solid rgb(50, 108, 249);
  border-radius: 2px;
  color: rgb(255, 255, 255);
  height: 40px;
}

.modify-button {
  margin-left: 5px;
}
</style>
