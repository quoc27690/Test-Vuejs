<template>
  <div>
    <form>
      <div class="col-md-6 offset-md-3 form-group">
        <label>You Can Saying...</label>
        <input class="form-control" v-model="item" />
        <hr />
        <button class="btn btn-success" @click.prevent="addNewItem">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      item: ""
    };
  },
  methods: {
    addNewItem() {
      if (this.item === "") {
        return false;
      } else if (this.items.includes(this.item)) {
        return alert("This item is existed in card!");
      } else {
        this.$emit("addNewItem", this.item);
        this.item = "";
      }
    }
  }
};
</script>

<style scoped>
</style>