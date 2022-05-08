<!-- 健身动作 -->
<template>
  <div class="motion">
    <h2>锻炼动作</h2>
    <div class="make_plan">
      <a href=""><img src="~assets/img/course_img/make-plan.jpg" alt=""></a>
    </div>
    <p>共<span>1265</span>/健身房器械</p>
    <div class="action">
      <li>
        <img src="~assets/img/course_img/胸肌.jpg" alt="">
      </li>
      <li>
        <img src="~assets/img/course_img/二头.jpg" alt="">
      </li>
      <li>
        <img src="~assets/img/course_img/腹肌.jpg" alt="">
      </li>
      <li>
        <img src="~assets/img/course_img/肩部.jpg" alt="">
      </li>
      <li>
        <img src="~assets/img/course_img/小腿.jpg" alt="">
      </li>
      <li>
        <img src="~assets/img/course_img/背部.jpg" alt="">
      </li>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Coursemotion',
  data () {
    return {
    };
  },
}
</script>

<style scoped>
.motion {
  position: absolute;
  top: 20px;
  left: 800px;
}

.motion h2 {
  color: #000;
  width: 130px;
  height: 20px;
  line-height: 20px;
  padding-left: 10px;
  border-left: 3px solid red;
}

.motion .make_plan {
  margin-top: 10px;
}

.motion p {
  margin-top: 8px;
  color: orange;
  color: 16px;
}
.motion span {
  font-size: 22px;
}

.action {
  width: 390px;
  height: 300px;
}

.action li{
  float: left;
  width: 120px;
  height: 88px;
  margin: 5px;
}

.action img {
  width: 118px;
  height: 86px;
}

.action li:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.3);
}
</style>