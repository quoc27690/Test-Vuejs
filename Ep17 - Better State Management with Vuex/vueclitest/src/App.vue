<template>
  <div class="container">
    <h1>Vuex Section</h1>
    <hr />
    <!-- <Result :result="result" /> -->
    <Result />
    <hr />
    <Other />
    <br />
    <!-- <Counter @updated="updated" /> -->
    <Counter />
  </div>
</template>

<script>
import Counter from "./components/Counter";
import Result from "./components/Result";
import Other from "./components/Other";
export default {
  // data() {
  //   return {
  //     result: 0
  //   };
  // },
  // methods: {
  //   updated(event) {
  //     this.result += event;
  //   }
  // },
  components: {
    Counter,
    Result,
    Other
  }
};
</script>

<style scoped></style>
