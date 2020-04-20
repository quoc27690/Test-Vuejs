<template>
  <div class="container">
    <Header></Header>
    <hr />
    <div class="row">
      <Servers></Servers>
      <ServerDetails></ServerDetails>
    </div>
    <hr />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import Servers from "./components/Server/Servers";
import ServerDetails from "./components/Server/ServerDetails";

export default {
  components: {
    Header,
    Servers,
    ServerDetails,
    Footer
  }
};
</script>

<style>
</style>
