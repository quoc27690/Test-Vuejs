<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card mb-3">
      <div class="card-body item">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.item {
  cursor: pointer;
}
.item:hover {
  background-color: bisque;
}
</style>