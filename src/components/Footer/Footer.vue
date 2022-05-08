<!--  -->
<template>
  <div id="footer">
    <div class="footer_content">
      <div class="motion">
        <li  v-for="(item,index) in motion" :key= "index">{{item}} <p><a href="">更多</a></p></li>
      </div>
      <div class="footernav">
        <li  v-for="(item,index) in footernav" :key="index">{{item}}</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      motion: ['器械动作', '新手课程', '进阶课程', '明星课程', '健身动作库'],
      footernav: ['返回首页','关于健身','联系作者']

    };
  },
}
</script>

<style scoped>
#footer {
  background-color: #333338;
  height: 150px;

}

.footer_content {
  width: 1200px;
  margin: 0 auto;
}

.footer_content .motion{
  display: flex;
}

.footer_content .motion li{
  margin: 20px 30px;  
  text-align: center;
  flex: 1;
  color: #f2f2f2;
}

.footer_content a{
  color: #c8c8c8;
}

.footer_content .footernav{
  width: 220px;
  height: 20px;
  margin: 20px auto;
}

.footer_content .footernav li{
  float: left;
  color: #fff;
  margin: 10px;
  text-align: center;
}

.footernav li:hover {
  cursor: pointer;
  color: rgb(185, 25, 25);
}

</style>