<template>
  <div class="container">
    <ul class="list">
      <user-dong-like-list-item
        v-for="(userlike, index) in userlikes"
        :key="userlike.dongcode"
        :userlike="userlike"
        :imgIndex="(index + 1) % 9"
      >
      </user-dong-like-list-item>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import UserDongLikeListItem from "./item/UserDongLikeListItem.vue";

const likeStore = "likeStore";
const memberStore = "memberStore";

export default {
  name: "LikeDongList",

  components: {
    UserDongLikeListItem,
  },

  created() {
    this.getUserLikeDongList();
  },

  computed: {
    ...mapState(likeStore, ["userlikes"]),
    ...mapState(memberStore, ["userInfo"]),
  },

  methods: {
    ...mapActions(likeStore, ["getUserLikeDong"]),
    async getUserLikeDongList() {
      await this.getUserLikeDong(this.userInfo.userId);
    },
  },
};
</script>

<style scoped>
.container {
  width: 60%;
  margin: auto;
}

.list {
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  margin-top: 30px;
  width: 100%;
  font-size: 16px;
}

.list li {
  position: relative;
  width: 25%;
  margin-bottom: 30px;
}
</style>
