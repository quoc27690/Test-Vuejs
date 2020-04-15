import Vue from "vue";
import App from "./App.vue";

Vue.directive("vidu03", {
  bind(el, binding, vnode) {
    el.style.backgroundColor = "yellow";
  }
});

Vue.directive("vidu04", {
  bind(el, binding, vnode) {
    el.style.backgroundColor = binding.value;
  }
});

Vue.directive("vidu05", {
  bind(el, binding, vnode) {
    if (binding.arg === "background") {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  }
});

Vue.directive("vidu06", {
  bind(el, binding, vnode) {
    var delay = 0;
    if (binding.modifiers["delay"]) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg === "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
