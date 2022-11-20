<template>
  <div class="comment">
    <div class="head">
      <h4>아이디</h4>
      <h5>(2022-11-20 23:45:21)</h5>
    </div>
    <div class="content">
      내용내용내용내용내용내용내용내용내용내용내용내용내용내용 <br />
      내용내용내용내용내용내용내용내용내용내용내용내용내용내용 <br />
      내용내용내용내용내용내용내용내용내용내용내용내용내용내용 <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeCommentItem",

  props: {
    no: Number,
    content: String,
  },

  data() {
    return {
      comment: null,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.comment {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
.head {
  display: flex;
  margin-bottom: 5px;
}

h4 {
  margin: 0;
  margin-right: 7px;
}

h5 {
  margin: 0;
  font-size: 10px;
  padding-top: 5px;
}
</style>
