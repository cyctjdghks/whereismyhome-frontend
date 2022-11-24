<template>
  <tr>
    <td>{{ this.registerTime.split(" ")[0] }}</td>
    <td>
      {{ subject }}
    </td>
    <td class="td3">{{ hit }}</td>
  </tr>
</template>

<script>
export default {
  name: "MainNoticeListItem",

  props: {
    content: String,
    hit: Number,
    noticeNo: Number,
    registerTime: String,
    subject: String,
  },
};
</script>

<style scoped>
tbody tr {
  line-height: 50px;
  letter-spacing: -1px;
  border-bottom: 1px solid #eee;
}

tbody td {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

tbody tr:hover {
  background-color: rgb(249, 247, 247);
}

a {
  color: black;
}

.td3 {
  text-align: center;
}
</style>
