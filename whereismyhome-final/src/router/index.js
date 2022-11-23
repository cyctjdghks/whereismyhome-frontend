import Vue from "vue";
import VueRouter from "vue-router";
import AppHome from "@/views/AppHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: AppHome,
  },
  {
    path: "/map",
    name: "map",
    component: () => import("@/views/AppMap.vue"),
    children: [
      {
        path: "mapSearchResult",
        name: "mapSearchResult",
        component: () => import("@/components/search/SearchResult.vue"),
      },
    ],
  },
  {
    path: "/like",
    name: "like",
    component: () => import("@/views/AppLike.vue"),
    redirect: "/like/myDongList",
    children: [
      {
        path: "myDongList",
        name: "myDongList",
        component: () => import("@/components/like/LikeDongList.vue"),
      },
      {
        path: "myAptList",
        name: "myAptList",
        component: () => import("@/components/like/LikeAptList.vue"),
      },
    ],
  },
  {
    path: "/notice",
    name: "notice",
    component: () => import("@/views/AppNotice.vue"),
    redirect: "/",
    children: [
      {
        path: "/",
        name: "noticeList",
        component: () => import("@/components/notice/NoticeList.vue"),
      },
      {
        path: "/view/:no",
        name: "noticeView",
        component: () => import("@/components/notice/NoticeView.vue"),
      },
      {
        path: "/write",
        name: "noticeWrite",
        component: () => import("@/components/notice/NoticeWrite.vue"),
      },
      {
        path: "/modify",
        name: "noticeModify",
        component: () => import("@/components/notice/NoticeModify.vue"),
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/AppUser.vue"),
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("@/components/user/UserLogin.vue"),
      },
      {
        path: "/join",
        name: "join",
        component: () => import("@/components/user/UserRegister.vue"),
      },
    ],
  },
  {
    path: "/mypage",
    name: "mypage",
    component: () => import("@/views/AppMypage.vue"),
    redirect: "/",
    children: [
      {
        path: "/",
        name: "myInfo",
        component: () => import("@/components/user/UserInfo.vue"),
      },
      {
        path: "/myQna",
        name: "myQnaList",
        component: () => import("@/components/qna/QnaList.vue"),
      },
      {
        path: "/question",
        name: "question",
        component: () => import("@/components/qna/QuestionWrite.vue"),
      },
      {
        path: "/answer",
        name: "answer",
        component: () => import("@/components/qna/AnswerWrite.vue"),
      },
      {
        path: "/modifyquestion",
        name: "modifyquestion",
        component: () => import("@/components/qna/QuestionModify.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
