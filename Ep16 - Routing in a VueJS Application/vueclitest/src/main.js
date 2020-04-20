import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./Routes";

// Use vue-router
Vue.use(VueRouter);

const router = new VueRouter({
  // bật chế độ này để sử dụng 'hash fragments'. Vì 'hash fragments' cần nút '#'.
  // Nếu ko có chế độ này thì nút '#' được coi là url ảo sẽ ko chạy được 'hash fragments'
  mode: "history",
  // short for `routes: routes`
  routes,
  // Hàm này dùng để sau khi vào trang nếu có hash fragments sẽ đi đến trực tiếp
  // Phải dùng kiểu Async vì khi vào trang đã chạy transiton trước
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      if (to.hash) {
        return setTimeout(() => {
          resolve({ selector: to.hash });
        }, 500);
      }
    });
  }
});

// Navigation Guards : Bảo vệ các routes bằng cách điều hướng nó hoặc hủy bỏ nó
// Trường hợp dùng trước khi tất cả các routes trong hệ thống hoạt động
router.beforeEach((to, from, next) => {
  console.log("Navigation Guards - beforeEach");
  next();
});

new Vue({
  el: "#app",
  // short for `router: router`
  router,
  render: h => h(App)
});
