<template>
  <div class="container">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  name: "AppUser",

  components: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
