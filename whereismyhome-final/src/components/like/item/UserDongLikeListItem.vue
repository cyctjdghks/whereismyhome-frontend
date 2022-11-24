<template>
  <li>
    <img
      class="apt-img"
      :src="require(`@/assets/images/apt${imgIndex}.jpg`)"
      alt="image"
    />
    <div @click="searchDong" class="title">
      {{ userlike.area }}<font-awesome-icon icon="fa-solid fa-location-dot" />
    </div>
    <div @click="deleteLikeDong" class="heart" v-if="isLike">
      <font-awesome-icon icon="fa-solid fa-heart" />
    </div>
    <div @click="addLikeDong" class="heart" v-else>
      <font-awesome-icon icon="fa-regular fa-heart" />
    </div>
  </li>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { mapMarker } from "@/api/lib/kakaomap.js";

const likeStore = "likeStore";
const memberStore = "memberStore";
const mapStore = "mapStore";

export default {
  name: "UserDongLikeListItem",

  /*
    area: String,
    registerTime: String,
    dongcode: String,
  */
  props: {
    userlike: Object,
    imgIndex: Number,
  },

  data() {
    return {
      isLike: true,
      searchOption: {
        lowDealAmount: 0,
        highDealAmount: 10000000,
        lowArea: 0,
        highArea: 150,
        year: 100,
      },
    };
  },

  computed: {
    ...mapState(likeStore, ["isWrite"]),
    ...mapState(memberStore, ["userInfo"]),
    ...mapState(mapStore, ["dongCodeList", "apartCodeList", "deals"]),
  },

  methods: {
    ...mapActions(likeStore, ["deleteUserLikeDong", "setUserLikeDong"]),
    ...mapActions(mapStore, ["getDealByDongCode", "getDealByApartCode"]),
    ...mapMutations(mapStore, [
      "SET_PARAM_CODE",
      "SET_ISLAST_APART",
      "SET_ISBLUR",
    ]),

    async deleteLikeDong() {
      await this.deleteUserLikeDong({
        id: this.userInfo.userId,
        dongcode: this.userlike.dongcode,
      });
      if (this.isWrite === false) {
        alert(`관심 지역 삭제 실패 T-T`);
      } else {
        alert(`관심 지역이 삭제되었습니다.`);
        this.toggle();
      }
    },
    async addLikeDong() {
      await this.setUserLikeDong({
        id: this.userInfo.userId,
        dongcode: this.userlike.dongcode,
      });
      if (this.isWrite === false) {
        alert(`관심 지역 추가 실패 T-T`);
      } else {
        alert(`관심 지역이 추가되었습니다.`);
        this.toggle();
      }
    },
    searchDong() {
      console.log("동 코드로 검색 : " + this.userlike.dongcode);
      this.searchByUserDongCode(this.userlike.dongcode);
      this.$router.push({ name: "mapSearchResult" });
    },
    async searchByUserDongCode(dongCode) {
      console.log("동 검색 : " + dongCode);
      this.SET_PARAM_CODE(dongCode);
      this.SET_ISLAST_APART(false);
      await this.getDealByDongCode({
        dongCode: dongCode,
        searchOption: this.searchOption,
      });
      this.$router.push({ name: "map" });
      mapMarker(this.deals);
    },
    async searchByUserApartCode(apartCode) {
      console.log("아파트 검색 : " + apartCode);
      this.SET_PARAM_CODE(apartCode);
      this.SET_ISLAST_APART(true);
      this.blur(true);
      await this.getDealByApartCode({
        apartCode: apartCode,
        searchOption: this.searchOption,
        mutation: "SET_DEAL_RESULT",
      });
      this.$router.push({ name: "map" });
      mapMarker(this.deals);
    },
    toggle() {
      this.isLike = !this.isLike;
    },
  },
};
</script>

<style scoped>
.apt-img {
  width: 95%;
  height: 150px;
  object-fit: cover;
  z-index: 3;
}

.fa-heart {
  color: red;
}

.heart {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 25px;
  cursor: pointer;
}

.title {
  font-weight: bold;
  cursor: pointer;
}

.fa-location-dot {
  margin-left: 5px;
}
</style>
