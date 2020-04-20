import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";

// Nhược điểm của event Bus: chỉ emit được data ko emit được sự kiện và config

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
