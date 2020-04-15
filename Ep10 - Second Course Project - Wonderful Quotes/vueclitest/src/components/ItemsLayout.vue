<template>
  <div class="row">
    <!-- native là 1 thuộc tính của sự kiện click: phù hợp với dữ liệu thay đổi liên tục với DOM -->
    <Items
      v-for="(item,index) in items"
      v-bind:data="item"
      v-bind:key="item"
      @click.native="removeItem(index)"
    >{{item}}</Items>
  </div>
</template>

<script>
import Items from "./Items";
export default {
  props: ["items"],
  components: {
    Items
  },
  methods: {
    removeItem(index) {
      this.$emit("removeItem", index);
    }
  }
};
</script>

<style>
</style>