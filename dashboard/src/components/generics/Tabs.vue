<template>
  <div class="tabs-container">
    <div class="headers">
      <div :class="tabClass(1)" @click="changeTab(1)">Todos</div>
      <div :class="tabClass(2)" @click="changeTab(2)">Entradas</div>
      <div :class="tabClass(3)" @click="changeTab(3)">Salidas</div>
    </div>
    <div class="body">
      <h2>Promedio por horas</h2>
      <div class="dates">
        <div class="date">
          <label>Inicio</label>
          <datepicker
            v-model="initial"
            :clear-button="true"
            format="yyyy-MM-dd"
          />
        </div>
        <div class="date">
          <label>Fin</label>
          <datepicker
            v-model="final"
            :clear-button="true"
            format="yyyy-MM-dd"
          />
        </div>
				<button @click="apply()">Aplicar</button>
      </div>
      <div v-if="dataReady">
        <Bar
          v-if="tab == 1"
          :data="utils.hourAvergage(actions, 'TOTAL', initial, final).data"
          :labels="utils.hourAvergage(actions, 'TOTAL', initial, final).labels"
          ref="chart1"
        />
        <Bar
          v-else-if="tab == 2"
          :data="utils.hourAvergage(actions, 'IN', initial, final).data"
          :labels="utils.hourAvergage(actions, 'IN', initial, final).labels"
          ref="chart2"
        />
        <Bar
          v-else-if="tab == 3"
          :data="utils.hourAvergage(actions, 'OUT', initial, final).data"
          :labels="utils.hourAvergage(actions, 'OUT', initial, final).labels"
          ref="chart3"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Bar from "./Bar.vue";
import utils from "../../../public/utils";
import Datepicker from "vuejs-datepicker";
export default {
  props: {
    actions: {
      default: {},
    },
    dataReady: {
      default: false,
    },
  },
  components: {
    Bar,
    Datepicker,
  },
  data() {
    return {
      tab: 1,
      initial: null,
      final: null,
    };
  },
  methods: {
    tabClass(id) {
      return this.tab == id ? "selected tab" : "tab";
    },
    changeTab(id) {
      this.tab = id;
      setTimeout(() => {
        this.$refs["chart" + id].update();
      }, 300);
    },
		apply() {
			setTimeout(() => {
        this.$refs["chart" + this.tab].update();
      }, 300);
		}
  },
  computed: {
    utils() {
      return utils;
    },
  },
};
</script>

<style scoped>
.tabs-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.headers {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
.tab {
  height: 40px;
  flex-grow: 4;
  padding: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #fcd2d1;
  font-size: 20px;
  font-weight: bold;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
.tab:hover {
  cursor: pointer;
  background-color: #fe8f8f;
}
.selected {
  /* border: 1px solid #ff5c58; */
  height: 55px;
  border-radius: 10px 10px;
  background-color: #fe8f8f;
}
.body {
  margin-top: 20px;
  width: 100%;
  /* height: calc(100% - 40px); */
  text-align: center;
}
.dates {
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 20px 0px;
	padding: 8px;
}
.date {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin: 8px;
}
.date label {
	margin-right: 8px;
}
.dates button {
	background-color: #fe8f8f;
	border: none;
	color: white;
	border-radius: 10px;
	width: 150px;
}
.dates button:hover {
	color: #fe8f8f;
	background-color: #fcd2d1;
	cursor: pointer;
}
</style>