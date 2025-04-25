<template>
  <!-- <div class="home"> -->
  <div class="logo-box">
    <img src="/img/logo-light.svg" />
    <div class="logo">
      <img src="/img/T E A L.svg" />
      <img src="/img/D E S I G N.svg" />
    </div>
    <p>基于VUE3, 面向设计开发者的组件库</p>
  </div>
  <div class="start-btn">
    <tl-button><tl-link href="./components/quickstart.html">开始使用</tl-link></tl-button>
  </div>
  <div class="footer">
    <img src="/img/footer.png" />
    <img src="/img/teal.svg" class="sign" />
  </div>
  <!-- </div> -->
</template>
<script setup></script>
<style scoped>
/* .home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 128px 40px 0;
  height: 100vh;
} */
.logo-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 220px;
  margin: 10vh 0;
  font-size: 32px;
  text-align: center;
}
.logo-box > img {
  position: absolute;
  top: 0px;
  left: 50%;
  z-index: -1;
  width: 380px;
  height: 250px;
  transform: translate(-50%);
  transition: color 0.3s;
}
.logo {
  display: flex;
  justify-content: center;
  gap: 72px;
  padding: 32px 0;
  transition: all 0.2s;
}
.logo img {
  height: 6vh;
  color: transparent;
}
.logo-box > p {
  font-size: 16px;
}
.start-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: -1;
}
.footer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: bottom;
  -webkit-user-select: none;
  user-select: none;
}
.footer .sign {
  position: absolute;
  bottom: 60px;
  left: 50%;
  width: 70px;
  height: auto;
  transform: translate(-50%);
}
</style>
