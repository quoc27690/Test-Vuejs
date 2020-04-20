<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="asyncDecrement">Decrement</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    // increment() {
    //   // this.$emit("updated", 1);
    //   // this.$store.state.result++;

    //   // mutations
    //   this.$store.commit("increment", 30);
    // },
    // ...mapMutations(["decrement"]),
    ...mapActions(["increment", "asyncDecrement"])

    // decrement() {
    //   // this.$emit("updated", -1);
    //   this.$store.state.result--;
    // }
  }
};
</script>

<style scoped></style>
