<template>
  <div class="container">
    <Header :items="items" :maxItems="maxItems"></Header>
    <NewItem @addNewItem="addNewItem" :items="items"></NewItem>
    <ItemsLayout :items="items" @removeItem="removeItem"></ItemsLayout>
    <div class="alert alert-info text-center mt-3">Info: Click on a Item to Delete</div>
  </div>
</template>

<script>
import ItemsLayout from "./components/ItemsLayout";
import NewItem from "./components/NewItem";
import Header from "./components/Header";
export default {
  data() {
    return {
      items: ["I Love You"],
      maxItems: 10
    };
  },
  components: {
    ItemsLayout,
    NewItem,
    Header
  },
  methods: {
    addNewItem(item) {
      if (this.items.length >= 10) {
        alert("Please delete a Item First!");
      } else {
        this.items.push(item);
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
    }
  }
};
</script>

<style>
</style>