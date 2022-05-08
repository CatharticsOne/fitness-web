<!-- 课程 -->
<template>
  <div>
    <div id="course">
      <div class="course_nav">
      <img src="~assets/img/course_img/course.png" alt="" />
        <li><a href="">更多+</a></li>
        <li><a href="">八分钟P4P锻炼</a></li>
        <li><a href="">Focus T25</a></li>
        <li><a href="">腹肌撕裂者</a></li>
        <li><a href="">囚徒健身</a></li>
      </div>

      <div class="course_content">
        <course_tool/>
        <course_family/>
        <course_motion/>
      </div>
      
    </div>
  </div>
</template>

<script>

import Course_family from "./course_family.vue";
import Course_motion from './course_motion.vue';
import course_tool from "./course_tool.vue";
export default {
  components: { course_tool, Course_family, Course_motion },
  name: "Course",
  data() {
    return {};
  },
};
</script>

<style scoped>

.course_content {
  position: relative;
  width: 1200px;
  height: 450px;
  margin: 0 159px;

}


.course_nav {
  width: 1200px;
  height: 50px;
  margin: 0px auto;
  margin-top: 10px;
}
.course_nav img { 
  float: left;
}

.course_nav li {
  float: right;
  line-height: 30px;
  margin-right: 50px;
}
</style>