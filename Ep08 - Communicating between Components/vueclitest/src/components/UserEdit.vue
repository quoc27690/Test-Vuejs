<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>My Age: {{myAge}}</p>
    <button @click="changeMyAgeC1">Change My Age Cách 1</button>
    <button @click="changeMyAgeC2">Change My Age Cách 2</button>
    <button @click="changeMyAgeC3">Change My Age Cách 3</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: ["myAge", "changeMyAgeC2"],
  methods: {
    changeMyAgeC1() {
      this.myAge = 30;
      this.$emit("changeMyAgeC1", this.myAge);
    },
    //Thay đổi dữ liệu ko cần qua comp cha

    //Trường hợp 1
    // changeMyAgeC3() {
    //   this.myAge = 30;
    //   eventBus.$emit("changeMyAgeC3", this.myAge);
    // },

    //Trường hợp 2: dùng trong main.js
    changeMyAgeC3() {
      this.myAge = 30;
      eventBus.changeMyAgeC3(this.myAge);
    }
  },
  created: function() {
    eventBus.$on("resetMyAgeC3", myAge => {
      this.myAge = myAge;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
