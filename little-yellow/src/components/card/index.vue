<template>
  <div class="card-container">
    <!-- <img class="card-img" :src="url"/> -->
    <div class="card-img" :style="`background:${cardItem.color}`"></div>
    <div class="card-title">{{ cardItem.title }}</div>
    <div class="card-content">{{ cardItem.content }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    cardItem: {
      type: Object,
    },
  },
};
</script>

<style lang="less" scoped>
.card-container {
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-radius: 2%;
  .card-img {
    margin: 5px;
    height: 150px;
    background-color: #f6f5ec;
  }
  .card-title {
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .card-content{

  }
}
</style>