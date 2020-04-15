<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <button type="button" class="btn btn-outline-primary" @click="selectComp = 'appCard'">Card</button>
        <button type="button" class="btn btn-outline-primary" @click="selectComp = 'appAbout'">About</button>
        <button
          type="button"
          class="btn btn-outline-primary"
          @click="selectComp = 'appContact'"
        >Contact</button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12"></div>
      <app-Card cardWords="Cat">
        <p>Default slot</p>
        <p slot="name1">{{cardTitle}}</p>
        <p slot="name2">Slot theo name2</p>
      </app-Card>
    </div>
    <div>
      <keep-alive>
        <component :is="selectComp"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card";
import About from "./components/About";
import Contact from "./components/Contact";
export default {
  data: function() {
    return { cardTitle: "Slot theo name1", selectComp: "appCard" };
  },
  components: {
    appCard: Card,
    appAbout: About,
    appContact: Contact
  }
};
</script>
<style></style>
