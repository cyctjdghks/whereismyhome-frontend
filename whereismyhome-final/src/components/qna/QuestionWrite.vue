<template>
  <div class="container">
    <h2>궁금하신 점을 문의해주세요</h2>
    <h2>
      문의내용과 답변은 <span>'1:1 문의내역'</span>에서 확인하실 수 있습니다.
    </h2>
    <form>
      <div class="head">
        <label for="notice-subject">제목</label>
        <input
          id="notice-subject"
          v-model="qna.subject"
          placeholder="제목 적어주세요"
          required
        />
      </div>
      <div class="notice-content">
        <label for="notice-content">내용</label>
        <textarea
          id="content"
          v-model="qna.content"
          placeholder="내용 적어주세요"
          required
        ></textarea>
      </div>
      <div class="moveList">
        <button class="write-button" @click.prevent="writeQuestion">
          글등록
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
  name: "QuestionWrite",

  data() {
    return {
      qna: {
        content: "",
        subject: "",
        userId: "",
      },
    };
  },

  computed: {
    ...mapState(qnaStore, ["isWrite"]),
    ...mapState(memberStore, ["userInfo"]),
  },

  methods: {
    ...mapActions(qnaStore, ["setQna"]),
    // 문의사항 추가
    async writeQuestion() {
      this.qna.userId = this.userInfo.userId;
      await this.setQna(this.qna);
      if (this.isWrite == false) {
        alert(`문의 추가 실패 T-T`);
      } else {
        alert(`문의 작성이 성공하였습니다.`);
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

.write-button {
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
</style>
