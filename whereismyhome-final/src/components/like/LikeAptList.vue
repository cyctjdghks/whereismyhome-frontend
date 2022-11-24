<template>
  <div class="container">
    <ul class="list">
      <user-apt-like-list-item
        v-for="(userlike, index) in userlikes"
        :key="userlike.aptcode"
        :userlike="userlike"
        :imgIndex="(index + 1) % 9"
      >
      </user-apt-like-list-item>
    </ul>
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

  created() {
    this.getAptInfo();
  },

  computed: {
    ...mapState(likeStore, ["userlikes"]),
    ...mapState(memberStore, ["userInfo"]),
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
.container {
  width: 60%;
  margin: auto;
}

.list {
  display: flex;
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
