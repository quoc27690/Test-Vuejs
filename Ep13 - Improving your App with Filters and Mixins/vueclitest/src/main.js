import Vue from "vue";
import App from "./App.vue";

// a global Filter
Vue.filter("toUpperCase", function(value) {
  return value.toUpperCase();
});

Vue.mixin({
  created() {
    console.log("Create from global mixins");
  }
});

new Vue({
  el: "#app",
  render: h => h(App),
  created() {
    console.log("Create from newVue");
  }
});
