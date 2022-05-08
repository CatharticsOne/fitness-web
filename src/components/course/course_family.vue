<!-- 家庭健身 -->
<template>
  <div class="family">
    <h2>家庭健身计划</h2>
    <div class="family_content">
      <li>
        <img src="~assets/img/course_img/4分钟.png" alt="" />
        <h4>4分钟Tabata全身燃动-零基础</h4>
        <span>课时：1周</span>
        <p>强度：<svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuidi"></use>
        </svg><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-5"></use>
        </svg><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-5"></use>
        </svg></p>
      </li>
      <li>
        <img src="~assets/img/course_img/睡前放松.jpg" alt="" />
        <h4>睡前放松拉伸</h4>
        <span>课时：1周</span>
        <p>强度：<svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuidi"></use>
        </svg><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-5"></use>
        </svg><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-5"></use>
        </svg></p>
        
      </li>
      <li>
        <img src="~assets/img/course_img/办公室.jpg" alt="" />
        <h4>办公室5分钟拉伸</h4>
        <span>课时：1周</span>
        <p>强度：<svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuidi"></use>
        </svg><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-5"></use>
        </svg><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-5"></use>
        </svg></p>
      </li>
      <li>
        <img src="~assets/img/course_img/游戏达人.jpg" alt="" />
        <h4>游戏达人进阶训练</h4>
        <span>课时：1周</span>
        <p>强度：<svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuidi"></use>
        </svg><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuidi"></use>
        </svg><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-5"></use>
        </svg></p>
      </li>
    </div>
  </div>
</template>



<script>
export default {
  name: "Coursefamily",
  data() {
    return {};
  },
};
</script>

<style scoped>
.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.family {
  position: absolute;
  width: 450px;
  height: 300px;
  top: 20px;
  left: 400px;
}

.family h2 {
  color: #000;
  width: 130px;
  height: 20px;
  line-height: 20px;
  padding-left: 10px;
  border-left: 3px solid red;
}

.family img {
  float: left;
  margin-right: 8px;
  width: 150px;
  height: 72px;
}

.family_content {
  /* margin-top: 10px; */
  width: 100px;
  height: 400px;
}
.family_content li {
  float: left;
  width: 350px;
  height: 72px;
  font-size: 14px;
  margin-top: 20px;
}

.family_content span,
.family_content p {
  font-size: 12px;
}

.family_content li:hover {
  cursor: pointer;
  
  background: rgba(0, 0, 0, 0.1);
}
</style>