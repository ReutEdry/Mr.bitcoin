<template>
  <div v-if="marketPriceHistory">
    <LineChart :data="data" :labels="labels" />
  </div>
</template>

<script>
import { bitcoinService } from "@/services/bitcoin.service.js";
import LineChart from "../cmp/LineChart.vue";
export default {
  data() {
    return {
      marketPriceHistory: null,
    };
  },
  components: { LineChart },
  async created() {
    this.marketPriceHistory = await bitcoinService.getMarketPriceHistory();
    // console.log("Market Price History:", this.marketPriceHistory);
  },
  computed: {
    labels() {
      console.log(this.marketPriceHistory);
      return this.marketPriceHistory.map((item) =>
        new Date(item.x * 1000).toLocaleDateString("he")
      );
    },
    data() {
      return this.marketPriceHistory.map((pricePoint) => pricePoint.y);
    },
  },
};
</script>

<style>
</style>