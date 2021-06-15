<template>
  <div class="search-cotainer">
    <van-search
      v-model="city"
      placeholder="请输入所要查询天气的城市"
      @search="onSearch"
    />
    <div class="weather-card" v-show="showCard">
      <div class="left-container">
        <div class="info">{{ realtime.info }}</div>
        <div class="temp">{{ realtime.temperature }}°</div>
        <div class="humidity">空气湿度：{{ realtime.humidity }}%</div>
        <div class="direct">{{ realtime.direct }} {{ realtime.power }}</div>
      </div>
      <div class="right-container">
        <div class="time">{{ now.time }}</div>
        <div class="date">{{ now.date }}</div>
        <div class="city">{{ city }}</div>
      </div>
    </div>
    <div class="future-card">
      <div class="future-box" v-for="item in future" :key="item.date">
        <div>{{ item.date }}</div>
        <div>{{ item.direct }}</div>
        <div>{{ item.temperature }}</div>
        <div>{{ item.weather }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "",
      realtime: {},
      future: [],
      showCard: false,
      now: {},
    };
  },
  watch: {
    city(val) {
      if (val == "") {
        this.showCard = false;
      }
    },
  },
  methods: {
    onSearch() {
      this.$http
        .get("api/simpleWeather/query", {
          params: {
            key: "72ef8963519ebaf3937bbdd154b59659",
            city: this.city,
          },
        })
        .then((res) => {
          const data = res.data.result;
          this.realtime = data.realtime;
          this.future = data.future;
          this.getNow();
          this.showCard = true;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getNow() {
      const now = new Date();
      this.now.time = `${now.getHours()}:${now.getMinutes()}`;
      let days = now.getDay();
      switch (days) {
        case 1:
          days = "星期一";
          break;
        case 2:
          days = "星期二";
          break;
        case 3:
          days = "星期三";
          break;
        case 4:
          days = "星期四";
          break;
        case 5:
          days = "星期五";
          break;
        case 6:
          days = "星期六";
          break;
        case 0:
          days = "星期日";
          break;
      }
      this.now.date = `${days}/${now.getMonth() + 1}月${now.getDate()}日`;
    },
  },
};
</script>
<style scoped lang="less">
@blue: #6699cc;
.search-cotainer {
  // background-color: rgb(224, 224, 224);
  height: 100%;
  .weather-card {
    box-sizing: content-box;
    background-color: @blue;
    margin: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    .left-container {
      text-align: left;
      .info,
      .temp,
      .humidity,
      .direct {
        margin-top: 5px;
      }
      .info {
      }
      .temp {
        font-size: 38px;
      }
      .humidity {
      }
    }
    .right-container {
      text-align: right;
      .time {
        margin-top: 5px;
      }
      .city {
        font-size: 22px;
        margin-top: 50px;
      }
    }
  }
  .future-card {
    display: flex;
    flex-wrap: wrap;
    justify-content:left;
    .future-box {
      box-sizing: content-box;
      background-color: @blue;
      border-radius: 5px;
      padding: 10px 20px;
      margin: 5px;
      border-radius: 5px;
    }
  }
}
</style>