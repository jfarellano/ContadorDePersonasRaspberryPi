<template>
  <div class="main-container">
    <div class="banner">
      <p>Contador de personas</p>
    </div>
    <div class="content-container">
      <div class="courrent-stats">
        <div class="card">
          <div class="title">Total</div>
          <div class="number">
            {{ Utils.todayStats(filterByDays(), "TOTAL") }}
          </div>
        </div>
        <div class="card">
          <div class="title">Entradas</div>
          <div class="number">{{ Utils.todayStats(filterByDays(), "IN") }}</div>
        </div>
        <div class="card">
          <div class="title">Salidas</div>
          <div class="number">
            {{ Utils.todayStats(filterByDays(), "OUT") }}
          </div>
        </div>
      </div>
      <Tabs :actions="filterByDays()" :dataReady="dataReady" />
    </div>
  </div>
</template>

<script>
import Tabs from "./generics/Tabs.vue";
import Utils from "../../public/utils";
export default {
  name: "Home",
  props: {
    msg: String,
  },
  components: {
    Tabs,
  },
  data() {
    return {
      actions: [],
      dataReady: false,
    };
  },
  methods: {
    updateData() {
      this.data[1] = 35;
      this.$refs.chart.update();
    },
    filterByDays() {
      let filtered = {};
      this.actions.forEach((action) => {
        if (!filtered[this.dateSting(action.formatDate)]) {
          filtered[this.dateSting(action.formatDate)] = {
            date: this.dateSting(action.formatDate),
            jsDate: action.date,
            IN: 0,
            OUT: 0,
            hourly: {
              "00": { IN: 0, OUT: 0 },
              "01": { IN: 0, OUT: 0 },
              "02": { IN: 0, OUT: 0 },
              "03": { IN: 0, OUT: 0 },
              "04": { IN: 0, OUT: 0 },
              "05": { IN: 0, OUT: 0 },
              "06": { IN: 0, OUT: 0 },
              "07": { IN: 0, OUT: 0 },
              "08": { IN: 0, OUT: 0 },
              "09": { IN: 0, OUT: 0 },
              10: { IN: 0, OUT: 0 },
              11: { IN: 0, OUT: 0 },
              12: { IN: 0, OUT: 0 },
              13: { IN: 0, OUT: 0 },
              14: { IN: 0, OUT: 0 },
              15: { IN: 0, OUT: 0 },
              16: { IN: 0, OUT: 0 },
              17: { IN: 0, OUT: 0 },
              18: { IN: 0, OUT: 0 },
              19: { IN: 0, OUT: 0 },
              20: { IN: 0, OUT: 0 },
              21: { IN: 0, OUT: 0 },
              22: { IN: 0, OUT: 0 },
              23: { IN: 0, OUT: 0 },
            },
            all: [action],
            weekDay: action.date.getDay(),
          };
        } else filtered[this.dateSting(action.formatDate)].all.push(action);

        filtered[this.dateSting(action.formatDate)].hourly[action.time.hour][
          action.action
        ]++;
        filtered[this.dateSting(action.formatDate)][action.action]++;
      });
      setTimeout(() => {
        this.dataReady = true;
      }, 600);
      return filtered;
    },
    dateSting(date) {
      return date.year + "-" + date.month + "-" + date.day;
    },
    async getData() {
      let { data } = await this.axios.get("http://localhost:5000/logs");
      let actions = data.actions;
      this.actions = actions.map((action) => {
        return {
          action: action.action,
          time: {
            hour: action.time.split(":")[0],
            minute: action.time.split(":")[1],
          },
          date: new Date(
            action.date.split("-")[1] +
              "/" +
              action.date.split("-")[2] +
              "/" +
              action.date.split("-")[0]
          ),
          formatDate: {
            year: action.date.split("-")[0],
            month: action.date.split("-")[1],
            day: action.date.split("-")[2],
          },
        };
      });
    },
  },
  computed: {
    Utils() {
      return Utils;
    },
  },
  async mounted() {
    this.getData()
    setInterval(
      () => {
        this.getData()
      },
      10000
    )
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-container {
  width: 100vw;
  height: 100vh;
  position: absolute;
}
.banner {
  width: 100vw;
  height: 70px;
  background-color: #ff5c58;
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.banner p {
  color: white;
  margin: 8px;
  font-weight: bold;
  font-size: 20px;
}
.content-container {
  margin-top: 0px;
  height: 100%;
}
.courrent-stats {
  min-height: 150px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.card {
  height: 120px;
  width: 120px;
  margin: 8px;
  background-color: #ffedd3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  color: black;
  font-size: 20px;
}
.number {
  color: black;
  font-size: 40px;
  font-weight: bold;
}
</style>
