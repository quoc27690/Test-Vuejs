<template>
  <div class="component">
    <h3>Information User Details</h3>
    <p>List Details</p>
    <p>My Name: {{myName}}</p>
    <p>My Age: {{myAge}}</p>
    <!-- <p>My Name: {{reverseName ()}}</p> -->
    <button @click="resetMyNameC1">Reset Name Cách 1</button>
    <button @click="resetMyNameC2">Reset Name Cách 2</button>
    <button @click="resetMyAgeC1">Reset Age Cách 1</button>
    <button @click="resetMyAgeC2">Reset Age Cách 2</button>
    <button @click="resetMyAgeC3">Reset Age Cách 3</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
//Props dùng để truyền dữ liệu từ comp cha sang comp con.
//Và các comp con truyền thông báo cho comp cha thông qua các sự kiện.
export default {
  props: ["myName", "resetMyNameC2", "myAge", "resetMyAgeC2"],

  //Ep08-05 Validating trong Props
  // props: {
  //     myName: {
  //         type: Object,
  //         default: 'AAA'
  //     }
  // },

  //Ep08-04 Có thể điều chỉnh props được
  // methods: {
  //     reverseName () {
  //         return this.myName.split('').reverse().join('')
  //     }
  // }

  //Ep08-06 Tùy chỉnh 1 sự kiện trong comp con
  methods: {
    resetMyNameC1() {
      this.myName = "ABC";
      this.$emit("resetMyNameC1", this.myName);
    },
    resetMyAgeC1() {
      this.myAge = 18;
      this.$emit("resetMyAgeC1", this.myAge);
    },
    resetMyAgeC3() {
      this.myAge = 18;
      eventBus.resetMyAgeC3(this.myAge);
    }
  },
  created: function() {
    eventBus.$on("changeMyAgeC3", myAge => {
      this.myAge = myAge;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
