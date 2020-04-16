import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";

//Use that package
Vue.use(VueResource);

//Setup vue resource global
Vue.http.options.root = "https://vuejs-vue-resource-70ba1.firebaseio.com/";

//interceptor:  trong vue nghĩa là nó tùy biến được trong việc request và response các thông số mặc định
//Trường hợp tùy biến phương thức POST -> PUT
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method === "POST") {
    request.method = "PUT";
  }
  next(response => {
    response.json = () => {
      return {
        message: response.body
      };
    };
  });
});

new Vue({
  el: "#app",
  render: h => h(App)
});
