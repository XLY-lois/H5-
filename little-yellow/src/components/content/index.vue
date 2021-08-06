<template>
  <div class="container">
    <card 
      class="card" 
      v-for="item in content" 
      :key="item.id" 
      :cardItem="item"
    >
    </card>
    <div>
      当前页为 {{ active | getCurrentPage }}
    </div>
  </div>
</template>
<script>
import card from "../card";
export default {
  data() {
    return {};
  },
  props:{
    content:{
      type:Array
    },
    active:{
      type: Number
    }
  }, 
  filters:{
    getCurrentPage:function(val) {
      if(val === 0) {
        return '推荐'
      }else if(val === 1) {
        return '关注'
      }else {
        return '本地'
      }
    }
  },
  components: {
    card,
  },
  mounted(){
    // console.log(this.content)
  }
};
</script>


<style lang="less" scoped>
.container {
  width: 100%;
  background-color: #e9e3e3;
  display: flex;
  flex-wrap: wrap;
  .card {
    width: 48%;
    margin: 1%;
  }
}
</style>