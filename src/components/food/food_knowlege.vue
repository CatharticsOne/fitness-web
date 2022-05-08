<!-- 饮食知识 -->
<template>
  <div class="knowlege">
    <h2>饮食知识</h2>
    <li>
      <div class="img-wrap">
      <img
        src="~assets/img/food_img/a1.jpg"
        alt="用手掌控制饮食量 简简单单吃出健康"
      />
    </div>
    <div class="mask"></div>
    <div class="cont">
      <h3>用手掌控制饮食量 简简单单吃出健康</h3>
      <p>
        如果你是一个认真减肥的人，肯定会比较关注食物的卡路里。实际上，卡路里含量只是一...
      </p>
    </div>
    </li>
    <li>
      <div class="img-wrap">
      <img
        src="~assets/img/food_img/a2.jpg"
        alt="有助于健身的食材 这个夏天要多吃"
      />
    </div>
    <div class="mask"></div>
    <div class="cont">
      <h3>有助于健身的食材 这个夏天要多吃</h3>
      <p>
        进入夏天之后，绝对是帅哥靓女展示身材的最佳时刻，但不是每个人都是穿衣显...
      </p>
    </div>
    </li>
    <li>
      <div class="img-wrap">
      <img
        src="~assets/img/food_img/a3.jpg"
        alt="用手掌控制饮食量 简简单单吃出健康"
      />
    </div>
    <div class="mask"></div>
    <div class="cont">
      <h3>运动前，运动中，运动后的进食方法</h3>
      <p>
        分享一下在运动前、中，后的饮食小诀窍，可以更好的帮助你达到健身效果。在健身房...
      </p>
    </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "Foodknow",
  data() {
    return {};
  },
};
</script>

<style scoped>
img {
  border: 0;
  vertical-align: middle;
}

.knowlege {
  position: absolute;
  width: 380px;
  height: 300px;
  top: 20px;
  left: 400px;
}

.knowlege h2 {
  color: #000;
  width: 130px;
  height: 20px;
  line-height: 20px;
  padding-left: 10px;
  border-left: 3px solid red;
}

.knowlege img {
  width: 100%;
  display: block;
  overflow: hidden;
}

.mask {
  background-image: url(~assets/img/food_img/mask.png);
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 150px;
  transition: bottom .2s;
}

/* .mask:hover {
  bottom: 195px;
  overflow: hidden;
} */

.cont {
  /* background-color: aqua; */
  /* z-index: 1; */
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 150px;
  font-size: 16px;
  padding: 82px 10px 0 10px;
}

.cont p {
  font-size: 14px;
  line-height: 18px;
  margin-top: 12px;
  color: #ccc;
  height: 18px;
  overflow: hidden;
}

.cont:hover {
  cursor: pointer;
  color: #fff;
  padding: 50px 10px 0 10px;
  bottom: 0;
  height: 180px;
  /* overflow: hidden; */
  background: rgba(0, 0, 0, 0.7);
}

.cont:hover p {
  overflow: visible;
}

.knowlege li {
    position: relative;
    border-radius: 2px;
    overflow: hidden;
    margin-top: 5px;
    margin-bottom: 10px;
}


.img-wrap {
  width: 380px;
  height: 180px;
}
</style>