import Vue from "vue";
import App from "./App.vue";
//Thay đổi dữ liệu ko cần qua comp cha
export const eventBus = new Vue({
  methods: {
    changeMyAgeC3: function(myAge) {
      this.$emit("changeMyAgeC3", myAge);
    },
    resetMyAgeC3: function(myAge) {
      this.$emit("resetMyAgeC3", myAge);
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
