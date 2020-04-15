import Vue from "vue";
import App from "./App.vue";

// Ep07 - 02 - 2 kiểu sử dụng dữ liệu qua component
// Kiểu 1: Click cái nào thì cái đó được hưởng thôi\
// Nó sẽ hiểu this.test -> this ở đây là đối tượng component -> sẽ xác định được nó là component nào!!!

Vue.component("MyComponent", {
  data: function() {
    return {
      test: "Hello!"
    };
  },
  template:
    "<h1>Ai say: {{ test }} <hr> <button @click='changeText'>Change Text</button></h1>",
  methods: {
    changeText: function() {
      this.test = "Bye Bye!";
      console.log(this);
    }
  }
});

// Kiểu 2: Khi click các component khác cũng được hưởng
// Nó sẽ hiểu this.test -> this ở đây là đối tượng data -> cứ thằng nào có property sử dụng property của đối tượng data

// var data = {
//   test: "Hello!"
// };

// Vue.component("MyComponent", {
//   data: function() {
//     return data;
//   },
//   template:
//     "<h1>Ai say: {{ test}} <hr> <button @click='changeText'>Change Text</button></h1>",
//   methods: {
//     changeText: function() {
//       this.test = "Bye Bye!";
//       console.log(this);
//     }
//   }
// });

new Vue({
  el: "#app",
  render: h => h(App)
});
