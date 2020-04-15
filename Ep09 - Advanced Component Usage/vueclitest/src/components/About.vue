<template>
  <div>
    <h1>This is About Page!</h1>
    <h1>Test số đếm : {{count}}</h1>
    <button type="button" class="btn btn-outline-primary" @click="count++">Tăng</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      count: 0
    };
  },
  //Hủy luôn hoạt động
  destroyed() {
    console.log("destroyed");
  },
  //Dừng hoạt động
  deactivated() {
    console.log("deactivated");
  },
  activated() {
    console.log("activated");
  },
  created() {
    console.log("created");
  }
};
</script>
<style></style>
