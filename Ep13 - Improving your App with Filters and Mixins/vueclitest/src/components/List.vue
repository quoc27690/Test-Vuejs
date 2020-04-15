<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <h1>Filter Products from List Component</h1>
      <button class="btn btn-block btn-primary" @click="products.push('ItemNew2')">Add New Item</button>
      <input type="text" class="form-control" v-model="filterProducts" />
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
</template>

<script>
import { ProductsMixin } from "../Mixins/Mixins.js";
export default {
  mixins: [ProductsMixin],
  created() {
    console.log("Create from List!");
  }
};
</script>

<style scoped>
</style>