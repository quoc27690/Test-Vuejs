<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p v-vidu03>Ví dụ 03</p>
        <p v-vidu04="'red'">Ví dụ 04</p>
        <p v-vidu05:background="'blue'">Ví dụ 05</p>
        <p v-vidu05="'blue'">Ví dụ 05</p>
        <p v-vidu06:background.delay="'grey'">Ví dụ 06 - Tạo ở global</p>
        <p v-local-vidu07:background.delay="'grey'">Ví dụ 07 - Tạo ở local</p>
        <p v-local-vidu08:background.delay.blink="'yellow'">Ví dụ 08</p>
        <p
          v-local-vidu09:background.delay.blink="{mainColor:'yellow', secondColor:'grey', delay:500}"
        >Ví dụ 09</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-vidu07": {
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
    },
    "local-vidu08": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delay"]) {
          delay = 3000;
        }

        if (binding.modifiers["blink"]) {
          let mainColor = binding.value;
          let secondColor = "blue";
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor === secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg === "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      }
    },
    "local-vidu09": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delay"]) {
          delay = 3000;
        }

        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor === secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg === "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style scoped>
</style>