<template>
  <div class="container">
    <div class="filter">
      <div class="slider">
        <vue-range-slider
          v-model="price.value"
          :min="price.range[0]"
          :max="price.range[1]"
          :step="price.range[2]"
          :formatter="price.formatter"
        ></vue-range-slider>
      </div>
      <div class="slider">
        <vue-range-slider
          v-model="size.value"
          :min="size.range[0]"
          :max="size.range[1]"
          :step="size.range[2]"
          :formatter="size.formatter"
        ></vue-range-slider>
      </div>
      <div class="dropdown">
        <button class="dropbtn select-year-button">
          거래일자<font-awesome-icon icon="fa-solid fa-chevron-down" />
        </button>
        <div class="dropdown-content">
          <div class="dropdown-item">
            <label
              ><input
                name="buildYear"
                type="radio"
                checked=""
                :value="this.curYear"
                @change="radioChange($event)"
              />
              <p>전체</p></label
            >
          </div>
          <div class="dropdown-item">
            <label
              ><input
                name="buildYear"
                type="radio"
                value="1"
                @change="radioChange($event)"
              />
              <p>1년 이내</p></label
            >
          </div>
          <div class="dropdown-item">
            <label
              ><input
                name="buildYear"
                type="radio"
                value="5"
                @change="radioChange($event)"
              />
              <p>5년 이내</p></label
            >
          </div>
          <div class="dropdown-item">
            <label
              ><input
                name="buildYear"
                type="radio"
                value="10"
                @change="radioChange($event)"
              />
              <p>10년 이내</p></label
            >
          </div>
          <div class="dropdown-item">
            <label
              ><input
                name="buildYear"
                type="radio"
                value="15"
                @change="radioChange($event)"
              />
              <p>15년 이내</p></label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";
import { mapActions, mapMutations, mapState } from "vuex";

const mapStore = "mapStore";

export default {
  name: "SearchFilter",

  components: {
    VueRangeSlider,
  },

  data() {
    return {
      price: {
        range: [0, 50000, 1000],
        value: [0, 50000],
        formatter: function (v) {
          if (v == 50000) {
            return `무제한`;
          }
          return v >= 10000 ? `${v / 10000}억원` : `${v / 1000}천만원`;
        },
      },
      size: {
        range: [0, 100, 10],
        value: [0, 100],
        formatter: function (v) {
          return `${v}평(${Math.round(v / 3.306, 2)}m²)`;
        },
      },
      curYear: 0,
    };
  },

  created() {
    var now = new Date(); // 현재 날짜 및 시간
    this.curYear = now.getFullYear(); // 연도
    this.searchOption.year = this.curYear;
  },

  computed: {
    ...mapState(mapStore, ["isLastApart", "paramCode", "searchOption"]),
  },

  methods: {
    ...mapActions(mapStore, ["getDealByApartCode", "getDealByDongCode"]),
    ...mapMutations(mapStore, ["SET_SEARCH_OPTION"]),
    // 버튼으로 검색하기
    async searchDeal() {
      if (this.isLastApart) {
        await this.getDealByApartCode({
          apartCode: this.paramCode,
          searchOption: this.searchOption,
        });
      } else {
        await this.getDealByDongCode({
          dongCode: this.paramCode,
          searchOption: this.searchOption,
        });
      }
    },
    // 거래일자 업데이트
    radioChange(event) {
      var selected = event.target.value;
      this.searchOption.year = selected;
      this.updateSearchOption();
    },
    // 모든 검색 조건 업데이트
    updateSearchOption() {
      this.SET_SEARCH_OPTION(this.searchOption);
      this.searchDeal();
    },
  },

  watch: {
    // 가격 범위 업데이트
    "price.value": function () {
      this.searchOption.lowDealAmount = this.price.value[0];
      this.searchOption.highDealAmount =
        this.price.value[1] == 50000 ? 10000000 : this.price.value[1];
      this.updateSearchOption();
    },
    // 평수 범위 업데이트
    "size.value": function () {
      this.searchOption.lowArea = this.size.value[0];
      this.searchOption.highArea = this.size.value[1];
      this.updateSearchOption();
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
.filter {
  display: flex;
  width: 100%;
  padding-top: 10px;
}

.slider {
  width: 30%;
  padding: 0 15px;
}
/* Style The Dropdown Button */
.dropbtn {
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: large;
  background-color: transparent;
}

.dropdown {
  margin-left: 20px;
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  min-width: 160px;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
}

/* Links inside the dropdown */
.dropdown-item {
  padding: 12px 16px;
  display: block;
  border-radius: 5px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.select-year-button {
  font-weight: 500;
}

.select-year-button .fa-chevron-down {
  margin-left: 3px;
}

.dropdown-item {
  padding: 0;
  padding-left: 10px;
}
.dropdown-item label {
  display: flex;
}
</style>
