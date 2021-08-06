<template>
  <div class="container">
    <div class="header">
      <div>
        <van-image
          round
          width="8rem"
          height="8rem"
          fit="cover"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="user-name">name</div>
      </div>
    </div>
    <div class="color1"></div>
    <div class="color2"></div>
    <div class="color3"></div>
    <div class="color4"></div>
  </div>
</template>
<style scoped lang="less">
.container {
  .header {
    height: 200px;
    background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    .user-name {
        margin-top: 10px;
        font-size: 20px;
    }
  }
}
</style>