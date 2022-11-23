<template>
  <div class="container">
    <div class="list">
      <ul>
        <li class="head">
          <div class="th1">사진</div>
          <div class="th2">관심 아파트</div>
          <div class="th3">등록일</div>
        </li>
        <li>
          <div v-for="(userlike, index) in userlikes" :key="userlike.aptcode">
            <img class="apt-img" :src="aptimg[index % 9].imgSrc" alt="image" />
            <user-apt-like-list-item
              v-bind="userlike"
            ></user-apt-like-list-item>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import UserAptLikeListItem from "./item/UserAptLikeListItem.vue";

const likeStore = "likeStore";
const memberStore = "memberStore";

export default {
  name: "LikeAptList",

  components: {
    UserAptLikeListItem,
  },

  computed: {
    ...mapState(likeStore, ["userlikes"]),
    ...mapState(memberStore, ["userInfo"]),
  },

  created() {
    this.getAptInfo();
  },

  data() {
    return {
      aptimg: [
        { imgSrc: require("@/assets/images/apt1.jpg") },
        { imgSrc: require("@/assets/images/apt2.jpg") },
        { imgSrc: require("@/assets/images/apt3.jpg") },
        { imgSrc: require("@/assets/images/apt4.jpg") },
        { imgSrc: require("@/assets/images/apt5.jpg") },
        { imgSrc: require("@/assets/images/apt6.jpg") },
        { imgSrc: require("@/assets/images/apt7.jpg") },
        { imgSrc: require("@/assets/images/apt8.jpg") },
        { imgSrc: require("@/assets/images/apt9.jpg") },
      ],
    };
  },

  methods: {
    ...mapActions(likeStore, ["getUserLikeApt"]),
    async getAptInfo() {
      await this.getUserLikeApt(this.userInfo.userId);
    },
  },
};
</script>

<style scoped>
.list {
  width: 60%;
  margin: auto;
}

ul {
  margin-top: 50px;
  width: 100%;
  text-align: start;
  border-collapse: collapse;
  font-size: 16px;
  table-layout: fixed;
}

.head {
  display: flex;
  border-top: 1px solid rgb(34, 34, 34);
  border-bottom: 1px solid rgb(204, 204, 204);
}

.head div {
  text-align: start;
  padding: 19px 0px 17px 0px;
  font-weight: 900;
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

.apt-img {
  width: 200px;
  height: 150px;
  object-fit: cover;
}
</style>
