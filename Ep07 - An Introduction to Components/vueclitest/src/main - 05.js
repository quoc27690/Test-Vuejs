import Vue from "vue";
import vidu05 from './vidu05.vue'
import App from "./App.vue";

Vue.component('vidu05-component',vidu05)

new Vue({
  el: "#app",
  render: h => h(App)
});
