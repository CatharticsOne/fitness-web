<template>
  <div>
    <Header/>
    <div class="backimg">
      <img src="~assets/img/background.jpg" alt="" />
    </div>
    <div class="course_back">
      <course/>
    </div>
    <div class="food_back">
      <food/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Course from "../../components/course/course.vue";
import Food from '../../components/food/food.vue';
import NavBar from 'components/Header/NavBar.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';

export default {
  name: "Home",
  components: {
    Course,
    Food,
    NavBar,
    Header,
    Footer,
  },
};
</script>

<style scoped>
.backimg img {
  width: 100%;
  height: 400px;
}

.course_back {
  background-color: #f8f8f8;
  margin: 0 auto;
}

.food_back {
  margin: 0 auto;
}
</style>
