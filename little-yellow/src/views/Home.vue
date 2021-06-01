<template>
  <div class="home">
    <div class="container">
      <index v-show="active === 0"></index>
      <message v-show="active === 2"></message>
      <my v-show="active === 3"></my>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">待定</van-tabbar-item>
      <van-tabbar-item icon="friends-o">消息</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import index from "./index"
import message from "./message"
import my from "./my"

export default {
  name: "Home",
  data(){
    return {
      active: 0
    }
  },
  components: {
    index,
    message,
    my
  },
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  .container{
    width: 100%;
  }
}
</style>
