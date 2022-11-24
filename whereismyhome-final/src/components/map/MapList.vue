<template>
  <div class="container">
    <div
      v-if="
        !isLastApart &&
        this.deals !== null &&
        Object.keys(this.deals).length !== 0
      "
    >
      <h1 class="like-wrapper">
        {{ this.deals[0].location }}
      </h1>
      <div @click="deleteLikeDong" class="heart" v-if="userlike">
        <font-awesome-icon icon="fa-solid fa-heart" />
      </div>
      <div @click="addLikeDong" class="heart" v-else>
        <font-awesome-icon icon="fa-regular fa-heart" />
      </div>
    </div>
    <div class="like" v-if="isLastApart && this.deals != []">
      <h1 class="like-wrapper">
        {{ this.deals[0].apartMentName }}
      </h1>
      <div @click="deleteLikeApt" class="heart" v-if="userlike">
        <font-awesome-icon icon="fa-solid fa-heart" />
      </div>
      <div @click="addLikeApt" lass="heart" v-else>
        <font-awesome-icon icon="fa-regular fa-heart" />
      </div>
    </div>
    <ul v-if="this.deals !== null && Object.keys(this.deals).length !== 0">
      <li v-for="(deal, index) in this.deals" :key="index" class="deal-list">
        <h1>{{ deal.dealAmount | money }}</h1>
        <h2
          :data-code="deal.aptcode"
          :data-lat="deal.lat"
          :data-lng="deal.lng"
          @click="moveApartDetail($event)"
        >
          {{ deal.apartMentName }}
          <font-awesome-icon icon="fa-solid fa-location-dot" />
        </h2>
        <h3>{{ deal.location }}</h3>
        <h4>
          {{ deal.floor }}층, {{ Math.round(deal.area / 3.306, 2) }}평({{
            deal.area
          }}m²), <br />
          {{ deal.date }} 거래, {{ deal.buildYear }} 건설
        </h4>
      </li>
    </ul>
    <ul v-else>
      <div class="div-else">
        검색 결과가 없습니다. <br />키워드로 검색해주세요.
      </div>
    </ul>
  </div>
</template>

<!-- 
 apartMentName
aptcode
area
buildYear
date
dealAmount
dongcode
floor
houseLikeCount
lat
lng
location
:
 -->
<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { mapMarker, panTo } from "@/api/lib/kakaomap.js";

const mapStore = "mapStore";
const likeStore = "likeStore";
const memberStore = "memberStore";

export default {
  name: "MapList",

  filters: {
    money: function (v) {
      v = v.replace(",", "");
      if (v >= 10000) {
        let s = `${Math.round(v / 10000)}억 `;
        if (v % 10000 != 0) {
          s += `${v % 10000}만`;
        }
        return s;
      }
      return `${v / 1000}천`;
    },
  },

  computed: {
    ...mapState(mapStore, ["deals", "isLastApart"]),
    ...mapState(likeStore, ["userlike"]),
    ...mapState(memberStore, ["userInfo"]),
  },

  methods: {
    ...mapMutations(mapStore, ["SET_ISDETAIL"]),
    ...mapMutations(likeStore, ["SET_USERLIKE"]),
    ...mapActions(likeStore, [
      "setUserLikeApt",
      "deleteUserLikeApt",
      "deleteUserLikeDong",
      "setUserLikeDong",
    ]),
    ...mapActions(mapStore, ["getDealByApartCode", "getApartDealAmount"]),

    async moveApartDetail(event) {
      const dataset = event.currentTarget.dataset;
      console.log("detail apartCode: ", dataset.code, dataset.lat, dataset.lng);
      await this.getDealByApartCode({
        apartCode: dataset.code,
        searchOption: {
          lowDealAmount: 0,
          highDealAmount: 10000000,
          lowArea: 0,
          highArea: 150,
          year: 100,
        },
        mutation: "SET_APARTDETAIL_LIST",
      });
      panTo(dataset.lat, dataset.lng);
      await this.getApartDealAmount(dataset.code);
      this.SET_ISDETAIL(true);
      mapMarker(this.deals);
    },
    async deleteLikeDong() {
      await this.deleteUserLikeDong({
        id: this.userInfo.userId,
        dongcode: this.deals[0].dongcode,
      });
      if (this.isWrite === false) {
        alert(`관심 지역 삭제 실패 T-T`);
      } else {
        alert(`관심 지역이 삭제되었습니다.`);
        this.SET_USERLIKE(false);
      }
    },
    async addLikeDong() {
      await this.setUserLikeDong({
        id: this.userInfo.userId,
        dongcode: this.deals[0].dongcode,
      });
      if (this.isWrite === false) {
        alert(`관심 지역 추가 실패 T-T`);
      } else {
        alert(`관심 지역이 추가되었습니다.`);
        this.SET_USERLIKE(true);
      }
    },
    async deleteLikeApt() {
      await this.deleteUserLikeApt({
        id: this.userInfo.userId,
        aptcode: this.deals[0].aptcode,
      });
      if (this.isWrite === false) {
        alert(`관심 아파트 삭제 실패 T-T`);
      } else {
        alert(`관심 아파트가 삭제되었습니다.`);
        this.SET_USERLIKE(false);
      }
    },
    async addLikeApt() {
      await this.setUserLikeApt({
        id: this.userInfo.userId,
        aptcode: this.deals[0].aptcode,
      });
      if (this.isWrite === false) {
        alert(`관심 아파트 추가 실패 T-T`);
      } else {
        alert(`관심 아파트가 추가되었습니다.`);
        this.SET_USERLIKE(true);
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
}
ul {
  width: 100%;
}
.deal-list {
  padding: 10px;
  margin: 5px;
  border: 1px solid rgb(167, 164, 164);
  border-radius: 3px;
}

h1,
h2,
h3,
h4 {
  text-align: start;
  margin: 0;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 18px;
  cursor: pointer;
}
h3 {
  font-size: 15px;
  font-weight: 400;
}

h4 {
  font-size: 13px;
  font-weight: 400;
}

.div-else {
  text-align: center;
  margin-top: 10px;
}

.like-wrapper {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.fa-heart {
  color: rgb(72, 138, 236);
  font-size: 20px;
  cursor: pointer;
}
.fa-location-dot {
  color: rgb(39, 169, 65);
}

.like {
  display: flex;
  align-items: center;
}
</style>
