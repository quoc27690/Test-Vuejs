import Vue from "vue";
import App from "./App.vue";

//Ep07 - 03 - Đăng ký vùng hoạt động cho Component Vue.js
//Cách 1: register global

Vue.component("MyComponent", {
  data: function() {
    return {
      test: "Hello!"
    };
  },
  template:
    "<h1>Ai say: {{ test }} <button @click='changeText'>Change Text</button></h1>",
  methods: {
    changeText: function() {
      this.test = "Bye Bye!";
      console.log(this);
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});

new Vue({
  el: "#app2",
  render: h => h(App)
});

//Cách 2: register local

// var cpt = {
//   data: function() {
//     return {
//       test: "Hello!"
//     };
//   },
//   template:
//     "<h1>Ai say: {{ test }} <button @click='changeText'>Change Text</button></h1>",
//   methods: {
//     changeText: function() {
//       this.test = "Bye Bye!";
//       console.log(this);
//     }
//   }
// };

// new Vue({
//   el: "#app",
//   components: {
//     "mycomponent": cpt
//   },
//   render: h => h(App)
// });

// new Vue({
//   el: "#app2",
//   render: h => h(App)
// });
