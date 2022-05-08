<!-- 器械 -->
<template>
    <div class="tool_category">
      <h2>按器械分类</h2>
      <div class="tool_content">
        <li>
        <img src="~assets/img/course_img/杠铃.jpg" alt="" />
        <p>杠铃</p>
      </li>
      <li>
        <img src="~assets/img/course_img/弹力带.jpg" alt="" />
        <p>弹力带</p>
      </li>
      <li>
        <img src="~assets/img/course_img/壶铃.jpg" alt="" />
        <p>壶铃</p>
      </li>
      <li>
        <img src="~assets/img/course_img/划船机.jpg" alt="" />
        <p>划船机</p>
      </li>
      <li>
        <img src="~assets/img/course_img/夹胸器.jpg" alt="" />
        <p>夹胸器</p>
      </li>
      <li>
        <img src="~assets/img/course_img/罗马椅.jpg" alt="" />
        <p>罗马椅</p>
      </li>
      <li>
        <img src="~assets/img/course_img/牧师凳.jpg" alt="" />
        <p>牧师凳</p>
      </li>
      <li>
        <img src="~assets/img/course_img/史密斯机.jpg" alt="" />
        <p>史密斯机</p>
      </li>
      <li>
        <img src="~assets/img/course_img/哑铃.jpg" alt="" />
        <p>哑铃</p>
      </li>
      </div>
      
    </div>
</template>

<script>
import course_family from './course_family.vue';
export default {
  components: { course_family },
  name: "Coursetool",
  data() {
    return {};
  },
};
</script>

<style scoped>

.tool_category {
  position: absolute;
  width: 450px;
  height: 400px;
  
}

.tool_content p {
  padding-left: 40px;
}

.tool_content {
  margin-top: 10px;
}

.tool_category h2 {
  color: #000;
  width: 110px;
  height: 20px;
  margin-top: 20px;
  line-height: 20px;
  padding-left: 10px;
  border-left: 3px solid red;
}

.tool_category li {
  background-color: rgb(223, 222, 222);
  float: left;
  width: 120px;
  height: 106px;
  font-size: 14px;
  margin: 5px;
  margin-top: 10px;
}

.tool_category li:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.3);
}
</style>