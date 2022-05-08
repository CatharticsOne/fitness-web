<template>
  <div>
    <router-view/>
    
  </div>
</template>

<script>
import Home from 'views/Home/Home.vue'
import NavBar from './components/Header/NavBar.vue'
export default {
  components: { Home,NavBar},
  name: 'app',
  compoments: {

  }
}
</script>

<style scoped>
@import "assets/css/base.css";
</style>
