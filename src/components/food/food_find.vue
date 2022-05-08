<!-- 饮食查找 -->
<template>
  <div class="find_category">
      <h2>饮食查询</h2>
      <div class="find_content">
        <li>
        <img src="~assets/img/food_img/1.png" alt="" />
        <p>主食、杂豆</p>
      </li>
      <li>
        <img src="~assets/img/food_img/2.png" alt="" />
        <p>蛋类、肉类</p>
      </li>
      <li>
        <img src="~assets/img/food_img/3.png" alt="" />
        <p>奶类</p>
      </li>
      <li>
        <img src="~assets/img/food_img/4.png" alt="" />
        <p>蔬菜和菌藻</p>
      </li>
      <li>
        <img src="~assets/img/food_img/5.png" alt="" />
        <p>坚果、大豆</p>
      </li>
      <li>
        <img src="~assets/img/food_img/6.png" alt="" />
        <p>饮料</p>
      </li>
      <li>
        <img src="~assets/img/food_img/7.png" alt="" />
        <p>食用油、油脂</p>
      </li>
      <li>
        <img src="~assets/img/food_img/8.png" alt="" />
        <p>调味品</p>
      </li>
      <li>
        <img src="~assets/img/food_img/9.png" alt="" />
        <p>零食、点心</p>
      </li>
      <li>
        <img src="~assets/img/food_img/10.png" alt="" />
        <p>其他</p>
      </li>
      <li>
        <img src="~assets/img/food_img/11.png" alt="" />
        <p>菜肴</p>
      </li>
      </div>
      
    </div>
</template>

<script>
export default {
  name: 'Foodfind',
  data () {
    return {
    };
  },
}
</script>

<style scoped>
.find_category {
  position: absolute;
  width: 450px;
  height: 400px;
  
}

.find_content p {
  padding-left: 20px;
}

.find_content {
  margin-top: 10px;
}

.find_category h2 {
  color: #000;
  width: 110px;
  height: 20px;
  margin-top: 20px;
  line-height: 20px;
  padding-left: 10px;
  border-left: 3px solid red;
}

.find_category li {
  /* background-color: rgb(223, 222, 222); */
  float: left;
  width: 110px;
  height: 106px;
  font-size: 12px;
  margin: 5px;
  margin-top: 20px;
  border: 2px solid #f8f8f8;
  overflow: hidden;
}
.find_category li img {
  width: 110px;
  height: 86px;
}

.find_category li:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.2);
}
</style>