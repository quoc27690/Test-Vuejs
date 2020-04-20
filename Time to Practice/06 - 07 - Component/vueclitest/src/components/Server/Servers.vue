<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <Server v-for="server in servers" :key="server" :server="server" />
    </ul>
  </div>
</template>

<script>
import Server from "./Server";
export default {
  data() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknow" },
        { id: 4, status: "Normal" }
      ]
    };
  },
  components: {
    Server
  }
};
</script>

<style>
</style>
