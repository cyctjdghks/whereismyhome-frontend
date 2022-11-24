<template>
  <tr>
    <td v-html="title"></td>
    <td>
      <a :href="link" target="_blank">
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
      </a>
    </td>
  </tr>
</template>

<script>
export default {
  name: "HomeNewsListItem",

  props: {
    title: String,
    link: String,
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
