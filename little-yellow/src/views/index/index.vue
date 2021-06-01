<template>
  <div class="container">
    <div class="header-container">
      <van-row>
        <van-col span="4">
          <div>
            <van-icon name="plus" />
          </div>
        </van-col>
        <van-col span="16">
          <van-tabs v-model="active" class="header-center-item">
            <van-tab title="推荐">
                
            </van-tab>
            <van-tab title="关注">

            </van-tab>
            <van-tab title="本地">

            </van-tab>
          </van-tabs>
        </van-col>
        <van-col span="4">
          <div>
            <van-icon name="search" />
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  .header-container {
      margin-top: 5px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    // background: pink;
    .header-center-item {
        height: 50px;
    }
  }
}
</style>