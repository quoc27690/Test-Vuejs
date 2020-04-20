<template>
  <div>
    <p>This Is Result: {{ tenResult }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["tenResult"])
  }
};
</script>

<style scoped></style>
