<template>
  <div class="search-cotainer">
    <van-search
      v-model="city"
      placeholder="请输入所要查询天气的城市"
      @search="onSearch"
    />
    <div class="weather-card" v-show="showCard">
      <div class="left-container">
        <div class="info">
          <img
            class="icon"
            alt="noicon"
            :src="getWeatherIcon(realtime.info)"
          /><span class="text">{{ realtime.info }}</span>
        </div>
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
    <div class="future-card" v-if="showCard">
      <div class="future-box" v-for="item in future" :key="item.date">
        <div class="left-container">
          <div>
            {{ item.weather }}
            <img
              class="icon"
              alt="noicon"
              :src="getWeatherIcon(item.weather)"
            />
          </div>
          <div>{{ item.temperature }}</div>
        </div>
        <div class="right-container">
          <div>{{ item.direct }}</div>

          <div>{{ item.date }}</div>
        </div>
      </div>
      <div id="myChart" :style="{ width: '300px', height: '300px' }"></div>
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
      chartData: {},
      option: {
        title: {
          text: "折线图堆叠",
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
        },
        yAxis: {
          type: "value",
        },
        series: [],
      },
    };
  },
  computed: {},
  watch: {
    city(val) {
      if (val == "") {
        this.showCard = false;
      }
    },
  },
  mounted() {
    // this.drawLine();
  },
  methods: {
    drawLine() {
      this.$nextTick(function () {
        let myChart = this.$echarts.init(document.getElementById("myChart"));
        // 绘制图表
        let dateList = [];
        let heightTemp = [];
        let lowTemp = [];
        this.future.forEach(function (item) {
          dateList.push(item.date);
          let tempList = item.temperature.split("/");
          heightTemp.push(Number(tempList[1].replace(/[^0-9]/gi, "")));
          lowTemp.push(Number(tempList[0]));
        });
        this.option.series[1] = {
          name: "最低温度",
          type: "line",
          data: lowTemp,
        };
        this.option.series[0] = {
          name: "最高温度",
          type: "line",
          data: heightTemp,
        };
        this.option.xAxis.data = dateList;
        myChart.setOption(this.option);
      });
    },
    async onSearch() {
      await this.$http
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
          this.drawLine();
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
    getChartData() {
      let dateList = [];
      let heightTemp = [];
      let lowTemp = [];
      this.future.forEach(function (item) {
        dateList.push(item.date);
        let tempList = item.temperature.split("/");
        heightTemp.push(tempList[1]);
        lowTemp.push(Number(tempList[0]));
      });
      this.option.xAxis.data = dateList;
      // console.log(this.option.xAxis.data);
      // this.chartData.dateList = dateList;
      // this.chartData.lowTemp = lowTemp;
      // console.log(this.chartData.lowTemp);
    },
    getWeatherIcon(info) {
      let iconUrl = "";
      if (info) {
        if (info.indexOf("转") > 0) {
          let infoList = info.split("转");
          info = infoList[0];
        }
        switch (info) {
          case "大雨":
            iconUrl = require("../../assets/icon/dayu.png");
            break;
          case "雷阵雨":
            iconUrl = require("../../assets/icon/leizhenyu.png");
            break;
          case "阵雨":
            iconUrl = require("../../assets/icon/zhenyu.png");
            break;
          case "中雨":
            iconUrl = require("../../assets/icon/zhongyu.png");
            break;
          case "小雨":
            iconUrl = require("../../assets/icon/xiaoyu.png");
            break;
          case "晴":
            iconUrl = require("../../assets/icon/qingtian.png");
            break;
          case "多云":
            iconUrl = require("../../assets/icon/duoyun.png");
            break;
          case "阴":
            iconUrl = require("../../assets/icon/yintian.png");
            break;
        }
      }
      return iconUrl;
    },
  },
};
</script>
<style scoped lang="less">
@blue: #6699cc;
.search-cotainer {
  // background-color: rgb(224, 224, 224);
  margin-bottom: 50px;
  margin-top: 20px;
  height: 100%;
  .weather-card {
    box-sizing: content-box;
    // background-color: @blue;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid rgba(241, 241, 241, 0.836);
    box-shadow: 1px 1px 1px #00000024;
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
        font-size: 26px;
        display: flex;
        align-items: center;
        .icon {
          width: 50px;
        }
        .text {
          margin-left: 10px;
        }
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
    justify-content: left;
    .future-box {
      width: 36%;
      border-radius: 5px;
      border: 1px solid rgba(241, 241, 241, 0.836);
      box-shadow: 1px 1px 1px #00000024;
      border-radius: 5px;
      padding: 10px 20px;
      margin: 5px;
      border-radius: 5px;
      .left-container {
        .icon {
          width: 30px;
        }
      }
      .right-container {
      }
    }
  }
}
</style>