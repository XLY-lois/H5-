<template>
  <div class="container">
    <div>
      <van-sidebar v-model="activeKey" class="sidebar">
        <van-sidebar-item title="天气查询" />
        <van-sidebar-item title="星座运势" />
        <van-sidebar-item title="标签名称" />
      </van-sidebar>
    </div>
    <div>
      <weather v-show="activeKey == 0"></weather>
    </div>
  </div>
</template>
<script>
import weather from "@/components/search/weather";
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
  components: {
    weather,
  },

  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  .sidebar {
    margin-top: 10px;
  }
}
</style>