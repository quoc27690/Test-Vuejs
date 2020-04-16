<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 text-center">
        <h1>Vue Resource</h1>
        <hr />
        <div>
          <input
            type="text"
            class="form-control"
            v-model="user.username"
            placeholder="Vui lòng nhập username"
          />
          <br />
          <input
            type="text"
            class="form-control"
            v-model="user.useremail"
            placeholder="Vui lòng nhập useremail"
          />
          <br />
          <input type="text" class="form-control" v-model="node" />
          <br />
          <button class="btn btn-block btn-primary" @click="submit">Submit</button>
          <br />
          <button class="btn btn-block btn-success" @click="getAllData">Get All Data</button>
          <br />
          <ul class="list-group">
            <!-- Bỏ dòng :key="user" vì bây giờ nó là đối tượng (chỉ được ở dạng number/string). Nếu ko sẽ bị báo lỗi -->
            <li class="list-group-item" v-for="user in users">{{user.username}} - {{user.useremail}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        useremail: ""
      },
      users: "",
      resource: {},
      node: "data"
    };
  },
  methods: {
    submit() {
      // Cách 1:
      // this.$http
      //   .post(
      //     // Có thể để trống đường link vì đã add nó vào Vue.http.options.root trong file main
      //     "data.json",
      //     this.user
      //   )
      //   .then(
      //     response => {
      //       console.log(response);
      //     },
      //     error => {
      //       console.log(error);
      //     }
      //   );
      // Cách 2: Dùng package vue-resource
      //trường hợp ko dùng customAction
      // this.resource.save({}, this.user).then(
      //   response => {
      //     console.log(response);
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // );
      //trường hợp dùng customAction
      //thay save=createdItem và bỏ dấu ngoặc kép
      // this.resource.createdItem(this.user).then(
      //   response => {
      //     console.log(response);
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // );
    },
    getAllData() {
      // Cách 1: Normal
      // this.$http
      //   .get("https://vuejs-vue-resource-70ba1.firebaseio.com/data.json")
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(dulieulayve => {
      //     const newArr = [];
      //     for (let key in dulieulayve) {
      //       newArr.unshift(dulieulayve[key]);
      //       this.users = newArr;
      //     }
      //   });

      // Cách 2: Dùng package vue-resource
      // this.resource
      //   .get({})
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(dulieulayve => {
      //     const newArr = [];
      //     for (let key in dulieulayve) {
      //       newArr.unshift(dulieulayve[key]);
      //       this.users = newArr;
      //     }
      //   });

      // Trường hợp dùng trường lọc dữ liệu
      this.resource
        .getNode({ node11: this.node })
        .then(response => {
          return response.json();
        })
        .then(dulieulayve => {
          const newArr = [];
          for (let key in dulieulayve) {
            newArr.unshift(dulieulayve[key]);
            this.users = newArr;
          }
        });
    }
  },
  // Dùng package vue-resource
  created() {
    const customAction = {
      createdItem: { method: "POST", url: "user.json" },
      getNode: { method: "GET" }
    };

    //trường hợp ko dùng customAction
    // this.resource = this.$resource("data.json");

    //trường hợp dùng customAction
    // this.resource = this.$resource("data.json", {}, customAction);

    //trường hợp dùng customAction và lọc trường dữ liệu
    this.resource = this.$resource("{node11}.json", {}, customAction);
  }
};
</script>

<style scoped>
</style>