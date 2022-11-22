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
          건설일자<font-awesome-icon icon="fa-solid fa-chevron-down" />
        </button>
        <div class="dropdown-content">
          <div class="dropdown-item">
            <label
              ><input name="buildYear" type="radio" checked="" />
              <p>전체</p></label
            >
          </div>
          <div class="dropdown-item">
            <label
              ><input name="buildYear" type="radio" value="1" />
              <p>1년 이내</p></label
            >
          </div>
          <div class="dropdown-item">
            <label
              ><input name="buildYear" type="radio" value="5" />
              <p>5년 이내</p></label
            >
          </div>
          <div class="dropdown-item">
            <label
              ><input name="buildYear" type="radio" value="10" />
              <p>10년 이내</p></label
            >
          </div>
          <div class="dropdown-item">
            <label
              ><input name="buildYear" type="radio" value="15" />
              <p>15년 이내</p></label
            >
          </div>
        </div>
      </div>
    </div>
    <button class="search-button" @click.prevent="searchApart">검색하기</button>
  </div>
</template>

<script>
import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";

export default {
  name: "SearchFilter",

  components: {
    VueRangeSlider,
  },

  data() {
    return {
      price: {
        range: [0, 1000000000, 10000000],
        value: [0, 1000000000],
        formatter: function (v) {
          return v >= 100000000
            ? `${v / 100000000}억원`
            : `${v / 10000000}천만원`;
        },
      },
      size: {
        range: [0, 100, 10],
        value: [0, 100],
        formatter: function (v) {
          return `${v}평(${Math.round(v / 3.306, 2)}m²)`;
        },
      },
    };
  },

  methods: {
    searchApart() {
      console.log("검색하기");
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

.search-button {
  min-width: 70px;
  font-weight: 700;
  cursor: pointer;
  background-color: rgb(50, 108, 249);
  border: 1px solid rgb(50, 108, 249);
  border-radius: 2px;
  color: rgb(255, 255, 255);
  height: 40px;
  margin-right: 2%;
}
</style>
