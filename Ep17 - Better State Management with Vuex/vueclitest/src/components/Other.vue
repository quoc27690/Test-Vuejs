<template>
  <div>
    <p>This Is Result: {{ tenResult }}</p>
    <p>This Is Name Result: {{ nameResult }}</p>
    <hr />
    <input type="text" v-model="value" />
    <p>Text test: {{value}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["tenResult", "nameResult"]),
    // Thay đổi state trong store bằng v-model
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        return this.$store.dispatch("updateValue", value);
      }
    }
  }
};
</script>

<style scoped></style>
