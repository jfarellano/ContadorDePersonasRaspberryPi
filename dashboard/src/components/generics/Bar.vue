<script>
import { Line } from "vue-chartjs";


export default {
  extends: Line,
  props: ["data", "labels"],
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
      },
    };
  },
  computed: {
		chartdata() {
			return {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: "#f87979",
            data: this.data,
          },
        ],
      }
		}
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  },
  methods: {
    update() {
      this.renderChart(this.chartdata, this.options);
    },
  },
};
</script>

<style>
</style>