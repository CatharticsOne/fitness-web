<!-- 饮食 -->
<template>
  <div>
    <div id="food">
      <div class="food_nav">
      <img src="~assets/img/food_img/nav2.png" alt="" />
        <li><a href="">更多+</a></li>
        <li><a href="">肯德基</a></li>
        <li><a href="">麦当劳</a></li>
        <li><a href="">必胜客</a></li>
        <li><a href="">汉堡王</a></li>
        <li><a href="">星巴克</a></li>
        <li><a href="">德克士</a></li>
      </div>

      <div class="food_content">
        <food_find/>
        <food_knowlege/>
        <food_tool/>
      </div>
      
    </div>
  </div>
</template>

<script>
import food_find from './food_find.vue';
import Food_knowlege from './food_knowlege.vue';
import Food_tool from './food_tool.vue';
export default {
  components: { food_find, Food_knowlege, Food_tool },
  name: 'Food',
  data () {
    return {
    };
  },
}
</script>

<style scoped>
#food {
  height: 700px;
}

.food_content {
  position: relative;
  width: 1200px;
  height: 450px;
  margin: 0 159px;

}


.food_nav {
  width: 1200px;
  height: 50px;
  margin: 0px auto;
  margin-top: 10px;
}
.food_nav img { 
  float: left;
}

.food_nav li {
  float: right;
  line-height: 30px;
  margin-right: 50px;
}
</style>