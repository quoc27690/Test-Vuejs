<template>
  <div>
    <h1>User Details</h1>
    <!-- Kiểm tra id -->
    <p>User with ID: {{id}}</p>
    <!-- Kiểm tra id: Với cách kiểm tra này thì ko cần dùng hàm watch -->
    <p>User with ID: {{$route.params.id}}</p>
    <hr />
    <!-- Có 2 cách gọi đường link:
    Cách 1: to="/user/ + $route.params.id + /edit"-->
    <router-link tag="button" class="btn btn-block btn-warning" :to="link">Edit User</router-link>
  </div>
</template>

<script>
export default {
  // ---------- Kiểm tra id ----------
  data() {
    return {
      // this.$route.params.id được lấy từ Routes.js
      id: this.$route.params.id,
      link: {
        name: "useredit",
        params: { id: this.$route.params.id },
        query: { locate: "vi", browse: "chrome" },
        // Sử dụng hash fragments
        hash: "#react"
      }
    };
  },
  // Việc cùng 1 component cho ra 2 đường dẫn thì nó đã bị "hash mode" (ngăn chặn thay đổi route)
  // Nên phải enter 2 lần để reload chứ ko còn là single page nữa
  // Cách khắc phục: Dùng watch theo dõi id -> nếu route thay đổi id thì nó sẽ gắn cho id hiện tại
  watch: {
    $route(newValue, oldValue) {
      this.id = newValue.params.id;
    }
  },
  // Navigation Guards : Bảo vệ các routes bằng cách điều hướng nó hoặc hủy bỏ nó
  // Trường hợp dùng trước khi routes được xuất hiện
  beforeRouteEnter(to, from, next) {
    if (true) {
      next();
    } else {
      next(false);
    }
  }
};
</script>

<style scoped>
</style>