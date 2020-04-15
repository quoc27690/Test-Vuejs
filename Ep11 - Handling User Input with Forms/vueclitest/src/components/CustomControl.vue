<template>
  <div>
    <div id="on" @click="changeSwitched(true)" :class="{active: switched}">On</div>
    <div id="off" @click="changeSwitched(false)" :class="{active: !switched}">Off</div>
  </div>
</template>

<script>
export default {
  props: ["switched"],
  methods: {
    changeSwitched(isOn) {
      this.$emit("changeSwitched", isOn);
    }
  }
};
</script>

<style scoped>
#on,
#off {
  width: 40px;
  height: 20px;
  background-color: lightgray;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}

#on.active {
  background-color: lightgreen;
}

#off.active {
  background-color: lightcoral;
}
</style>