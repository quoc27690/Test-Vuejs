<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h1>Filter</h1>
        <p>{{text|toLowerCase|toUpperCase}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h1>Filter Products</h1>
        <button class="btn btn-block btn-primary" @click="products.push('ItemNew1')">Add New Item</button>
        <input type="text" class="form-control mt-3" v-model="filterProducts" />
        <br />
        <div class="card">
          <div class="card-body">
            <ul>
              <li v-for="product in productsFilterDone" :key="product">{{product}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <List></List>
  </div>
</template>

<script>
import { ProductsMixin } from "./Mixins/Mixins.js";
import List from "./components/List";
export default {
  mixins: [ProductsMixin],
  filters: {
    toLowerCase: function(text) {
      return text.toLowerCase();
    }
  },
  components: {
    List
  },
  created() {
    console.log("Create from App!");
  }
};
</script>

<style scoped>
</style>