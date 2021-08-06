<template>
  <div class="">
    <div class="header-container">
      <van-row >
        <van-col span="4">
          <div>
            <van-icon name="plus" />
          </div>
        </van-col>
        <van-col span="16">
          <van-tabs v-model="active" class="header-center-item" color="#FFCC33">
            <van-tab title="推荐">
            </van-tab>
            <van-tab title="关注">
            </van-tab>
            <van-tab title="本地">
            </van-tab>
          </van-tabs>
        </van-col>
        <van-col span="4">
          <div @click="jumpTo('/searchPage')">
            <van-icon name="search" />
          </div>
        </van-col>
      </van-row>
    </div>
    <Content :active="active" :content="content"></Content>
  </div>
</template>
<script>
import Content from "../../components/content"
export default {
  data() {
    return {
      active: 0,
      content:[]
    };
  },
  components:{
    Content
  },
  watch:{
    active:function(val){
      this.getNoteList()
    }
  },
  mounted(){
     this.getNoteList()
  },
  methods:{
    changeClass() {

    },
    jumpTo(url) {
      this.$router.push(url)
    },
    async getNoteList(){
      await this.$http.get('/getNoteList').then(res=>{
        this.content = res.data.noteList
      })
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  margin-bottom: 50px;
  .header-container {
    margin-top: 5px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    .header-center-item {
        height: 50px;
    }
  }
}
</style>