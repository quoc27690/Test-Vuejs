<template>
  <div>
    <h2>{{cardWords}}</h2>
    <p>This is my card!</p>
    <slot name="name1" />
    <slot name="name2" />
    <!-- Slot chưa được gán name được gọi là Default Slot -->
    <slot />
    <!-- Slot có giá trị sẵn và được gán name được gọi là Slot Default -->
    <slot name="name3">Slot Default</slot>
  </div>

  <!--
    Tổng hợp:
    1. Slot là 1 vị trí mà ta có thể nhảy vào bất cứ lúc nào.
    2. Slot sẽ được hưởng css, truyền được dữ liệu
    3. Slot sử dụng được multiple (sử dụng được nhiều slot trong cùng 1 comp)
    4. Default Slot và Slot Default

  -->
</template>

<script>
export default {
  props: ["cardWords"]
};
</script>
<style scoped>
div {
  width: 100%;
  border: 1px solid white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
p {
  color: red;
}
</style>

