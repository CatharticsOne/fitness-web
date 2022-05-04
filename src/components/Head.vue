
<template>
  <div >
    <ul>
      <li>首页</li>
      <li id="login"><a href="#">登录</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {
    };
  },
}
</script>

<style>
li {
  float: left;
  list-style: none;
  margin-left: 5px;
}

#login {
  float: right;
  margin-right:20px;
}
</style>