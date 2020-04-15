<template>
  <div>
    <h5>Item Added</h5>
    <div class="progress">
      <div
        class="progress-bar bg-success"
        role="progressbar"
        style1="width: 50%"
        :style="{width: + ((items.length/maxItems) * 100) + '%'}"
      ></div>
      <span>{{items.length}} / {{maxItems}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "maxItems"]
};
</script>

<style scoped>
</style>