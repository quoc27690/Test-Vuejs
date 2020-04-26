export const productsMixin = {
  data() {
    return {
      products: ["Iphone", "Samsung", "Bphone", "Xiaomi", "Nokia", "Vphone"],
      filterProducts: ""
    };
  },
  computed: {
    productsFilterDone() {
      return this.products.filter(item => {
        return item.toLowerCase().match(this.filterProducts);
      });
    }
  },
  created() {
    console.log("Create from mixin!");
  }
};
