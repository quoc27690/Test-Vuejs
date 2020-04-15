<template>
  <div>
    <h1>My address : {{text}}</h1>
    <button @click="changeToPhone">Change to PhoneNumber</button>
  </div>
</template>

<script>
export default {
  data: function (){
    return {text: '827 Ngo Quyen'}
  },
  methods: {
    changeToPhone : function () {
      this.text = '0772548486'
    }
  }
}
</script>
<style></style>
