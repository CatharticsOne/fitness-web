<!-- 计算工具 -->
<template>
  <div class="food_tool">
    <h2>计算工具</h2>
    <div class="tool_category">
      <li v-for="(item,index) in list" :key="index" :style="' background-position-y:'+background(index)" >
        <p>{{ item }}</p>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foodtool',
  data () {
    return {
      list:['了解自己','身体质量','标准体重','代谢循环','燃脂运动','最大维度','体脂率','最终体重','蛋白质含量','热量计算','补水计算','饮食计算']

    };
  },
  methods:{
    background(index){
      let y = -581-index*75;
      return `${y}px`
    }
  }
}
</script>

<style scoped>
.food_tool {
  position: absolute;
  top: 20px;
  left: 800px;
}

.food_tool h2 {
  color: #000;
  width: 130px;
  height: 20px;
  line-height: 20px;
  padding-left: 10px;
  border-left: 3px solid red;
}

.tool_category {
  margin-top: 10px;
  width: 390px;
  height: 550px;
}


.tool_category li {
  background: url("~assets/img/food_img/spirite.png") -17px  no-repeat;
  float: left;
  width: 67px;
  height: 70px;
  margin: 30px;
}

.tool_category p {
  color: #000;
  font-weight: 700;
  font-size: 14px;
  margin-top: 67px;
  margin-left: 5px;
  
}

.tool_category li:hover {
  cursor: pointer;
}
</style>