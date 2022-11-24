<template>
  <footer>
    <nav>
      <a
        href="https://github.com/sohyeonyun/whereismyhome-frontend"
        target="_blank"
        >Github</a
      >
      |
      <a
        href="https://lab.ssafy.com/wja06018/whereismyhome_final"
        target="_blank"
        >Gitlab</a
      >
    </nav>
    <p>
      <span>저자 : 윤소현, 박성환</span><br />
      <span>이메일 : wja06018@naver.com</span><br />
      <span>Copyright 2022. cocoder. All Rights Reserved.</span>
    </p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 90px;
  bottom: 0px;
  position: absolute;
  border-top: 1px solid #c4c4c4;
  padding-top: 15px;
  color: #808080;
  font-size: 11px;
}

footer a {
  display: inline-block;
  margin: 0 20px 10px 20px;
  color: #808080;
  font-size: 11px;
}

footer a:visited {
  color: #808080;
}

footer p {
  margin-top: 0;
  margin-bottom: 0;
}

footer p span {
  display: inline-block;
  margin-left: 20px;
}
</style>
