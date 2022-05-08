<!--  -->
<template>
  <div id="forum">
    <Header/>
    <div class="nav">
    <forum_nav/>
    <router-view/>
    </div>

    <Footer/>
  </div>
  
</template>

<script>
import Footer from '../../components/Footer/Footer.vue';
import Forum_nav from '../../components/Forum_com/Forum_nav.vue';
import Header from '../../components/Header/Header.vue';
export default {
  components: {Header, Footer, Forum_nav },
  name: 'Forum',
  data () {
    return {
    };
  },
}
</script>

<style scoped>
#forum {
  background-color: #f0f2f5;
}

.nav {
  width: 800px;
  height: 800px;
  margin-top: 50px;
  margin-left: 200px;
  background-color: #fff;
}
</style>