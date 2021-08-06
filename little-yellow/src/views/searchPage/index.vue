<template>
  <div class="page-container">
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-search v-model="keyWord" placeholder="请输入搜索关键词" />
    <div class="history">
      <div class="history-header">
          <div>
              历史搜索
          </div>
          <div>
              <van-icon name="delete-o" />
          </div>
        </div>
      <div class="history-list">
        <div class="list-item">
          <van-tag color="#6699CC" plain>历史记录1</van-tag>
        </div>
        <div class="list-item">
          <van-tag color="#6699CC" plain>历史记录1</van-tag>
        </div>
        <div class="list-item">
          <van-tag color="#6699CC" plain>历史记录1</van-tag>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="less">
.page-container {
  .history {
    padding: 10px 12px;
    .history-header {
      text-align: left;
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
    }
    .history-list {
      display: flex;
      .list-item {
          margin-right: 10px;
      }
    }
  }
}
</style>