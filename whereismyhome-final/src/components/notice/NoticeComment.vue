<template>
  <div>
    <h3>
      댓글 <span><font-awesome-icon icon="fa-regular fa-comment" /></span>
    </h3>
    <notice-comment-item
      v-for="comment in comments"
      :key="comment.no"
      v-bind="comment"
    ></notice-comment-item>
  </div>
</template>

<script>
import NoticeCommentItem from "./item/NoticeCommentItem.vue";
import { mapActions, mapState } from "vuex";

const noticeStore = "noticeStore";

export default {
  name: "NoticeComment",

  data() {
    return {
      comments: [
        {
          no: 1,
          content: "",
        },
        {
          no: 2,
          content: "",
        },
      ],
    };
  },

  components: {
    NoticeCommentItem,
  },

  computed: {
    ...mapState(noticeStore, ["notice"]),
  },

  created() {
    this.getCommentInfo();
  },

  methods: {
    ...mapActions(noticeStore, ["getComments"]),
    async getCommentInfo() {
      await this.getComments(this.$route.params.no);
    },
  },
};
</script>

<style scoped>
h3 {
  border-bottom: 1px solid #eee;
}
</style>
