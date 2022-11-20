<template>
  <tr>
    <td>{{ date }}</td>
    <td>
      <router-link :to="{ name: 'noticeView', params: { no: no } }">
        {{ title }}
      </router-link>
    </td>
    <td>{{ hit }}</td>
  </tr>
</template>

<script>
export default {
  name: "NoticeListItem",

  props: {
    date: String,
    title: String,
    hit: Number,
    no: Number,
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
</style>
