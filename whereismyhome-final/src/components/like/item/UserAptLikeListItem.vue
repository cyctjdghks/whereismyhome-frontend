<template>
  <div>
    <div @click="viewApt">{{ apartmentName }}</div>
    <button @click="deleteLikeApt">삭제</button>
    <font-awesome-icon icon="fa-solid fa-heart" />
    <font-awesome-icon icon="fa-regular fa-heart" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const likeStore = "likeStore";
const memberStore = "memberStore";

export default {
  name: "UserAptLikeListItem",

  props: {
    apartmentName: String,
    registerTime: String,
    aptcode: String,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState(likeStore, ["isWrite"]),
    ...mapState(memberStore, ["userInfo"]),
  },

  methods: {
    ...mapActions(likeStore, ["deleteUserLikeApt"]),

    async deleteLikeApt() {
      await this.deleteUserLikeApt({
        id: this.userInfo.userId,
        aptcode: this.aptcode,
      });
      if (this.isWrite === false) {
        alert(`관심 아파트 삭제 실패 T-T`);
      } else {
        alert(`관심 아파트가 삭제되었습니다.`);
        this.$parent.getAptInfo();
      }
    },

    viewApt() {
      console.log("아파트 코드로 검색 : " + this.aptcode);
      this.$router.push({
        name: "mapSearchResult",
        params: { aptcode: this.aptcode },
      });
    },
  },
};
</script>

<style scoped>
.fa-heart {
  color: rgb(72, 138, 236);
}
</style>
