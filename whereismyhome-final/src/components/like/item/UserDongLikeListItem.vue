<template>
  <div>
    <div @click="viewDong">{{ area }}</div>
    <div>{{ registerTime }}</div>
    <button @click="deleteLikeDong">삭제</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const likeStore = "likeStore";
const memberStore = "memberStore";

export default {
  name: "UserDongLikeListItem",

  props: {
    area: String,
    registerTime: String,
    dongcode: String,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState(likeStore, ["isWrite"]),
    ...mapState(memberStore, ["userInfo"]),
  },

  methods: {
    ...mapActions(likeStore, ["deleteUserLikeDong"]),

    async deleteLikeDong() {
      await this.deleteUserLikeDong({
        id: this.userInfo.userId,
        dongcode: this.dongcode,
      });
      if (this.isWrite === false) {
        alert(`관심 지역 삭제 실패 T-T`);
      } else {
        alert(`관심 지역이 삭제되었습니다.`);
        this.$parent.getDongInfo();
      }
    },
    viewDong() {
      console.log("동 코드로 검색 : " + this.dongcode);
      this.$router.push({
        name: "mapSearchResult",
        params: { dongcode: this.dongcode },
      });
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
