<template>
  <div>
    <user-login></user-login>
  </div>
</template>

<script>
import UserLogin from "@/components/user/UserLogin.vue";

export default {
  name: "AppUser",

  components: {
    UserLogin,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
