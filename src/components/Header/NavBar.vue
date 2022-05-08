<!--  -->
<template>
  <div>
    <div class="nav">
     <a href="/"><img src="~assets/img/index.jpg" alt="" /></a>
      <ul >
        <li>个人中心</li>
        <router-link to="/Forum"><li>论坛</li></router-link>
        <router-link to="/Home"><li>首页</li></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
};
</script>

<style scoped>
.nav {
  position: relative;
  /* top: 50px; */
  background-color: #131313;
  width: 100%;
  height: 68px;
  z-index: 999;
}
img {
  float: left;
  height: 68px;
  margin-left: 150px;
}

.nav li {
  float: right;
  z-index: 1;
  color: #fff;
  line-height: 68px;
  margin-right: 200px;
  cursor: pointer;
}

.nav li:hover{
  color: rgb(186, 26, 26);
}
</style>