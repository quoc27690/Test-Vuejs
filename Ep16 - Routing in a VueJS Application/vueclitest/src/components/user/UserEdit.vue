<template>
  <div>
    <h1>User Edit</h1>
    <p>User Info Client:</p>
    <ul>
      <li>locate: {{ $route.query.locate}}</li>
      <li>browse: {{ $route.query.browse}}</li>
    </ul>
    <button class="btn btn-block btn-primary" @click="status = true">Test Navigation Guards</button>
    <div style="height:700px"></div>
    <h3 id="react">Learn React</h3>
    <div style="height:1700px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false
    };
  },
  // Navigation Guards : Bảo vệ các routes bằng cách điều hướng nó hoặc hủy bỏ nó
  // Trường hợp dùng trước khi rời routes
  beforeRouteLeave(to, from, next) {
    if (this.status) {
      next();
    } else {
      if (confirm("Are You sure!!! All Data will not save!!!")) {
        next();
      } else {
        false;
      }
    }
  }
};
</script>

<style scoped>
</style>