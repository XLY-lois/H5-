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
          <div>
            <van-icon name="search" />
          </div>
        </van-col>
      </van-row>
    </div>
    <Content :content="content"></Content>
  </div>
</template>
<script>
import Content from "../../components/content"
export default {
  data() {
    return {
      active: 0,
      content:[
        {
          id:0,
          url:'@/assets/imgs/img01.jpeg',
          content:'随便说点啥嘛dfs'
        },
        {
          id:1,
          url:'@/assets/imgs/img02.jpg',
          content:'随便说点啥嘛4416'
        },
        {
          id:2,
          url:'@/assets/imgs/img03.jpg',
          content:'随便说点啥嘛asasd'
        },
        {
          id:3,
          url:'@/assets/imgs/img04.jpg',
          content:'随便说点啥嘛asssaaaaa'
        },
        {
          id:4,
          url:'@/assets/imgs/img05.jpg',
          content:'随便说点啥嘛'
        },
        {
          id:5,
          url:'@/assets/imgs/img06.jpg',
          content:'随便说点啥嘛aaaaaaaaaaaa'
        },
        {
          id:6,
          url:'@/assets/imgs/img07.jpg',
          content:'随便说点啥嘛ddd'
        }
      ]
    };
  },
  components:{
    Content
  },
  watch:{
    active:function(val){
      
    }
  },
  methods:{
    changeClass(){

    }
  }
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
    .header-center-item {
        height: 50px;
    }
  }
}
</style>