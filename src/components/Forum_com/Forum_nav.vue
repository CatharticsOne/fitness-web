<!--  -->
<template>
  <div>
    <div class="nav_head">
      <li
        v-for="(item, index) in nav"
        :key="index"
        :class="{ active: isActive === index }"
        @click="changeClass(index)"
      >
        <router-link :to="'/Forum' + item.path">{{ item.name }}</router-link>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isActive: 0,
      nav: [
        { name: "活跃", path: "/huoyue" },
        { name: "最新", path: "/zuixin" },
        { name: "周榜", path: "/zhoubang" },
        { name: "月榜", path: "/yuebang" },
        { name: "问答", path: "/wenda" },
        { name: "交友", path: "/jiaoyou" },
      ],
    };
  },
  methods: {
    changeClass(i) {
      this.isActive = i;
    },
  },
};
</script>

<style scoped>
.nav {
  width: 800px;
  height: 800px;
  margin-top: 50px;
  margin-left: 200px;
  background-color: #fff;
}

.nav_head {
  height: 45px;
  border-bottom: 2px solid #f0f2f5;
}

.nav_head li {
  float: left;
  width: 40px;
  height: 25px;
  margin-left: 20px;
  margin-top: 10px;
  font-size: 13px;
  line-height: 25px;
  text-align: center;
}

.nav_head li:hover {
  background-color: #f0f2f5;
  cursor: pointer;
}

.active {
  background-color: #f0f2f5;
}
</style>