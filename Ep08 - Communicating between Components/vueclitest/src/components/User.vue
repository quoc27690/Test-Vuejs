<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome Developer! I'm {{myName}} - {{myAge}} years old</p>
    <button @click="changeMyName">Change My Name!</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <UserDetail-comp
          :myName="myName"
          :myAge="myAge"
          @resetMyNameC1="myName = $event"
          :resetMyNameC2="resetMyNameC2"
          @resetMyAgeC1="myAge = $event"
          :resetMyAgeC2="resetMyAgeC2"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <UserEdit-comp
          :myAge="myAge"
          @changeMyAgeC1="myAge = $event"
          :changeMyAgeC2="changeMyAgeC2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";

export default {
  data: function() {
    return {
      myName: "ABC",
      myAge: 18
    };
  },
  methods: {
    changeMyName: function() {
      this.myName = "Lam Anh Quoc";
    },
    changeMyAgeC2: function() {
      this.myAge = 30;
    },
    resetMyNameC2: function() {
      this.myName = "ABC";
    },
    resetMyAgeC2: function() {
      this.myAge = 18;
    }
  },
  components: {
    "UserDetail-comp": UserDetail,
    "UserEdit-comp": UserEdit
  }
};
</script>
<style scoped>
div {
  background-color: lightblue;
}
</style>