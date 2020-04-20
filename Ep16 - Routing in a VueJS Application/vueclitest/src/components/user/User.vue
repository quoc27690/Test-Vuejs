<template>
  <div>
    <h1>User</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <hr />
    <button class="btn btn-primary" @click="backHome">Back to Home</button>
    <hr />
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    backHome() {
      // Có 2 cách viết Vue.route và this.$router
      this.$router.push("/");
    }
  }
};
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