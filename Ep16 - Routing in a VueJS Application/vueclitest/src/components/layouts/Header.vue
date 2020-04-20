<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!-- Dùng ROUTER-LINK để khi click sẽ link tới trang cần  -->
          <!-- Thêm thuộc tính tag='a' sẽ render ra thẻ a -->
          <!-- Thêm thuộc tính active-class và exact để tô đậm trang chọn -->
          <router-link tag="li" class="nav-item" to="/" active-class="active" exact>
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/user" active-class="active">
            <a class="nav-link">User</a>
          </router-link>
          <!-- Kiểm tra id -->
          <!-- <router-link tag="li" class="nav-item" to="/user/1" active-class="active">
            <a class="nav-link">UserDetails@1</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/user/2" active-class="active">
            <a class="nav-link">UserDetails@2</a>
          </router-link>-->
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>