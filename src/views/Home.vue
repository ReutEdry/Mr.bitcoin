<template>
  <div v-if="user" class="home">
    <h2>User info</h2>
    <h3>
      Name: <span>{{ user.name }}</span>
    </h3>
    <h3>
      Balnace: <span>{{ user.balance }}</span>
    </h3>
    <h3>
      Bitcoin rate: <span>{{ BtValue }}</span>
    </h3>
    <img src="../assets/images/goldBTC.jpg" alt="" />
  </div>
</template>

<script>
import { userService } from "@/services/user.service.js";
import { bitcoinService } from "@/services/bitcoin.service.js";
export default {
  data() {
    return {
      user: null,
      BtValue: null,
    };
  },
  created() {
    const user = userService.getUser();
    if (user) {
      this.user = user;
      this.getBtcRate();
    }
  },
  methods: {
    async getBtcRate() {
      try {
        this.BtValue = await bitcoinService.getRate();
      } catch (err) {
        console.log(`Couldn't load Btc rate:`, err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 500px;
  padding: 20px;
  margin: auto;
  margin-block-start: 50px;
  background-color: rgba(227, 206, 84, 0.122);
  h2 {
    font-weight: 600;
  }
  h3 {
    font-weight: 600;
    font-size: 1.5rem;
    span {
      font-weight: 400;
    }
  }

  h2,
  h3 {
    margin-block: 24px;
  }
  img {
    width: 250px;
    height: 200px;
    border-radius: 8px;
  }
}
</style>
