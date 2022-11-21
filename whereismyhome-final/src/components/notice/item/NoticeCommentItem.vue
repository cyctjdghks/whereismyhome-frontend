<template>
  <div class="comment">
    <div class="head">
      <h4>{{ userId }}</h4>
      <h5>({{ registerTime }})</h5>
    </div>
    <div class="content">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeCommentItem",

  props: {
    noticeCommentNo: Number,
    content: String,
    userId: String,
    registerTime: String,
  },
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
