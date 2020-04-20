<template>
  <div>
    <!-- router-view dùng để render ra các component -->
    <!-- Làm điều kiện xuất hiện Header component - Multiple router-view -->
    <router-view name="header" />
    <div class="container">
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
// Vì làm điều kiện xuất hiện Header component - Multiple router-view nên ko cần dùng đoạn này
// import Header from "./components/layouts/Header";
// export default {
//   components: {
//     Header
//   }
// };
</script>

<style scoped>
/* -----slide----- */
/* enter */
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  transition: opacity 0.5s;
  animation: slide-in 0.5s ease-out;
}
/* leave */
.slide-leave {
}
.slide-leave-active {
  transition: opacity 0.5s;
  opacity: 0;
  animation: slide-out 0.5s ease-out;
}
/* key frames */
@keyframes slide-in {
  from {
    transform: translateX(-20px);
  }
  to {
    transform: translateX(0px);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(20px);
  }
}
</style>