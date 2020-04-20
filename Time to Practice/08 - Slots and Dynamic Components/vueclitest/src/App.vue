<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="selectedComponent = 'Blue'">Load Blue Template</button>
        <button class="btn btn-success" @click="selectedComponent = 'Green'">Load Green Template</button>
        <button class="btn btn-danger" @click="selectedComponent = 'Red'">Load Red Template</button>
        <hr />

        <component :is="selectedComponent">
          <!-- Không truyền nội dung trực tiếp vào đây được
          Nó xuất hiện được là do <slot/> của các component con-->
          <p>This is the Content</p>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data() {
    return {
      selectedComponent: "Blue"
    };
  },
  components: {
    Blue,
    Green,
    Red
  }
};
</script>

<style>
</style>
