<template>
  <li>
    <img
      class="apt-img"
      :src="require(`@/assets/images/apt${imgIndex}.jpg`)"
      alt="image"
    />
    <div @click="searchDong" class="title">
      {{ userlike.apartmentName }}
      <font-awesome-icon icon="fa-solid fa-location-dot" />
    </div>
    <div @click="deleteLikeApt" class="heart" v-if="isLike">
      <font-awesome-icon icon="fa-solid fa-heart" />
    </div>
    <div @click="addLikeApt" class="heart" v-else>
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
  name: "UserAptLikeListItem",

  /*
    aptcode: String,
    registerTime: String,
    apartmentName: String,
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
    ...mapState(mapStore, ["apartCodeList", "deals"]),
  },

  methods: {
    ...mapActions(likeStore, ["setUserLikeApt", "deleteUserLikeApt"]),
    ...mapActions(mapStore, ["getDealByApartCode"]),
    ...mapMutations(mapStore, [
      "SET_PARAM_CODE",
      "SET_ISLAST_APART",
      "SET_ISBLUR",
    ]),

    async deleteLikeApt() {
      await this.deleteUserLikeApt({
        id: this.userInfo.userId,
        aptcode: this.userlike.aptcode,
      });
      if (this.isWrite === false) {
        alert(`관심 아파트 삭제 실패 T-T`);
      } else {
        alert(`관심 아파트가 삭제되었습니다.`);
        this.toggle();
      }
    },
    async addLikeApt() {
      await this.setUserLikeApt({
        id: this.userInfo.userId,
        aptcode: this.userlike.aptcode,
      });
      if (this.isWrite === false) {
        alert(`관심 아파트 추가 실패 T-T`);
      } else {
        alert(`관심 아파트가 추가되었습니다.`);
        this.toggle();
      }
    },
    searchDong() {
      console.log("아파트 코드로 검색 : " + this.userlike.aptcode);
      this.searchByUserApartCode(this.userlike.aptcode);
      this.$router.push({ name: "mapSearchResult" });
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
